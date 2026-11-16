/**
 * Apps Script da Missão: Dinheiro em Movimento.
 * Configure este projeto com o ID da planilha APP_EDFINANCEIRA e execute setup() uma vez.
 * A planilha recebe nome do participante, turma, duração, resultado, respostas e reflexões.
 */
const TAB_NAME = 'Resultados';
const SPREADSHEET_ID = '1YUrsuxgdS8AHe1DoraZO6HM7j3ig1cuEdo_Ni76Lz_8';
const HEADERS = [
  'Recebido em', 'Turma', 'Estudante', 'Início da sessão', 'Duração (segundos)',
  'Acertos', 'Respondidas', 'Aproveitamento (%)', 'Respostas (JSON)',
  'Reflexões (JSON)', 'Revisão após 1h', 'Tipo de registro', 'Missão', 'ID do registro'
];

function setup() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(TAB_NAME);
  if (!sheet) sheet = ss.insertSheet(TAB_NAME);
  ensureHeaders(sheet);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#173b2d').setFontColor('#ffffff');
  sheet.autoResizeColumns(1, HEADERS.length);
  return `A aba ${TAB_NAME} está pronta.`;
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true, service: 'Missão: Dinheiro em Movimento' }))
    .setMimeType(ContentService.MimeType.JSON);
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
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
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

function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

