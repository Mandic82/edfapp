# Missão: Dinheiro em Movimento

Aplicativo web de desafios formativos para a turma 7º C, baseado no material de Educação Financeira do 4º bimestre. São seis missões com 36 desafios sobre renda, extrato, fatura, cupom fiscal, porcentagem, orçamento e gráficos de setores.

## Executar

Abra `index.html` em um navegador moderno. Publicado por HTTPS, o app pode ser instalado como aplicativo web progressivo e abre offline após a primeira visita. O andamento de cada participante é salvo separadamente neste dispositivo e o relatório final pode ser baixado em JSON.

## Publicar no GitHub Pages

Copie os arquivos da pasta para a raiz do repositório `Mandic82/edfapp`. O fluxo `.github/workflows/pages.yml` publica automaticamente a branch `main` no GitHub Pages. Após a conclusão do primeiro fluxo, o app ficará disponível em `https://mandic82.github.io/edfapp/`.

## Conectar a planilha e abrir o painel do professor

1. No projeto Apps Script, substitua o conteúdo de `apps-script/Code.gs` pelo arquivo deste repositório.
2. Em **Configurações do projeto > Propriedades do script**, crie:
   - `SPREADSHEET_ID` com o ID da planilha `APP_EDFINANCEIRA`;
   - `TEACHER_PASSWORD` com a senha escolhida para o painel.
3. Execute `setup()` uma vez e autorize o acesso à planilha. Essa função cria/atualiza a aba `Resultados` e os cabeçalhos.
4. Em **Implantar > Gerenciar implantações**, edite a implantação do app da Web, escolha **Nova versão** e implante. Mantenha a execução como sua conta e o acesso público por link para receber os envios dos estudantes.
5. Na página publicada, use **Acesso do professor** e informe a senha configurada. O painel consulta os dados direto do Apps Script e mostra indicadores, resultados por missão e registros individuais; não é necessário baixar ou importar CSV.

As conclusões parciais de missão e a jornada completa são registradas em linhas separadas. Antes de usar com a turma, atualize a implantação do Apps Script: a versão anterior recebe apenas a jornada completa e ainda não oferece a leitura autenticada do painel. A planilha pode permanecer compartilhada somente com você; o app lê os resultados pelo Apps Script executado na sua conta.

## Observações pedagógicas

- As seis missões têm janelas mínimas de 15 minutos cada, somando 90 minutos.
- O cronômetro pausa quando a aba do navegador está oculta ou quando a pausa consciente é aberta.
- A revisão de reforço só é oferecida após 60 minutos de atividade.
- A pontuação é formativa e deve ser interpretada junto com a observação docente e outras evidências de aprendizagem.


Cada missão termina com uma atividade de fixação: jogo da memória ou cruzadinha com conceitos do tema. A atividade deve ser concluída antes do registro da reflexão e do avanço.


A primeira missão permite avanço antecipado após o jogo de fixação quando o estudante registra uma resposta com pelo menos 500 caracteres e contempla os oito itens da rubrica. O tempo total mínimo de 90 minutos permanece aplicado no encerramento da jornada.

A segunda missão também permite avanço antecipado após a cruzadinha quando a resposta narrativa contempla os seis critérios da análise do extrato de Carlos. A terceira missão usa o caso do efeito bola de neve da fatura de Marina; as missões 4 a 6 também encerram com produções de texto próprias para cupom fiscal, porcentagem e orçamento. Cada missão exibe critérios de validação, e a resposta completa permite avanço antecipado sem remover o mínimo total de 90 minutos.
