# Missão: Dinheiro em Movimento

Aplicativo web de desafios formativos para a turma 7º C, baseado no material de Educação Financeira do 4º bimestre. São seis missões sobre renda, extrato, fatura, cupom fiscal, porcentagem, orçamento e gráficos de setores.

## Executar

Abra `index.html` em um navegador moderno. Publicado por HTTPS, o app pode ser instalado como aplicativo web progressivo e abre offline após a primeira visita. O andamento de cada participante é salvo separadamente neste dispositivo e o relatório final pode ser baixado em JSON.

## Publicar no GitHub Pages

Copie os arquivos da pasta para a raiz do repositório `Mandic82/edfapp`. O fluxo `.github/workflows/pages.yml` publica automaticamente a branch `main` no GitHub Pages. Após a conclusão do primeiro fluxo, o app ficará disponível em `https://mandic82.github.io/edfapp/`.

## Conectar a planilha

1. Crie um projeto Apps Script independente em script.google.com.
2. Use o arquivo `apps-script/Code.gs` do pacote local no projeto do Apps Script. Ele é mantido fora do repositório público porque aponta para a planilha privada.
3. Execute `setup()` uma vez e autorize o script. A função cria e formata a aba `Resultados`.
4. Em **Implantar > Nova implantação**, selecione **App da Web**, execute como sua conta e permita acesso a qualquer pessoa com o link. Copie o URL terminado em `/exec`.
5. O aplicativo já vem configurado com o endpoint publicado e envia os resultados ao concluir uma jornada. Para consultar a planilha no app, use **Acesso do professor** e digite a senha definida no aplicativo. A senha é uma barreira simples da interface e não altera o compartilhamento do Google. Se a planilha estiver configurada como “qualquer pessoa com o link”, qualquer pessoa que tenha o link poderá abri-la diretamente.

O endpoint de Apps Script precisa aceitar chamadas públicas para que estudantes enviem os resultados. Restrinja o compartilhamento da planilha somente à equipe docente. A resposta do `fetch` é opaca no navegador; o app não afirma que a linha chegou à planilha sem uma confirmação verificável.

## Observações pedagógicas

- As seis missões têm janelas mínimas de 15 minutos cada, somando 90 minutos.
- O cronômetro pausa quando a aba do navegador está oculta ou quando a pausa consciente é aberta.
- A revisão de reforço só é oferecida após 60 minutos de atividade.
- A pontuação é formativa e deve ser interpretada junto com a observação docente e outras evidências de aprendizagem.
