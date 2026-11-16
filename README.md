# Missão: Dinheiro em Movimento

Aplicativo web de desafios formativos para a turma 7º C, baseado no material de Educação Financeira do 4º bimestre. São seis missões com 36 desafios sobre renda, extrato, fatura, cupom fiscal, porcentagem, orçamento e gráficos de setores.

## Executar

Abra `index.html` em um navegador moderno. Publicado por HTTPS, o app pode ser instalado como aplicativo web progressivo e abre offline após a primeira visita. O andamento de cada participante é salvo separadamente neste dispositivo e o relatório final pode ser baixado em JSON.

## Publicar no GitHub Pages

Copie os arquivos da pasta para a raiz do repositório `Mandic82/edfapp`. O fluxo `.github/workflows/pages.yml` publica automaticamente a branch `main` no GitHub Pages. Após a conclusão do primeiro fluxo, o app ficará disponível em `https://mandic82.github.io/edfapp/`.

## Conectar a planilha

1. Crie um projeto Apps Script independente em script.google.com.
2. Use o arquivo `apps-script/Code.gs` do pacote local no projeto do Apps Script. Ele é mantido fora do repositório público porque aponta para a planilha privada.
3. Execute `setup()` uma vez e autorize o script. A função cria e formata a aba `Resultados`.
4. Em **Implantar > Nova implantação**, selecione **App da Web**, execute como sua conta e permita acesso a qualquer pessoa com o link. Copie o URL terminado em `/exec`.
5. O aplicativo envia os resultados ao concluir uma jornada. Para consultar os dados, use **Acesso do professor**, digite a senha, abra a planilha e baixe a aba `Resultados` em CSV. Em seguida, importe o arquivo no painel para ver os indicadores, o resumo por missão e os registros individuais. A análise é processada localmente no navegador e não usa um endpoint público de leitura.

O endpoint de Apps Script precisa aceitar chamadas públicas para que estudantes enviem os resultados. Restrinja o compartilhamento da planilha somente à equipe docente. A resposta do `fetch` é opaca no navegador; o app não afirma que a linha chegou à planilha sem uma confirmação verificável.

## Observações pedagógicas

- As seis missões têm janelas mínimas de 15 minutos cada, somando 90 minutos.
- O cronômetro pausa quando a aba do navegador está oculta ou quando a pausa consciente é aberta.
- A revisão de reforço só é oferecida após 60 minutos de atividade.
- A pontuação é formativa e deve ser interpretada junto com a observação docente e outras evidências de aprendizagem.


Cada missão termina com uma atividade de fixação: jogo da memória ou cruzadinha com conceitos do tema. A atividade deve ser concluída antes do registro da reflexão e do avanço.


A primeira missão permite avanço antecipado após o jogo de fixação quando o estudante registra uma resposta com pelo menos 500 caracteres e contempla os oito itens da rubrica. O tempo total mínimo de 90 minutos permanece aplicado no encerramento da jornada.

A segunda missão também permite avanço antecipado após a cruzadinha quando a resposta narrativa contempla os seis critérios da análise do extrato de Carlos.
