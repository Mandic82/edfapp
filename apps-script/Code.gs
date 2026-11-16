/**
 * Apps Script da Missão: Dinheiro em Movimento.
 * Configure este projeto com o ID da planilha APP_EDFINANCEIRA e execute setup() uma vez.
 * A planilha recebe nome do participante, turma, duração, resultado, respostas e reflexões.
 */
const TAB_NAME = 'Resultados';
const MAX_TEACHER_ROWS = 5000;
const HEADERS = [
  'Recebido em', 'Turma', 'Estudante', 'Início da sessão', 'Duração (segundos)',
  'Acertos', 'Respondidas', 'Aproveitamento (%)', 'Respostas (JSON)',
  'Reflexões (JSON)', 'Revisão após 1h', 'Tipo de registro', 'Missão', 'ID do registro'
];

function setup() {
  const ss = SpreadsheetApp.openById(getSpreadsheetId_());
  let sheet = ss.getSheetByName(TAB_NAME);
  if (!sheet) sheet = ss.insertSheet(TAB_NAME);
  ensureHeaders(sheet);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#173b2d').setFontColor('#ffffff');
  sheet.autoResizeColumns(1, HEADERS.length);
  return `A aba ${TAB_NAME} está pronta.`;
}

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};
  if (params.action !== 'teacherResults') {
    return json({ ok: true, service: 'Missão: Dinheiro em Movimento' });
  }
  const callback = String(params.callback || '');
  if (!/^[A-Za-z_$][A-Za-z0-9_$]{0,79}$/.test(callback)) {
    return json({ ok: false, error: 'Consulta inválida.' });
  }
  const expected = PropertiesService.getScriptProperties().getProperty('TEACHER_PASSWORD');
  if (!expected || String(params.password || '') !== expected) {
    return jsonp({ ok: false, error: 'Senha incorreta ou painel ainda não configurado.' }, callback);
  }
  try {
    const ss = SpreadsheetApp.openById(getSpreadsheetId_());
    const sheet = ss.getSheetByName(TAB_NAME);
    if (!sheet || sheet.getLastRow() < 2) return jsonp({ ok: true, rows: [] }, callback);
    const width = sheet.getLastColumn();
    const values = sheet.getRange(1, 1, sheet.getLastRow(), width).getDisplayValues();
    const headers = values[0].map(value => String(value).trim());
    const col = (name, fallback) => {
      const index = headers.indexOf(name);
      return index < 0 ? fallback : index;
    };
    const rows = values.slice(Math.max(1, values.length - MAX_TEACHER_ROWS)).map(row => ({
      receivedAt: row[col('Recebido em', 0)] || '',
      className: row[col('Turma', 1)] || '',
      student: row[col('Estudante', 2)] || '',
      startedAt: row[col('Início da sessão', 3)] || '',
      durationSeconds: boundedInt(row[col('Duração (segundos)', 4)], 0, 86400),
      correct: boundedInt(row[col('Acertos', 5)], 0, 100),
      answered: boundedInt(row[col('Respondidas', 6)], 0, 100),
      percent: boundedInt(row[col('Aproveitamento (%)', 7)], 0, 100),
      answers: parseJsonCell_(row[col('Respostas (JSON)', 8)], []),
      reflections: parseJsonCell_(row[col('Reflexões (JSON)', 9)], {}),
      review: row[col('Revisão após 1h', 10)] || '',
      recordType: row[col('Tipo de registro', 11)] || 'Jornada completa',
      mission: row[col('Missão', 12)] || 'Todas as missões'
    })).filter(row => row.student).reverse();
    return jsonp({ ok: true, rows }, callback);
  } catch (err) {
    return jsonp({ ok: false, error: 'Não foi possível consultar os resultados.' }, callback);
  }
}

function doPost(e) {
  try {
    const body = e && e.postData && e.postData.contents ? e.postData.contents : '';
    if (!body || body.length > 45000) throw new Error('Envio vazio ou acima do limite.');
    const data = JSON.parse(body);
    if (data.action !== 'saveResult' && data.action !== 'saveMission') throw new Error('Ação desconhecida.');
    const isMission = data.action === 'saveMission';
    const student = cleanCell(data.student, 80);
    const className = cleanCell(data.className || '7º C', 12);
    const seconds = boundedInt(data.durationSeconds, 0, 86400);
    const correct = boundedInt(data.correct, 0, 100);
    const answered = boundedInt(data.answered, 0, 100);
    const percent = boundedInt(data.percent, 0, 100);
    if (!student || !data.startedAt) throw new Error('Dados necessários ausentes.');
    const ss = SpreadsheetApp.openById(getSpreadsheetId_());
    const sheet = ss.getSheetByName(TAB_NAME) || ss.insertSheet(TAB_NAME);
    ensureHeaders(sheet);
    const recordId = cleanCell(data.recordId || [student, data.startedAt, data.action, data.missionIndex ?? 'final'].join(':'), 180);
    const idColumn = HEADERS.indexOf('ID do registro') + 1;
    if (sheet.getLastRow() > 1) {
      const ids = sheet.getRange(2, idColumn, sheet.getLastRow() - 1, 1).getDisplayValues().flat();
      if (ids.includes(recordId)) return json({ ok: true, duplicate: true });
    }
    const answers = JSON.stringify(Array.isArray(data.answers) ? data.answers.slice(0, 40) : []);
    const reflections = JSON.stringify(data.reflections && typeof data.reflections === 'object' ? data.reflections : {});
    sheet.appendRow([
      new Date(), className, student, cleanCell(data.startedAt, 40), seconds, correct, answered,
      percent, cleanCell(answers, 16000), cleanCell(reflections, 4000),
      data.reviewScore === true ? 'Sim' : data.reviewScore === false ? 'Não' : 'Não realizada',
      isMission ? 'Missão concluída' : 'Jornada completa',
      isMission ? cleanCell(data.missionTitle || 'Missão', 100) : 'Todas as missões',
      recordId
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err && err.message || err) });
  }
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    return;
  }
  const width = Math.max(sheet.getLastColumn(), 1);
  const current = sheet.getRange(1, 1, 1, width).getDisplayValues()[0];
  HEADERS.forEach(header => {
    if (!current.includes(header)) {
      const column = sheet.getLastColumn() + 1;
      sheet.getRange(1, column).setValue(header);
      current.push(header);
    }
  });
}

function cleanCell(value, max) {
  let s = String(value == null ? '' : value).slice(0, max).replace(/[\u0000-\u001f]/g, ' ');
  // Prevent spreadsheet formula injection in learner supplied text.
  if (/^[=+\-@]/.test(s)) s = `'${s}`;
  return s;
}

function boundedInt(value, min, max) {
  const n = Number(value);
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, Math.round(n)));
}

function getSpreadsheetId_() {
  const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('Configure a propriedade SPREADSHEET_ID do projeto.');
  return id;
}

function parseJsonCell_(value, fallback) {
  try { return JSON.parse(value || ''); } catch (err) { return fallback; }
}

function jsonp(value, callback) {
  return ContentService.createTextOutput(callback + '(' + JSON.stringify(value) + ');')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

