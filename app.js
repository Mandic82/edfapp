/* Trilha pedagógica: desafios originais baseados no material de Educação Financeira enviado. */
const missions = [
  {title:'De onde vem o dinheiro?',area:'RENDA & TRABALHO',description:'Toda história financeira começa com entradas. Investigue como o trabalho, a renda e as oportunidades mudam a vida das pessoas.',learn:'Renda é todo dinheiro que entra. Ela pode vir de salário, trabalho autônomo, vendas, prestação de serviços ou outras fontes. Trabalho formal costuma ter registro e direitos previstos; no informal, renda e proteção podem variar. Cada realidade tem condições próprias: evite julgar escolhas sem conhecer o contexto.',challenges:[
    {kind:'DECISÃO',title:'Duas formas de trabalhar',scenario:'Rafa tem carteira assinada, salário mensal e direitos trabalhistas. Joana vende doces por conta própria e tem renda que varia de semana para semana.',prompt:'Qual comparação descreve melhor as duas situações?',options:['A renda de Joana é sempre maior porque ela trabalha por conta própria.','O trabalho formal tende a oferecer mais previsibilidade e direitos; o informal pode ter renda variável e flexibilidade.','O trabalho informal não é trabalho de verdade.','Os dois recebem exatamente a mesma renda.'],answer:1,explain:'Boa leitura! A modalidade de trabalho informa sobre registro, direitos e previsibilidade, mas não determina sozinha quem ganha mais.'},
    {kind:'INVESTIGAÇÃO',title:'Uma renda em transformação',scenario:'Miguel recebia R$ 900 por mês em um estágio. Depois, começou a vender camisetas e ganhou R$ 260 em uma semana, mas na semana seguinte ganhou R$ 80.',prompt:'O que seria mais prudente ao planejar os gastos mensais de Miguel?',options:['Contar com R$ 1.040 todos os meses.','Usar a semana de maior venda como renda garantida.','Acompanhar várias semanas de vendas e planejar com cautela, separando uma reserva para meses fracos.','Ignorar todas as entradas até conseguir um emprego formal.'],answer:2,explain:'Isso! Quando a renda oscila, observar o histórico e criar uma margem de segurança ajuda a evitar compromissos difíceis de cumprir.'},
    {kind:'REFLEXÃO',title:'Mapa de entradas',scenario:'Pense em uma família fictícia: uma pessoa recebe salário, outra faz pequenos consertos e uma terceira recebe uma bolsa de estudos.',prompt:'Qual atitude ajuda a conhecer melhor a renda total sem confundir renda com lucro ou gasto?',options:['Registrar cada entrada, sua origem e quando costuma acontecer.','Somar apenas o maior valor recebido.','Anotar as compras no lugar das entradas.','Considerar que toda entrada acontece todos os meses.'],answer:0,explain:'Registrar origem, valor e frequência dá uma visão mais confiável do que entra e permite planejar com mais consciência.'},
    {kind:'CÁLCULO',title:'Somando fontes diferentes',scenario:'Em um mês fictício, uma família recebeu R$ 1.600,00 em salários e R$ 240,00 por um serviço feito no fim de semana.',prompt:'Qual foi a renda total recebida nesse mês?',options:['R$ 1.840,00','R$ 1.600,00','R$ 1.760,00','R$ 2.040,00'],answer:0,explain:'1.600 + 240 = R$ 1.840,00. Registrar todas as fontes dá uma visão mais completa da renda do período.'},
    {kind:'PLANEJAMENTO',title:'Renda que muda a cada semana',scenario:'Uma pessoa autônoma recebeu R$ 280,00, R$ 190,00 e R$ 330,00 em três semanas. Ela precisa planejar uma despesa que se repete todo mês.',prompt:'Qual atitude oferece mais segurança?',options:['Analisar vários meses de renda e evitar assumir um gasto fixo contando só com a semana de R$ 330.','Considerar R$ 330 garantidos em todas as semanas.','Ignorar as semanas de menor renda.','Planejar como se não houvesse nenhuma entrada.'],answer:0,explain:'Renda variável pede planejamento prudente, observação do histórico e uma margem para semanas mais fracas.'},
    {kind:'DECISÃO',title:'Necessidade, desejo e contexto',scenario:'Uma estudante precisa de um caderno para as aulas e também gostaria de trocar um fone que ainda funciona.',prompt:'Qual decisão considera melhor as prioridades sem tratar toda vontade como errada?',options:['Planejar primeiro o material necessário e avaliar se o fone cabe no orçamento depois.','Comprar o fone porque todo desejo deve vir primeiro.','Nunca comprar algo de que goste.','Usar o limite do cartão sem conversar com a família.'],answer:0,explain:'Planejar ajuda a priorizar o que é necessário e verificar se outras escolhas cabem no orçamento.'}
  ]},
  {title:'Rastreadores do extrato',area:'CONTROLE & MOVIMENTAÇÕES',description:'Siga as pistas de um extrato fictício. Descubra entradas, saídas, gastos fixos e eventuais sem perder o saldo no caminho.',learn:'Um extrato registra movimentações de uma conta. Entradas aumentam o saldo; saídas diminuem. Acompanhar a sequência de operações permite conferir cobranças, identificar hábitos e entender quanto ainda está disponível.',challenges:[
    {kind:'CÁLCULO',title:'Saldo em missão',scenario:'Saldo inicial: R$ 320,00. Entrou um Pix de R$ 45,00. Depois foram pagos R$ 28,00 de transporte e R$ 19,00 de lanche.',prompt:'Qual é o saldo depois dessas movimentações?',options:['R$ 318,00','R$ 337,00','R$ 364,00','R$ 292,00'],answer:0,explain:'320 + 45 − 28 − 19 = 318. Seguir as operações na ordem ajuda a não confundir entrada com saída.'},
    {kind:'LEITURA',title:'Fixo ou eventual?',scenario:'No extrato deste mês aparecem: internet, mensalidade do curso, ingresso de cinema e um Pix recebido pela venda de um livro usado.',prompt:'Qual par apresenta, respectivamente, uma despesa recorrente e uma entrada eventual?',options:['Internet e Pix da venda do livro.','Ingresso e mensalidade do curso.','Pix da venda e internet.','Mensalidade e internet.'],answer:0,explain:'Internet costuma ser recorrente; o Pix da venda é uma entrada pontual neste exemplo. A classificação depende do contexto e da frequência.'},
    {kind:'DETECTIVE',title:'Uma cobrança desconhecida',scenario:'Você percebe uma tarifa que não reconhece no extrato. Não há detalhes sobre a origem no resumo.',prompt:'Qual é o próximo passo mais responsável?',options:['Compartilhar os dados da conta em um grupo para pedir ajuda.','Conferir os detalhes no canal oficial do banco e conversar com um adulto responsável, se necessário.','Apagar o extrato para evitar preocupação.','Concluir que toda tarifa está correta sem verificar.'],answer:1,explain:'Certo. Confira pelo canal oficial e proteja seus dados. Um extrato é informação privada.'},
    {kind:'CÁLCULO EM ETAPAS',title:'Saldo depois de quatro movimentos',scenario:'Saldo inicial: R$ 450,00. Foi debitada uma compra de R$ 48,75, entrou um Pix de R$ 70,00 e depois saiu uma conta de R$ 126,25.',prompt:'Qual é o saldo final?',options:['R$ 345,00','R$ 321,25','R$ 471,25','R$ 392,50'],answer:0,explain:'450 − 48,75 + 70 − 126,25 = R$ 345,00. Organizar entradas e saídas ajuda a acompanhar o saldo.'},
    {kind:'INVESTIGAÇÃO',title:'O lançamento que não reconheci',scenario:'No extrato aparece uma compra de R$ 32,90 que ninguém da família reconhece. O cartão ainda está com a pessoa.',prompt:'Qual sequência é mais cuidadosa?',options:['Conferir data e detalhes no canal oficial, avisar o responsável pela conta e contestar se necessário.','Publicar uma foto do cartão para perguntar nas redes.','Apagar o lançamento do extrato.','Esperar vários meses sem verificar.'],answer:0,explain:'Verifique os detalhes com a instituição por um canal oficial e proteja os dados da conta.'},
    {kind:'ANÁLISE',title:'Recorrente ou pontual?',scenario:'O extrato mostra uma conta de energia em todos os meses e uma compra única de um livro usado.',prompt:'Como classificar esses dois lançamentos?',options:['A conta de energia é recorrente; o livro foi uma compra pontual.','Os dois são sempre gastos fixos.','O livro é recorrente e a energia é eventual.','Nenhum deles pode aparecer em um extrato.'],answer:0,explain:'A frequência observada ajuda a distinguir um gasto recorrente de uma compra pontual.'}
  ]},
  {title:'O enigma da fatura',area:'CRÉDITO & ESCOLHAS',description:'Uma fatura chegou. Você vai localizar o que foi comprado, entender tarifas e decidir como agir antes do vencimento.',learn:'A fatura do cartão reúne compras e cobranças de um período. O valor total, a data de vencimento e eventuais tarifas importam. O cartão é uma forma de pagamento: o limite não é renda extra, e pagar o mínimo pode gerar encargos. Confirme sempre as condições apresentadas pela instituição.',challenges:[
    {kind:'LEITURA',title:'A data que importa',scenario:'Fatura fictícia: total de R$ 186,40; vencimento em 18 de outubro; compras de R$ 92,00, R$ 54,90 e R$ 39,50.',prompt:'O que a pessoa deve observar primeiro para organizar o pagamento?',options:['O limite disponível, como se fosse dinheiro recebido.','O valor total e a data de vencimento, comparando-os ao orçamento disponível.','Apenas a compra mais cara.','A cor do cartão.'],answer:1,explain:'Isso. O total e o vencimento ajudam a planejar. Limite de crédito não equivale a renda.'},
    {kind:'CÁLCULO',title:'Conferência das compras',scenario:'Na fatura: R$ 92,00 + R$ 54,90 + R$ 39,50. O total indicado é R$ 186,40.',prompt:'As compras somam o total indicado?',options:['Sim.','Não: somam R$ 176,40.','Não: somam R$ 196,40.','Não é possível somar os valores.'],answer:0,explain:'92 + 54,90 + 39,50 = 186,40. Conferir os itens com o total é um hábito importante.'},
    {kind:'ESCOLHA CONSCIENTE',title:'O limite não é salário',scenario:'Uma estudante viu que ainda há bastante limite no cartão e quer comprar um fone caro, embora não tenha planejado essa compra.',prompt:'Qual pergunta pode ajudá-la a decidir com mais consciência?',options:['“Quanto limite ainda resta?”','“Vou conseguir pagar essa compra no orçamento e ela é prioridade para mim agora?”','“Qual é a compra mais cara que consigo fazer?”','“Posso deixar para pensar depois da compra.”'],answer:1,explain:'Boa escolha. Planejamento considera orçamento, prioridades e consequências antes de comprar.'},
    {kind:'ESCOLHA CONSCIENTE',title:'Total da fatura ou pagamento mínimo?',scenario:'A fatura vence em cinco dias. O orçamento permite pagar o valor total sem comprometer despesas essenciais.',prompt:'Qual escolha tende a evitar encargos de financiamento?',options:['Pagar o valor total até o vencimento.','Pagar só o mínimo porque o restante desaparece.','Ignorar o vencimento.','Usar outro cartão para pagar sem conferir as condições.'],answer:0,explain:'Quando o orçamento permite, pagar o total até o vencimento evita financiar a parte restante. Confira as condições do cartão.'},
    {kind:'COMPARAÇÃO',title:'Parcelado também tem total',scenario:'Uma mochila custa R$ 220,00 à vista ou 3 parcelas de R$ 80,00. Não há outras cobranças informadas.',prompt:'Qual conclusão está correta?',options:['Parcelado soma R$ 240,00, R$ 20,00 a mais que o preço à vista.','Parcelado custa R$ 200,00.','As duas opções custam o mesmo.','O valor das parcelas não precisa ser somado.'],answer:0,explain:'3 × 80 = R$ 240,00. Comparar o total parcelado ao preço à vista ajuda a decidir.'},
    {kind:'SEGURANÇA DIGITAL',title:'Um link suspeito na cobrança',scenario:'Chega uma mensagem inesperada com uma fatura e um link para atualizar os dados do cartão.',prompt:'Qual atitude protege melhor os dados?',options:['Não abrir o link; conferir a cobrança diretamente no aplicativo ou site oficial da instituição.','Digitar os dados do cartão para descobrir se a mensagem é verdadeira.','Encaminhar a mensagem para todos os contatos.','Responder com senha e código recebido por SMS.'],answer:0,explain:'Acesse a instituição por um canal oficial conhecido. Nunca informe senhas ou códigos em links inesperados.'}
  ]},
  {title:'Detetives do cupom',area:'CONSUMO & CIDADANIA',description:'Examine comprovantes fictícios para conferir itens, valores, taxas e informações úteis para o consumidor.',learn:'Cupons e notas fiscais registram uma compra e ajudam a conferir produtos, valores, data e estabelecimento. Podem apoiar trocas e garantias conforme as regras aplicáveis. Impostos são diferentes de taxas de serviço. Os detalhes variam conforme o produto, o serviço e a legislação.',challenges:[
    {kind:'LEITURA',title:'O que o comprovante revela?',scenario:'Cupom fictício: 2 sucos (R$ 6,00 cada), 1 sanduíche (R$ 14,00), taxa de serviço (R$ 2,00). Total: R$ 28,00.',prompt:'Qual informação é mais útil para conferir se o total está correto?',options:['A quantidade e o preço de cada item, além da taxa indicada.','O nome da pessoa que comprou, apenas.','A cor do papel.','O saldo da conta bancária.'],answer:0,explain:'Isso. 2 × 6 + 14 + 2 = 28. Conferir os itens e cobranças dá transparência ao total.'},
    {kind:'CÁLCULO',title:'Somando a compra',scenario:'3 cadernos de R$ 12,00 cada e 2 canetas de R$ 4,50 cada. Sem outras cobranças.',prompt:'Qual deveria ser o total?',options:['R$ 36,00','R$ 45,00','R$ 48,00','R$ 42,00'],answer:1,explain:'3 × 12 = 36; 2 × 4,50 = 9; total = R$ 45,00.'},
    {kind:'CIDADANIA',title:'Guardar ou descartar?',scenario:'Um produto apresentou defeito poucos dias depois da compra. A família quer saber onde comprou e quando.',prompt:'Qual hábito pode facilitar a busca por informações da compra?',options:['Guardar ou localizar o comprovante e verificar as orientações de troca/garantia.','Apagar todas as mensagens da loja.','Publicar o número completo do cartão nas redes.','Confiar apenas na memória.'],answer:0,explain:'Correto. O comprovante ajuda a localizar os dados da compra; proteja informações pessoais ao pedir orientação.'},
    {kind:'CÁLCULO',title:'Conferindo quantidade e preço',scenario:'No cupom aparecem 3 cadernos de R$ 8,00 cada e 2 canetas de R$ 4,00 cada, sem outras cobranças.',prompt:'Qual deve ser o total?',options:['R$ 32,00','R$ 28,00','R$ 36,00','R$ 24,00'],answer:0,explain:'3 × 8 = 24; 2 × 4 = 8; total = R$ 32,00.'},
    {kind:'LEITURA',title:'A taxa aparece no total',scenario:'Uma conta de restaurante mostra dois pratos de R$ 9,00, um sanduíche de R$ 17,00 e uma taxa de serviço de R$ 3,00.',prompt:'Qual valor corresponde à soma indicada?',options:['R$ 38,00','R$ 35,00','R$ 29,00','R$ 41,00'],answer:0,explain:'2 × 9 + 17 + 3 = R$ 38,00. A taxa informada faz parte da conferência do total.'},
    {kind:'CIDADANIA DIGITAL',title:'Comprovante também contém dados',scenario:'Uma pessoa quer pedir ajuda sobre uma compra e pensa em publicar uma foto inteira do comprovante na internet.',prompt:'Como compartilhar a dúvida com mais cuidado?',options:['Cobrir dados pessoais e números sensíveis, ou procurar diretamente o estabelecimento por um canal oficial.','Publicar CPF, endereço e dados do cartão junto com o comprovante.','Enviar uma senha bancária para provar que a compra é sua.','Compartilhar a foto em todos os grupos.'],answer:0,explain:'Comprovantes ajudam a conferir compras, mas podem conter dados pessoais. Proteja essas informações ao pedir orientação.'}
  ]},
  {title:'Porcentagem em ação',area:'PORCENTAGEM & PREÇOS',description:'Descontos, aumentos e contas do dia a dia: use diferentes estratégias para descobrir o que os percentuais realmente significam.',learn:'Porcentagem é uma razão por 100. Para calcular 10%, divida o valor por 10; 5% é metade de 10%. Um desconto reduz o preço e um acréscimo aumenta. Compare sempre o percentual com o valor inicial e confira se a oferta informa as condições.',challenges:[
    {kind:'CÁLCULO',title:'Promoção relâmpago',scenario:'Uma mochila custa R$ 120,00 e está com 25% de desconto.',prompt:'Qual é o preço com desconto?',options:['R$ 90,00','R$ 95,00','R$ 30,00','R$ 100,00'],answer:0,explain:'25% é um quarto. Um quarto de R$ 120,00 é R$ 30,00; 120 − 30 = R$ 90,00.'},
    {kind:'CÁLCULO',title:'A conta atrasou',scenario:'Uma conta de R$ 150,00 recebeu multa de 5%. Para esta atividade, desconsidere outros encargos.',prompt:'Qual é o valor após acrescentar a multa?',options:['R$ 157,50','R$ 155,00','R$ 150,50','R$ 165,00'],answer:0,explain:'5% de 150 é metade de 10% (R$ 15), ou R$ 7,50. Total: R$ 157,50.'},
    {kind:'ANÁLISE',title:'O mesmo número, bases diferentes',scenario:'Produto A custa R$ 50 e subiu 10%. Produto B custa R$ 200 e subiu 10%.',prompt:'Qual afirmação está correta?',options:['Os dois aumentos são de R$ 10.','O produto B aumenta R$ 20 e o A aumenta R$ 5, porque 10% depende do valor inicial.','O produto A aumenta mais porque é mais barato.','O preço final dos dois é igual.'],answer:1,explain:'Exatamente. 10% de 50 = 5; 10% de 200 = 20. Percentuais iguais podem representar valores diferentes.'},
    {kind:'CÁLCULO',title:'Desconto de 15%',scenario:'Um tênis custa R$ 200,00 e recebeu desconto de 15%.',prompt:'Qual é o preço final?',options:['R$ 170,00','R$ 185,00','R$ 30,00','R$ 175,00'],answer:0,explain:'15% de 200 é 30. Então 200 − 30 = R$ 170,00.'},
    {kind:'ANÁLISE',title:'Dois descontos sucessivos',scenario:'Um produto custa R$ 100,00. Primeiro recebe 10% de desconto e depois mais 10% sobre o novo preço.',prompt:'Qual será o preço final?',options:['R$ 81,00','R$ 80,00','R$ 90,00','R$ 79,00'],answer:0,explain:'Após 10%, custa R$ 90. Mais 10% de 90 é R$ 9; o final é R$ 81. O segundo desconto usa a nova base.'},
    {kind:'COMPARAÇÃO',title:'Metade do preço no segundo item',scenario:'Dois cadernos custam R$ 60,00 cada. A promoção dá 50% de desconto no segundo caderno.',prompt:'Quanto se paga pelos dois e qual é o desconto sobre o total original?',options:['R$ 90,00; desconto total de 25%.','R$ 60,00; desconto total de 50%.','R$ 120,00; sem desconto.','R$ 80,00; desconto total de 40%.'],answer:0,explain:'O segundo custa R$ 30, então o total é R$ 90. A economia de R$ 30 sobre R$ 120 equivale a 25%.'}
  ]},
  {title:'Orçamento com propósito',area:'PLANEJAMENTO & METAS',description:'Chegou a hora de distribuir uma renda fictícia, equilibrar necessidades e vontades e transformar uma meta em plano.',learn:'Planejar é organizar renda, despesas, prioridades e objetivos. Gastos essenciais atendem necessidades importantes; outros gastos podem variar. Uma meta fica mais clara quando define valor, prazo e um passo possível. O orçamento é uma ferramenta para decidir, não uma regra única para todas as famílias.',challenges:[
    {kind:'PLANEJAMENTO',title:'Distribuindo R$ 500',scenario:'Uma renda mensal fictícia de R$ 500 será organizada assim: alimentação R$ 180; transporte R$ 90; lazer R$ 70; poupança R$ 60; outras despesas R$ 100.',prompt:'A distribuição fecha o orçamento?',options:['Sim, soma R$ 500.','Não, faltam R$ 50.','Não, passa R$ 100.','Não, soma R$ 450.'],answer:0,explain:'180 + 90 + 70 + 60 + 100 = R$ 500. Quando as partes fecham com o total, temos 100% da renda distribuída.'},
    {kind:'CÁLCULO',title:'Quanto vai para a reserva?',scenario:'Em uma renda fictícia de R$ 500, uma pessoa separou R$ 50 para poupança.',prompt:'Que porcentagem da renda esse valor representa?',options:['5%','10%','15%','20%'],answer:1,explain:'50 ÷ 500 = 0,10, ou 10%. A porcentagem relaciona a parte ao total.'},
    {kind:'META',title:'Meta que cabe no plano',scenario:'Uma estudante quer comprar um livro de R$ 90 em três meses e pode guardar R$ 30 por mês.',prompt:'Qual plano corresponde à meta?',options:['Guardar R$ 30 por mês durante 3 meses, totalizando R$ 90.','Esperar que o livro fique gratuito.','Guardar R$ 90 por mês.','Comprar agora sem verificar o orçamento.'],answer:0,explain:'R$ 30 × 3 = R$ 90. A meta tem valor, prazo e contribuição mensal definidos.'},
    {kind:'GRÁFICO DE SETORES',title:'Leia o orçamento em setores',scenario:'Um gráfico representa uma renda de R$ 500: alimentação 40%, transporte 25%, lazer 20% e poupança 15%.',prompt:'Qual setor deve ocupar a maior parte do gráfico?',options:['Alimentação, com 40% da renda.','Transporte, com 25% da renda.','Lazer, com 20% da renda.','Poupança, com 15% da renda.'],answer:0,explain:'Isso. O setor de 40% é o maior. Os percentuais somam 100% e representam o todo.'},
    {kind:'PLANEJAMENTO',title:'Um orçamento que fecha',scenario:'Uma renda fictícia de R$ 800 será distribuída: alimentação R$ 430; transporte R$ 120; contas da casa R$ 80; meta de economia R$ 100; lazer R$ 70.',prompt:'Quanto sobra sem destinação depois dessa distribuição?',options:['R$ 0,00: o orçamento fecha em R$ 800,00.','R$ 70,00.','Faltam R$ 100,00.','Sobram R$ 150,00.'],answer:0,explain:'430 + 120 + 80 + 100 + 70 = R$ 800. O plano distribui toda a renda.'},
    {kind:'GRÁFICO & CÁLCULO',title:'Transformando porcentagem em reais',scenario:'Uma renda fictícia de R$ 600 foi representada no gráfico: transporte ocupa 25%.',prompt:'Qual valor corresponde ao setor de transporte?',options:['R$ 150,00','R$ 125,00','R$ 250,00','R$ 100,00'],answer:0,explain:'25% é um quarto. 600 ÷ 4 = R$ 150,00.'}
  ]}
];
const reinforcementActivities = [
  {type:'memory',title:'Memória da renda',pairs:[
    {term:'RENDA',match:'Dinheiro que entra em um período.'},
    {term:'SALÁRIO',match:'Pagamento recebido pelo trabalho.'},
    {term:'AUTÔNOMO',match:'Profissional que organiza seu próprio trabalho.'},
    {term:'FORMAL',match:'Trabalho com registro e direitos previstos.'},
    {term:'INFORMAL',match:'Trabalho sem registro formal; a renda pode variar.'},
    {term:'RESERVA',match:'Parte guardada para lidar com imprevistos.'}
  ]},
  {type:'crossword',title:'Cruzadinha do extrato',key:'EXTRATO',entries:[
    {answer:'ENTRADA',cross:0,clue:'Movimentação que aumenta o saldo.'},
    {answer:'PIX',cross:2,clue:'Meio de pagamento e transferência instantânea.'},
    {answer:'CONTA',cross:3,clue:'Documento que apresenta cobranças de um serviço.'},
    {answer:'CREDITO',cross:1,clue:'Valor lançado como entrada na conta.'},
    {answer:'TARIFA',cross:1,clue:'Cobrança por um serviço financeiro.'},
    {answer:'DEBITO',cross:4,clue:'Movimentação que retira valor do saldo.'},
    {answer:'ESTORNO',cross:6,clue:'Devolução de um valor lançado anteriormente.'}
  ]},
  {type:'memory',title:'Memória do crédito',pairs:[
    {term:'FATURA',match:'Resumo das compras e cobranças do período.'},
    {term:'LIMITE',match:'Valor máximo disponível no crédito; não é renda.'},
    {term:'VENCIMENTO',match:'Data limite indicada para pagar a fatura.'},
    {term:'PARCELA',match:'Uma parte de um pagamento dividido.'},
    {term:'JUROS',match:'Valor cobrado pelo uso de crédito ou atraso.'},
    {term:'TOTAL',match:'Soma de todos os valores cobrados na fatura.'}
  ]},
  {type:'crossword',title:'Cruzadinha do comprovante',key:'CUPOM',entries:[
    {answer:'COMPROVANTE',cross:0,clue:'Registro que ajuda a conferir os dados de uma compra.'},
    {answer:'PRODUTO',cross:4,clue:'Item vendido em uma loja.'},
    {answer:'PRECO',cross:0,clue:'Valor cobrado por um item.'},
    {answer:'COMPRA',cross:1,clue:'Aquisição de um produto ou serviço.'},
    {answer:'MERCADORIA',cross:0,clue:'Nome geral para produto colocado à venda.'}
  ]},
  {type:'memory',title:'Memória das porcentagens',pairs:[
    {term:'PORCENTAGEM',match:'Razão ou parte calculada em cada cem.'},
    {term:'DESCONTO',match:'Redução aplicada ao preço inicial.'},
    {term:'AUMENTO',match:'Acréscimo calculado sobre um valor inicial.'},
    {term:'BASE',match:'Valor inicial usado no cálculo percentual.'},
    {term:'TAXA',match:'Percentual aplicado em uma situação.'},
    {term:'PREÇO FINAL',match:'Valor depois de aplicar desconto ou acréscimo.'}
  ]},
  {type:'crossword',title:'Cruzadinha do orçamento',key:'ORCAMENTO',entries:[
    {answer:'OBJETIVO',cross:0,clue:'Meta que orienta uma decisão de planejamento.'},
    {answer:'RENDA',cross:0,clue:'Dinheiro que entra em determinado período.'},
    {answer:'CONTA',cross:0,clue:'Despesa ou cobrança que precisa ser planejada.'},
    {answer:'META',cross:3,clue:'Resultado que uma pessoa pretende alcançar.'},
    {answer:'PLANEJAMENTO',cross:7,clue:'Organização antecipada de renda, gastos e objetivos.'},
    {answer:'RESERVA',cross:1,clue:'Valor separado para um objetivo ou imprevisto.'},
    {answer:'NECESSIDADE',cross:0,clue:'Algo importante para o bem-estar ou a rotina.'},
    {answer:'TOTAL',cross:0,clue:'Resultado da soma de todas as partes.'},
    {answer:'ECONOMIA',cross:2,clue:'Ato de usar recursos com cuidado e planejamento.'}
  ]}
];

const participants = [
  'AISLA YASMIM DA SILVA ANDRADE','ANA CAROLINA DOS SANTOS SANT ANA','ANA JULIA DA SILVA','ANA LIVIA CHOAN BERTACHI',
  'AYRTON GUERRERO BATISTA SCHMIDT','BEATRIZ BARBOSA DA SILVA','BRUCE AMORIM FERREIRA DE JESUS','CARLOS EDUARDO LATORRE CORREIA RODRIGUES',
  'CLARA VALENTINA TAVARES JUSTINO','DAVI FIGUEIREDO DE OLIVEIRA NERY','FERNANDA DE OLIVEIRA FREITAS','GABRIEL BUENO SPERANZONI BALBIN',
  'GABRIELLY VICTÓRIA DOS ANJOS DE AGUIAR','ISABEL DE LOS ANGELES LOPEZ MARIN','ISIS JANINE DA SILVA','JOAO VICTOR GABRIEL VIANA FLORENTINO',
  'JULIA CORDEIRO TAVARES','KAROLYNE ALVES RODRIGUES DOS SANTOS','KEMELLY SANTOS QUERINO','LAURA MIRANDA MEDEIROS',
  'LORENA PEREIRA DE CASTRO ALBANEZI','LUAN KAYMON DE CUNHA ANDRADE','MARIA CLARA TURRA DE ALMEIDA','MARINA VIEIRA CADILHE COSTA',
  'MATHEUS BARBOSA DA SILVA','MELL MARQUES SILVA','MIGUEL ANDRADE DE OLIVEIRA','NADINE ALVES MOURA INTEQUE',
  'SAMIRA BASTOS SOUZA','SERENA HIKARI TANAKA','VALENTINA RAMALHO DINIZ','VICTOR LEANDRO DANTAS DOS ANJOS',
  'VICTOR SHENG ZHE ZHU','WILLYAN SOUZA NASCIMENTO'
];
const CLASS_NAME='7º C';
const TOTAL_CHALLENGES=missions.reduce((sum,mission)=>sum+mission.challenges.length,0), TOTAL_SECONDS=90*60, MISSION_SECONDS=15*60, STORAGE_PREFIX='labDinheiro.session.v1.', SCRIPT_KEY='labDinheiro.scriptUrl', REPORT_QUEUE_KEY='labDinheiro.reportQueue.v1', SCRIPT_DEFAULT_URL='https://script.google.com/macros/s/AKfycby2Pjr_ooXxP7AXBTjMeggkWdwLjsPn6se_cXPJBiE9NtOAV4qfAOaqcfbT9CKOu3p14A/exec';
let state=null, tickHandle=null, toastHandle=null, soundOn=false, soundContext=null, inFlightReports=new Set();
const app=document.getElementById('app');
function blockPastedReflectionText(event){
  if(event.target&&event.target.id==='reflection'){
    event.preventDefault();
    showToast('Digite sua resposta pelo teclado. Colar texto não está disponível neste campo.');
  }
}
app.addEventListener('paste',blockPastedReflectionText);
app.addEventListener('drop',blockPastedReflectionText);
app.addEventListener('beforeinput',event=>{if(event.target&&event.target.id==='reflection'&&/^insertFrom(Paste|Drop)$/i.test(event.inputType||''))blockPastedReflectionText(event)});
app.addEventListener('keydown',event=>{
  if(event.target&&event.target.id==='reflection'&&((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='v'||event.shiftKey&&event.key==='Insert')){
    event.preventDefault();
    showToast('Digite sua resposta pelo teclado. Colar texto não está disponível neste campo.');
  }
});

function freshState(name){return {name,startedAt:Date.now(),elapsed:0,activeMission:0,answers:[],missionStartedAt:Date.now(),missionElapsed:0,reviewDone:false,activitiesDone:[],miniGames:{},reportedMissions:[],reflections:{},completed:false,lastSaved:Date.now()}}
function sessionKey(name){return STORAGE_PREFIX+encodeURIComponent(name||'')}
function save(){if(state){state.lastSaved=Date.now();localStorage.setItem(sessionKey(state.name),JSON.stringify(state));}}
function load(name){try{return JSON.parse(localStorage.getItem(sessionKey(name||''))||'null')}catch{return null}}
function fmt(seconds){const n=Math.max(0,Math.floor(seconds));return `${String(Math.floor(n/3600)).padStart(2,'0')}:${String(Math.floor(n%3600/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`}
function totalAnswered(){return state?.answers.length||0}function correctCount(){return state?.answers.filter(a=>a.correct).length||0}
function started(){clearInterval(tickHandle);tickHandle=setInterval(()=>{if(!state||state.completed||state.onBreak)return;if(document.hidden)return;state.elapsed++;state.missionElapsed++;save();updateLiveBits();if(state.elapsed===3600)showReviewNudge();if(state.elapsed===TOTAL_SECONDS)showToast('90 minutos de jornada concluídos. Feche sua missão no seu ritmo!');},1000)}
function updateLiveBits(){const t=document.querySelector('[data-timer]');if(t)t.textContent=fmt(state.elapsed);const all=document.querySelector('[data-progress]');if(all)all.style.width=`${Math.min(100,state.elapsed/TOTAL_SECONDS*100)}%`;const ms=document.querySelector('[data-mission-timer]');if(ms)ms.textContent=fmt(Math.max(0,MISSION_SECONDS-state.missionElapsed));const gate=document.querySelector('[data-gate]');if(gate)gate.textContent=state.missionElapsed>=MISSION_SECONDS?'Missão pronta para avançar!':`Próxima missão libera em ${fmt(MISSION_SECONDS-state.missionElapsed)}`;const badge=document.querySelector('[data-answered]');if(badge)badge.textContent=String(totalAnswered());updateMissionGateUI();}
function start(){const input=document.querySelector('#student-name');const name=input.value.trim();if(name.length<2){input.focus();showToast('Selecione seu nome para começar.');return}const existing=load(name);if(existing&&!existing.completed){showToast('Sua jornada já está salva. Escolha “Retomar sessão” para continuar.');return}state=freshState(name);save();renderJourney();started();}
function renderHome(){app.innerHTML=`<section class="hero-grid"><div class="hero-copy"><span class="eyebrow">UMA JORNADA EM 6 MISSÕES · ${CLASS_NAME}</span><h1>Seu dinheiro.<br>Sua <span class="accent">história.</span></h1><p class="lead">Desvende desafios, tome decisões e descubra como pequenos passos podem transformar a relação com o dinheiro.</p><div class="student-form"><label for="student-name">Selecione seu nome</label><select id="student-name" required><option value="">Escolha seu nome na lista</option>${participants.map(n=>`<option value="${escapeHtml(n)}">${escapeHtml(n)}</option>`).join('')}</select><div class="form-hint">Esta lista é da turma ${CLASS_NAME}. Selecione seu nome antes de começar.</div></div><div class="start-row"><button class="primary-button" id="start-btn">Começar minha jornada <span aria-hidden="true">↗</span></button><button class="secondary-button" id="resume-btn" disabled>Retomar sessão</button></div><div class="feature-row"><span>Desafios com feedback</span><span>Progresso salvo automaticamente</span><span>Relatório final</span></div></div><div class="hero-visual" aria-label="Ilustração de uma moeda verde com cartões de orçamento"><div class="orbit"></div><div class="coin">$</div><div class="float-card fc-one"><strong>+10%</strong>nova meta</div><div class="float-card fc-two"><strong>R$ 500</strong>seu plano</div><div class="float-card fc-three">✦</div></div></section>`;
const select=document.querySelector('#student-name'),resumeButton=document.querySelector('#resume-btn');select.onchange=()=>{resumeButton.disabled=!(load(select.value)&&!load(select.value).completed)};document.querySelector('#start-btn').onclick=start;resumeButton.onclick=()=>resume(select.value);select.addEventListener('keydown',e=>{if(e.key==='Enter')start()});}
function resume(name){state=load(name||document.querySelector('#student-name')?.value);if(!state)return renderHome();if(state.completed)state=freshState(state.name);state.onBreak=false;state.missionStartedAt=Date.now();save();renderJourney();started();}

function activityState(idx){
  if(!state.miniGames[idx]){
    const activity=reinforcementActivities[idx];
    if(activity.type==='memory'){
      const deck=activity.pairs.flatMap((pair,pairId)=>[
        {pairId,side:'term',text:pair.term},{pairId,side:'match',text:pair.match}
      ]);
      for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]]}
      state.miniGames[idx]={deck:deck,matched:[],selected:[],attempts:0};
    }else{
      state.miniGames[idx]={guesses:activity.entries.map(()=>''),solved:activity.entries.map(()=>false)};
    }
    save();
  }
  return state.miniGames[idx];
}
function miniGameMarkup(idx){
  const activity=reinforcementActivities[idx],game=activityState(idx);
  if(activity.type==='memory'){
    const visible=game.selected||[],matched=game.matched||[];
    const tiles=game.deck.map((card,i)=>{
      const show=visible.includes(i)||matched.includes(card.pairId);
      return '<button type="button" class="memory-tile '+(show?'revealed':'')+' '+(matched.includes(card.pairId)?'matched':'')+'" data-memory-card="'+i+'" aria-label="'+(show?escapeHtml(card.text):'Carta virada')+'"><span>'+(show?escapeHtml(card.text):'✦')+'</span></button>';
    }).join('');
    const done=matched.length===activity.pairs.length;
    return '<section class="mini-game-card"><div class="challenge-count">ATIVIDADE DE FIXAÇÃO · JOGO DA MEMÓRIA</div><h3>'+escapeHtml(activity.title)+'</h3><p>Encontre os pares: um conceito e sua explicação. Vire duas cartas por vez.</p><div class="memory-stats"><span>Pares encontrados: <b>'+matched.length+' / '+activity.pairs.length+'</b></span><span>Tentativas: <b>'+(game.attempts||0)+'</b></span></div><div class="memory-grid">'+tiles+'</div>'+(done?'<div class="activity-success"><p>Todos os pares encontrados! Você fixou os principais conceitos.</p><button type="button" class="primary-button" id="finish-mini-game">Concluir atividade →</button></div>':'')+'</section>';
  }
  const center=10,width=22,solved=game.solved||[],guesses=game.guesses||[];
  const rows=activity.entries.map((entry,i)=>{
    const start=center-entry.cross;
    const cells=Array.from({length:width},(_,col)=>{
      const charIndex=col-start;
      if(charIndex<0||charIndex>=entry.answer.length)return '<span class="crossword-gap"></span>';
      const isCenter=col===center;
      return '<span class="crossword-cell '+(isCenter?'crossword-center ':'')+(solved[i]?'filled':'')+'">'+(solved[i]?entry.answer[charIndex]:'')+'</span>';
    }).join('');
    return '<div class="crossword-entry"><div class="crossword-clue"><span>'+(i+1)+'. '+escapeHtml(entry.clue)+'</span><div><input type="text" autocomplete="off" autocapitalize="characters" maxlength="20" placeholder="Sua resposta" value="'+escapeHtml(guesses[i]||'')+'" data-cross-answer="'+i+'" '+(solved[i]?'disabled':'')+'><button type="button" class="secondary-button" data-cross-check="'+i+'" '+(solved[i]?'disabled':'')+'>Conferir</button></div><small class="crossword-error" data-cross-error="'+i+'">'+(solved[i]?'Correto!': '')+'</small></div><div class="crossword-row" aria-label="Palavra cruzada '+(i+1)+'">'+cells+'</div></div>';
  }).join('');
  const done=solved.length===activity.entries.length&&solved.every(Boolean);
  return '<section class="mini-game-card"><div class="challenge-count">ATIVIDADE DE FIXAÇÃO · CRUZADINHA</div><h3>'+escapeHtml(activity.title)+'</h3><p>Complete as palavras pelas pistas. A coluna destacada forma o conceito central da missão.</p><div class="crossword-board">'+rows+'</div>'+(done?'<div class="activity-success"><p>Palavras completas! A coluna revelou <b>'+escapeHtml(activity.key)+'</b>.</p><button type="button" class="primary-button" id="finish-mini-game">Concluir atividade →</button></div>':'')+'</section>';
}
function normalizeGameAnswer(value){
  return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z]/g,'').toUpperCase();
}
function bindMiniGame(idx){
  const activity=reinforcementActivities[idx],game=activityState(idx);
  const finish=document.querySelector('#finish-mini-game');
  if(finish)finish.onclick=()=>{if(!state.activitiesDone.includes(idx))state.activitiesDone.push(idx);save();renderJourney()};
  if(activity.type==='memory'){
    document.querySelectorAll('[data-memory-card]').forEach(button=>button.onclick=()=>{
      const g=state.miniGames[idx],cardIndex=Number(button.dataset.memoryCard);
      if(g.matched.includes(g.deck[cardIndex].pairId)||g.selected.includes(cardIndex)||g.selected.length>=2)return;
      g.selected.push(cardIndex);playSound('flip');
      if(g.selected.length===2){
        g.attempts++;
        const [a,b]=g.selected;
        if(g.deck[a].pairId===g.deck[b].pairId&&g.deck[a].side!==g.deck[b].side){g.matched.push(g.deck[a].pairId);playSound('correct')}else playSound('incorrect');
        save();renderJourney();
        if(g.matched.length<reinforcementActivities[idx].pairs.length&&g.selected.length===2&&g.deck[a].pairId!==g.deck[b].pairId){
          setTimeout(()=>{if(!state||state.activeMission!==idx)return;const current=state.miniGames[idx];current.selected=[];save();renderJourney()},850);
        }else{g.selected=[];save();renderJourney()}
      }else{save();renderJourney()}
    });
    return;
  }
  document.querySelectorAll('[data-cross-answer]').forEach(input=>input.oninput=()=>{game.guesses[Number(input.dataset.crossAnswer)]=input.value;save()});
  document.querySelectorAll('[data-cross-check]').forEach(button=>button.onclick=()=>{
    const i=Number(button.dataset.crossCheck),input=document.querySelector('[data-cross-answer="'+i+'"]'),error=document.querySelector('[data-cross-error="'+i+'"]');
    game.guesses[i]=input.value;
    if(normalizeGameAnswer(input.value)===activity.entries[i].answer){
      game.solved[i]=true;playSound('correct');error.textContent='Correto!';error.classList.add('correct');save();renderJourney();
    }else{playSound('incorrect');error.textContent='Ainda não. Releia a pista e tente outra vez.';error.classList.remove('correct');input.focus();save()}
  });
}

function normalizeRubricText(value){
  return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');
}
function hasAmount(value,expected,spoken=[]){
  const target=Number(expected),raw=String(value||'');
  const tokens=raw.match(/\d+(?:\.\d{3})*(?:,\d{1,2})?/g)||[];
  if(tokens.some(token=>{
    const parsed=Number(token.replace(/\./g,'').replace(',','.'));
    return Number.isFinite(parsed)&&Math.abs(parsed-target)<0.005;
  }))return true;
  const normalized=normalizeRubricText(raw);
  return spoken.some(word=>normalized.includes(normalizeRubricText(word)));
}
function isNarrativeResponse(value){
  const text=String(value||'').trim(),sentences=(text.match(/[.!?](?:\s|$)/g)||[]).length;
  const words=text.split(/\s+/).filter(Boolean).length;
  const startsAsList=/^\s*(?:[-•*]|\d+[.)])\s/m.test(text);
  return (sentences>=2||words>=40)&&!startsAsList;
}
const MISSION_ONE_RUBRIC=[
  {label:'Identificou uma pessoa, família ou seus membros.',test:t=>/(pessoa|familia|membro|responsavel|nome|morador)/i.test(normalizeRubricText(t))},
  {label:'Indicou como a pessoa trabalha ou sua ocupação.',test:t=>/(trabalh|profiss|empreg|carteira|clt|autonom|empresari|freelancer|aposentad|informal|formal|diarista|microempreendedor|ocupacao)/i.test(normalizeRubricText(t))},
  {label:'Comentou vantagens, benefícios, riscos ou desvantagens dessa forma de trabalho/renda.',test:t=>/(benefici|vantag|desvantag|malefici|direit|estabilidade|flexibilidade|risco|protecao|seguranca|horario|garantia)/i.test(normalizeRubricText(t))},
  {label:'Informou a renda, o salário ou os ganhos mensais.',test:t=>/(renda|salario|ganhos?|rendimentos?|receb|entrada)/i.test(normalizeRubricText(t))},
  {label:'Explicou uma despesa recorrente, como gasto fixo ou mensal.',test:t=>/(gasto|despesa|custo|aluguel|internet|conta)/i.test(normalizeRubricText(t))&&/(fix|mensal|todo mes|se repet|recorrent|regular|mesmo valor|parecido)/i.test(normalizeRubricText(t))},
  {label:'Explicou uma despesa que pode mudar, como gasto variável ou eventual.',test:t=>/(gasto|despesa|custo|mercado|energia|lazer|roupa|transporte)/i.test(normalizeRubricText(t))&&/(vari|eventual|muda|mudam|consumo|necessidade|aument|diminu|depende)/i.test(normalizeRubricText(t))},
  {label:'Indicou se o resultado/saldo mensal foi positivo ou negativo.',test:t=>/(saldo|resultado|sobrou|faltou|ficou)/i.test(normalizeRubricText(t))&&/(positivo|negativo|vermelho|superavit|deficit|sobra|restou|faltou|devendo)/i.test(normalizeRubricText(t))},
  {label:'Propôs uma ação adequada para o mês seguinte ou para a sobra.',test:t=>/(econom|cort|reduz|planej|reserv|invest|poup|guard|organiz|ajust|diminu|destin|aplic|rever|prioriz|renegoc|separ|quitar)/i.test(normalizeRubricText(t))},
  {label:'Escreveu uma explicação em texto corrido.',test:t=>isNarrativeResponse(t)}
];
function validateMissionOneReflection(value){
  const text=String(value||'').trim(),checks=MISSION_ONE_RUBRIC.map(item=>item.test(text));
  return {length:text.length,checks,complete:text.length>=500&&checks.every(Boolean)};
}
function missionGateState(idx,reflection){
  const validators=[validateMissionOneReflection,validateMissionTwoReflection,validateMissionThreeReflection,validateMissionFourReflection,validateMissionFiveReflection,validateMissionSixReflection];
  const validation=validators[idx]?validators[idx](reflection):{complete:false,length:0,checks:[]};
  const timed=state.missionElapsed>=MISSION_SECONDS;
  const totalReady=idx!==missions.length-1||state.elapsed>=TOTAL_SECONDS;
  const canAdvance=timed&&validation.complete&&totalReady;
  let message;
  if(idx===missions.length-1&&!totalReady){
    message=validation.complete?'Atividade validada. Falta '+fmt(TOTAL_SECONDS-state.elapsed)+' para completar os 90 minutos da jornada.':'Complete os critérios da atividade e aguarde '+fmt(TOTAL_SECONDS-state.elapsed)+' para completar os 90 minutos da jornada.';
  }else if(!timed){
    message=validation.complete?'Resposta validada. A missão poderá ser encerrada em '+fmt(MISSION_SECONDS-state.missionElapsed)+'.':'Atividade obrigatória: complete os critérios e aguarde '+fmt(MISSION_SECONDS-state.missionElapsed)+' para encerrar a missão.';
  }else if(!validation.complete){
    message='Tempo mínimo cumprido. Complete os critérios da atividade para encerrar esta missão.';
  }else{
    message='Atividade validada. Missão pronta para encerrar!';
  }
  return {canAdvance,message,validation};
}
function missionOnePromptMarkup(){
  return '<div class="mission-one-task"><p>Use um exemplo fictício de uma pessoa ou família. Identifique seus membros e como trabalham; explique benefícios e/ou malefícios dessa forma de trabalho e da renda ou salário; informe o valor mensal; detalhe os gastos fixos e variáveis e explique por que recebem esses nomes. Para concluir, se o saldo ficar negativo, proponha uma ação para evitar outro mês no vermelho. Se ficar positivo, indique um destino para essa sobra.</p><ol class="reflection-rubric">'+MISSION_ONE_RUBRIC.map((item,i)=>'<li data-rubric="'+i+'"><span class="rubric-mark">○</span>'+escapeHtml(item.label)+'</li>').join('')+'</ol><div class="reflection-length"><span data-char-count>0</span> caracteres · mínimo de 500 caracteres para concluir a missão. De 500 a 800 já é suficiente; 800 a 1.500 permite detalhar mais. Colagem desativada: digite sua resposta.</div></div>';
}
const MISSION_TWO_RUBRIC=[
  {label:'Identificou pelo menos duas entradas de dinheiro.',test:t=>{const n=normalizeRubricText(t);return [/(salario|renda fixa|trabalho)/.test(n),/(pix|venda|objeto vendido)/.test(n),/reembolso/.test(n)].filter(Boolean).length>=2}},
  {label:'Identificou pelo menos duas saídas de dinheiro.',test:t=>{const n=normalizeRubricText(t);return [/aluguel/.test(n),/(energia|conta de luz)/.test(n),/(supermercado|mercado|compras)/.test(n),/lazer/.test(n)].filter(Boolean).length>=2}},
  {label:'Explicou que o aluguel é recorrente ou se repete mensalmente.',test:t=>{const n=normalizeRubricText(t);return /aluguel/.test(n)&&/(fix|mensal|todo mes|se repet|recorrent|valor acordado|valor parecido)/.test(n)}},
  {label:'Explicou por que energia, mercado ou lazer podem variar.',test:t=>{const n=normalizeRubricText(t);return /(energia|conta de luz|supermercado|mercado|lazer)/.test(n)&&/(vari|eventual|consumo|quantidade|necessidade|muda|depende|pode aumentar|pode diminuir)/.test(n)}},
  {label:'Mencionou o saldo final de R$ 870,00 e avaliou como Carlos administrou o dinheiro.',test:t=>{const n=normalizeRubricText(t);return hasAmount(t,870,['oitocentos e setenta'])&&/(saldo|sobrou|sobra|positivo|restou|resultado)/.test(n)&&/(administr|bem|responsavel|planej|cuidad|poderia|melhor|organiz|corret|adequad)/.test(n)}},
  {label:'Escreveu uma explicação em texto corrido, sem apenas listar os valores.',test:t=>isNarrativeResponse(t)}
];
function validateMissionTwoReflection(value){return validateMissionRubric(value,MISSION_TWO_RUBRIC)}
const MISSION_THREE_RUBRIC=[
  {label:'Explicou que a dívida cresce ou se acumula com o atraso, os encargos e novos gastos.',test:t=>{const n=normalizeRubricText(t);return /(bola de neve|divida|debito|fatura|saldo|valor devido|montante)/.test(n)&&/(cres|aument|acumul|fica maior|mais dificil|encargo|juros|atras)/.test(n)}},
  {label:'Calculou o total da fatura: R$ 1.075,00.',test:t=>hasAmount(t,1075,['mil e setenta e cinco','mil setenta e cinco'])},
  {label:'Reconheceu os R$ 91,88 anteriores e os R$ 55,12 de juros/multa.',test:t=>hasAmount(t,91.88,['noventa e um reais e oitenta e oito centavos'])&&hasAmount(t,55.12,['cinquenta e cinco reais e doze centavos'])},
  {label:'Explicou que pagar a fatura completa no prazo evita juros e multa.',test:t=>{const n=normalizeRubricText(t);return /(juros|multa|encargos)/.test(n)&&/(pag\w*.{0,100}(integral|total|toda a fatura|vencimento|prazo|em dia)|(?:integral|total|toda a fatura|vencimento|prazo|em dia).{0,100}pag\w*)/.test(n)}},
  {label:'Sugeriu uma forma de controlar ou reduzir a dívida nos próximos meses.',test:t=>/(control|planej|orcamento|evit|reduz|cort|negoci|renegoci|acompanhar|organizar)/i.test(normalizeRubricText(t))},
  {label:'Escreveu uma explicação em texto corrido.',test:t=>isNarrativeResponse(t)}
];
const MISSION_FOUR_RUBRIC=[
  {label:'Calculou os valores dos grupos de itens: R$ 36,00, R$ 9,00 e R$ 8,00.',test:t=>hasAmount(t,36,['trinta e seis'])&&hasAmount(t,9,['nove'])&&hasAmount(t,8,['oito'])&&/(cader|canet|lanche|item)/i.test(normalizeRubricText(t))},
  {label:'Calculou o total final de R$ 48,00 depois do desconto de R$ 5,00.',test:t=>hasAmount(t,48,['quarenta e oito'])&&hasAmount(t,5,['cinco'])&&/(descont|total|compra)/i.test(normalizeRubricText(t))},
  {label:'Explicou que o cupom/comprovante permite conferir itens, quantidades e preços.',test:t=>/(comprovante|cupom|nota fiscal)/i.test(normalizeRubricText(t))&&/(confer|verific|compar|quantidade|preco|valor|itens|produto)/i.test(normalizeRubricText(t))},
  {label:'Indicou uma atitude para resolver uma diferença no valor cobrado.',test:t=>/(diferenc|erro|diverg|incorret|nao bater|nao corresponder)/i.test(normalizeRubricText(t))&&/(avis|inform|mostr|convers|pedir|responsavel|estabelecimento|caixa)/i.test(normalizeRubricText(t))},
  {label:'Escreveu uma explicação em texto corrido.',test:t=>isNarrativeResponse(t)}
];
function validatesMissionFiveComparison(value){
  const n=normalizeRubricText(value);
  if(!hasAmount(value,204,['duzentos e quatro'])||!hasAmount(value,215,['duzentos e quinze'])||!hasAmount(value,11,['onze']))return false;
  const aGroup='(?:loja a|opcao a|produto a|a mochila)';
  const bGroup='(?:loja b|opcao b|produto b|a outra loja)';
  const cheaper='(?:mais barata|mais em conta|custa menos|menor|mais economica|mais vantajosa)';
  const moreExpensive='(?:mais cara|mais caro|custa mais|maior|mais elevada)';
  const aCheaper=new RegExp(aGroup+'.{0,35}'+cheaper+'|'+cheaper+'.{0,35}'+aGroup).test(n);
  const bMore=new RegExp(bGroup+'.{0,35}'+moreExpensive+'|'+moreExpensive+'.{0,35}'+bGroup).test(n);
  const bCheaper=new RegExp(bGroup+'.{0,35}'+cheaper+'|'+cheaper+'.{0,35}'+bGroup).test(n);
  const aMore=new RegExp(aGroup+'.{0,35}'+moreExpensive+'|'+moreExpensive+'.{0,35}'+aGroup).test(n);
  return (aCheaper||bMore)&&!bCheaper&&!aMore;
}
const MISSION_FIVE_RUBRIC=[
  {label:'Calculou 15% de R$ 240,00 como R$ 36,00.',test:t=>/(15\s*%|quinze por cento)/i.test(normalizeRubricText(t))&&hasAmount(t,240,['duzentos e quarenta'])&&hasAmount(t,36,['trinta e seis'])},
  {label:'Encontrou o preço com desconto da Loja A: R$ 204,00.',test:t=>hasAmount(t,204,['duzentos e quatro'])},
  {label:'Comparou as lojas e identificou que a Loja A é R$ 11,00 mais barata.',test:t=>validatesMissionFiveComparison(t)},
  {label:'Explicou que o desconto percentual usa o preço/valor inicial como base.',test:t=>/(porcent|percentual|15\s*%|quinze por cento)/i.test(normalizeRubricText(t))&&/(preco inicial|valor inicial|240|base|valor original|preco original|sobre o preco)/i.test(normalizeRubricText(t))},
  {label:'Justificou a escolha considerando o preço final em texto corrido.',test:t=>/(escolh|decid|compensa|vantaj|menor|barat|custo|econom)/i.test(normalizeRubricText(t))&&isNarrativeResponse(t)}
];
const MISSION_SIX_RUBRIC=[
  {label:'Identificou a renda mensal de R$ 2.400,00.',test:t=>hasAmount(t,2400,['dois mil e quatrocentos','dois mil quatrocentos'])&&/(renda|receb|salario|entrada)/i.test(normalizeRubricText(t))},
  {label:'Somou os gastos fixos em R$ 1.170,00 e explicou que se repetem.',test:t=>hasAmount(t,1170,['mil cento e setenta'])&&/(fix|aluguel|internet|transporte)/i.test(normalizeRubricText(t))&&/(mensal|todo mes|repet|recorrent|fix)/i.test(normalizeRubricText(t))},
  {label:'Somou os gastos variáveis em R$ 1.390,00 e explicou por que podem mudar.',test:t=>hasAmount(t,1390,['mil trezentos e noventa'])&&/(vari|mercado|energia|lazer|roupa)/i.test(normalizeRubricText(t))&&/(mud|consumo|necessidade|depende|vari|pode aumentar|pode diminuir)/i.test(normalizeRubricText(t))},
  {label:'Concluiu que as despesas são R$ 2.560,00 e o saldo fica negativo em R$ 160,00.',test:t=>hasAmount(t,2560,['dois mil quinhentos e sessenta','dois mil e quinhentos e sessenta'])&&hasAmount(t,160,['cento e sessenta'])&&/(negativ|deficit|falt|vermelho|devendo|preju|saldo menor|despesas supera|gastou mais|acima da renda|passou da renda|superou a renda|nao fecha)/i.test(normalizeRubricText(t))},
  {label:'Propôs uma redução concreta para equilibrar as contas no próximo mês.',test:t=>/(reduz|cort|diminu|econom|ajust|rever|limitar)/i.test(normalizeRubricText(t))&&/(lazer|roupa|vestuario|mercado|gasto|despesa)/i.test(normalizeRubricText(t))&&(hasAmount(t,160,['cento e sessenta'])||(hasAmount(t,100,['cem'])&&hasAmount(t,60,['sessenta']))||/(equilibr|fechar|zerar|cobrir).{0,60}(orcamento|contas|deficit|saldo)/i.test(normalizeRubricText(t)))},
  {label:'Escreveu uma explicação em texto corrido.',test:t=>isNarrativeResponse(t)}
];
function validateMissionThreeReflection(value){return validateMissionRubric(value,MISSION_THREE_RUBRIC)}
function validateMissionFourReflection(value){return validateMissionRubric(value,MISSION_FOUR_RUBRIC)}
function validateMissionFiveReflection(value){return validateMissionRubric(value,MISSION_FIVE_RUBRIC)}
function validateMissionSixReflection(value){return validateMissionRubric(value,MISSION_SIX_RUBRIC)}
const MISSION_RUBRICS=[MISSION_ONE_RUBRIC,MISSION_TWO_RUBRIC,MISSION_THREE_RUBRIC,MISSION_FOUR_RUBRIC,MISSION_FIVE_RUBRIC,MISSION_SIX_RUBRIC];
function validateMissionRubric(value,rubric){
  const text=String(value||'').trim(),checks=rubric.map(item=>item.test(text));
  return {length:text.length,checks,complete:checks.every(Boolean)};
}
function validateMissionThreeReflection(value){return validateMissionRubric(value,MISSION_THREE_RUBRIC)}
function validateMissionFourReflection(value){return validateMissionRubric(value,MISSION_FOUR_RUBRIC)}
function validateMissionFiveReflection(value){return validateMissionRubric(value,MISSION_FIVE_RUBRIC)}
function validateMissionSixReflection(value){return validateMissionRubric(value,MISSION_SIX_RUBRIC)}
const MISSION_WRITTEN_ACTIVITIES={
  2:{intro:'<b>Atividade obrigatória para concluir a missão:</b> leia a situação e explique em texto corrido como o saldo da dívida mudou e o que Marina pode fazer.',scenario:'Marina usou o cartão de crédito e recebeu uma fatura com <b>R$ 928,00</b> em compras do mês, <b>R$ 91,88</b> de saldo da fatura anterior que não foi pago e <b>R$ 55,12</b> de juros e multa pelo atraso. Ela percebeu que a dívida estava aumentando e quer evitar que isso continue.',tasks:['Explique o que é o efeito bola de neve no cartão.','Calcule o valor total da fatura e identifique os valores que vieram do atraso anterior.','Explique como os juros e a multa poderiam ter sido evitados.','Proponha uma ação para que a dívida não aumente nos próximos meses.'],rubric:MISSION_THREE_RUBRIC,placeholder:'Explique o caso de Marina em texto corrido, usando os valores e propondo uma ação.'},
  3:{intro:'<b>Atividade obrigatória para concluir a missão:</b> analise o comprovante fictício e explique como conferir a compra.',scenario:'No comprovante de uma compra aparecem <b>3 cadernos a R$ 12,00 cada</b>, <b>2 canetas a R$ 4,50 cada</b> e <b>1 lanche de R$ 8,00</b>. A loja aplicou um <b>desconto de R$ 5,00</b>.',tasks:['Calcule o valor de cada grupo de itens e o total final.','Explique como o cupom ou comprovante ajuda a conferir a compra.','Diga o que você faria se o valor cobrado fosse diferente do comprovante.'],rubric:MISSION_FOUR_RUBRIC,placeholder:'Explique os cálculos e como conferiria o comprovante.'},
  4:{intro:'<b>Atividade obrigatória para concluir a missão:</b> compare os preços finais e justifique sua decisão.',scenario:'Uma mochila custa <b>R$ 240,00 na Loja A</b>, que oferece <b>15% de desconto</b>. A mesma mochila custa <b>R$ 215,00 na Loja B</b>, sem desconto. Considere que não há outras taxas nem diferença entre os produtos.',tasks:['Calcule o valor do desconto e o preço final na Loja A.','Compare os dois preços finais e indique qual loja tem o menor preço e por quanto.','Explique por que o percentual é calculado sobre o preço inicial.'],rubric:MISSION_FIVE_RUBRIC,placeholder:'Mostre os cálculos, compare as lojas e justifique sua escolha.'},
  5:{intro:'<b>Atividade obrigatória para concluir a missão:</b> analise o orçamento da família e proponha um ajuste para o próximo mês.',scenario:'Uma família tem renda mensal de <b>R$ 2.400,00</b>. Gastos fixos: aluguel R$ 850,00, internet R$ 100,00 e passe de transporte R$ 220,00. Gastos variáveis: mercado R$ 700,00, energia R$ 220,00, lazer R$ 300,00 e roupas R$ 170,00.',tasks:['Some os gastos fixos e os variáveis. Explique por que são classificados assim.','Calcule as despesas totais e descubra se o saldo fica positivo ou negativo.','Proponha reduções concretas que equilibrem o próximo mês.'],rubric:MISSION_SIX_RUBRIC,placeholder:'Explique o orçamento, o resultado do mês e um plano para equilibrar as contas.'}
};
function missionWrittenPromptMarkup(idx){
  const activity=MISSION_WRITTEN_ACTIVITIES[idx];
  if(!activity)return '<p>Registre uma ideia que você leva desta etapa. Você pode escrever uma frase ou um exemplo.</p>';
  return '<div class="mission-one-task"><p>'+activity.intro+'</p><div class="scenario">'+activity.scenario+'</div><p>Escreva um texto que responda:</p><ul>'+activity.tasks.map(task=>'<li>'+task+'</li>').join('')+'</ul><p><b>Critérios para validação da resposta:</b></p><ol class="reflection-rubric">'+activity.rubric.map((item,i)=>'<li data-rubric="'+i+'"><span class="rubric-mark">○</span>'+escapeHtml(item.label)+'</li>').join('')+'</ol><div class="reflection-length"><span data-char-count>0</span> caracteres · texto corrido, com pelo menos duas frases. Colagem desativada: digite sua resposta.</div></div>';
}
function missionTwoPromptMarkup(){
  return '<div class="mission-one-task"><p><b>Atividade obrigatória para concluir a missão:</b> leia o caso e responda em texto corrido, sem apenas listar os valores. A resposta precisa ser digitada. Explique o que aconteceu com o saldo da conta ao longo do período.</p><div class="scenario">Carlos recebeu seu salário de <b>R$ 2.000,00</b> no dia 5. No mesmo dia, pagou o aluguel no valor de <b>R$ 900,00</b>. Dois dias depois, recebeu um Pix de <b>R$ 150,00</b> referente à venda de um objeto usado. Na semana seguinte, pagou a conta de energia de <b>R$ 120,00</b> e realizou uma compra no supermercado de <b>R$ 280,00</b>. Alguns dias depois, recebeu um reembolso de <b>R$ 80,00</b> e gastou <b>R$ 60,00</b> com lazer. Ao final do período, seu saldo era de <b>R$ 870,00</b>.</div><p>Com base nas informações, escreva um texto explicando:</p><ul><li>Quais foram as entradas e saídas de dinheiro.</li><li>Quais despesas podem ser consideradas gastos fixos e por quê.</li><li>Quais despesas são eventuais ou variáveis e por quê.</li><li>Como as movimentações influenciaram o saldo final.</li><li>Se Carlos administrou bem o dinheiro e por quê.</li></ul><p><b>Critérios para validação da resposta:</b></p><ol class="reflection-rubric">'+MISSION_TWO_RUBRIC.map((item,i)=>'<li data-rubric="'+i+'"><span class="rubric-mark">○</span>'+escapeHtml(item.label)+'</li>').join('')+'</ol><div class="reflection-length"><span data-char-count>0</span> caracteres · texto corrido em pelo menos duas frases.</div></div>';
}

function updateMissionGateUI(){
  if(!state)return;
  const idx=state.activeMission,reflection=document.querySelector('#reflection')?.value||state.reflections[idx]||'';
  const gateState=missionGateState(idx,reflection),gate=document.querySelector('[data-gate]'),button=document.querySelector('#next-mission');
  if(gateState.canAdvance&&state.answers.filter(a=>a.mission===idx).length===missions[idx].challenges.length&&state.activitiesDone.includes(idx))reportMissionCompletion(idx);
  if(idx<missions.length){
    const validation=gateState.validation,rubric=MISSION_RUBRICS[idx],count=document.querySelector('[data-char-count]');
    if(count)count.textContent=String(validation.length);
    document.querySelectorAll('[data-rubric]').forEach((item,i)=>{
      const pass=Boolean(validation.checks[i]);
      item.classList.toggle('complete',pass);
      const mark=item.querySelector('.rubric-mark');if(mark)mark.textContent=pass?'✓':'○';
    });
  }
  if(gate)gate.textContent=gateState.message;
  if(button){
    button.disabled=!gateState.canAdvance;
    button.textContent=idx===missions.length-1?'Ver meu resultado →':'Avançar missão →';
    
  }
}
function renderJourney(){if(!state)return;state.activitiesDone=state.activitiesDone||[];state.miniGames=state.miniGames||{};const idx=state.activeMission,mission=missions[idx];if(!mission)return renderResults();const used=state.answers.filter(a=>a.mission===idx).map(a=>a.challenge);let ci=mission.challenges.findIndex((_,i)=>!used.includes(i));if(ci<0)ci=mission.challenges.length-1;const ch=mission.challenges[ci];const answered=state.answers.find(a=>a.mission===idx&&a.challenge===ci);const pct=Math.min(100,state.elapsed/TOTAL_SECONDS*100);const isLast=ci===mission.challenges.length-1;const allCorrect=mission.challenges.every((_,i)=>state.answers.some(a=>a.mission===idx&&a.challenge===i));const gateState=missionGateState(idx,state.reflections[idx]||''),gateReady=gateState.canAdvance;
app.innerHTML=`<section><div class="journey-header"><div><span class="eyebrow">MISSÃO ${String(idx+1).padStart(2,'0')} / 06</span><h1 class="journey-title">${mission.title}</h1></div><div class="journey-stats"><div class="stat"><div class="stat-label">Tempo de jornada</div><div class="stat-value timer" data-timer>${fmt(state.elapsed)}</div></div><div class="stat"><div class="stat-label">Desafios feitos</div><div class="stat-value"><span data-answered>${totalAnswered()}</span> / ${TOTAL_CHALLENGES}</div></div><div class="stat"><div class="stat-label">Pontos</div><div class="stat-value">${correctCount()} ✦</div></div></div></div><div class="progress-track" aria-label="Progresso da jornada"><div class="progress-fill" data-progress style="width:${pct}%"></div></div>${state.elapsed>=3600&&!state.reviewDone?'<div class="resume-banner"><span>Percebi que algumas coisas ainda podem ficar mais claras. Vamos revisar e reforçar com mais algumas atividades?</span><button class="secondary-button" id="review-btn">Fazer revisão</button></div>':''}<div class="journey-layout"><nav class="mission-nav" aria-label="Missões"><h3>Seu mapa</h3>${missions.map((m,i)=>`<div class="mission-item ${i===idx?'active':''} ${i<idx?'done':''}" ${i===idx?'aria-current="step"':''}><span class="mission-number">${i<idx?'✓':String(i+1).padStart(2,'0')}</span><span><span class="mission-name">${m.title}</span><span class="mission-time">${i<idx?'Concluída':i===idx?'Em andamento':'15 min de trilha'}</span></span></div>`).join('')}</nav><section class="mission-main"><div class="mission-topline"><span>${mission.area}</span><span class="tag">${mission.challenges.length} desafios</span></div><h2>${mission.title}</h2><p class="mission-description">${mission.description}</p><div class="scenario">${mission.learn}</div><article class="challenge-card"><div class="challenge-count">${ch.kind} · DESAFIO ${ci+1} DE ${mission.challenges.length}</div><h3>${ch.title}</h3>${ch.scenario?`<div class="scenario">${ch.scenario}</div>`:''}<p class="challenge-prompt">${ch.prompt}</p><div class="answer-options">${ch.options.map((o,i)=>`<button class="answer-option ${answered?(i===ch.answer?'correct':i===answered.choice&&!answered.correct?'incorrect':''):''}" ${answered?'disabled':''} data-choice="${i}"><span class="answer-letter">${String.fromCharCode(65+i)}</span><span>${o}</span></button>`).join('')}</div><div class="feedback ${answered?'show '+(answered.correct?'good':'try'):''}">${answered?(answered.correct?'✨ '+ch.explain:'💡 '+ch.explain):''}</div><div class="check-row"><span class="hint">${answered?'Sua resposta foi registrada.':'Escolha uma opção para avançar.'}</span>${answered&&!isLast?'<button class="primary-button" id="continue-btn">Próximo desafio →</button>':''}</div></article>${used.length===mission.challenges.length&&!state.activitiesDone.includes(idx)?miniGameMarkup(idx):allCorrect||isLast&&used.length===mission.challenges.length?`<div class="mission-completion show"><h3>Atividade obrigatória para concluir esta missão</h3>${idx<2?(idx===0?missionOnePromptMarkup():missionTwoPromptMarkup()):missionWrittenPromptMarkup(idx)}<textarea class="reflection" id="reflection" maxlength="1500" placeholder="${idx===0?'Escreva seu exemplo fictício com as informações e a proposta completa...':idx===1?'Explique as entradas, saídas e o saldo de Carlos em um texto corrido...':MISSION_WRITTEN_ACTIVITIES[idx]?.placeholder||'Escreva sua reflexão em texto corrido...'}">${escapeHtml(state.reflections[idx]||'')}</textarea><div class="next-gate" data-gate>${gateState.message}</div><button class="primary-button" id="next-mission" ${gateReady?'':'disabled'}>${idx===missions.length-1?'Ver meu resultado':'Avançar missão'} →</button><button class="secondary-button" id="take-break">Fazer uma pausa consciente</button></div>`:''}</section></div></section>`;
document.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>answer(Number(btn.dataset.choice),idx,ci));if(used.length===mission.challenges.length&&!state.activitiesDone.includes(idx))bindMiniGame(idx);const cont=document.querySelector('#continue-btn');if(cont)cont.onclick=()=>renderJourney();const next=document.querySelector('#next-mission');if(next)next.onclick=()=>{state.reflections[idx]=document.querySelector('#reflection')?.value||'';const latestGate=missionGateState(idx,state.reflections[idx]);if(!latestGate.canAdvance){showToast(latestGate.message);return}reportMissionCompletion(idx);if(idx===missions.length-1){state.completed=true;save();renderResults()}else{state.activeMission++;state.missionElapsed=0;save();renderJourney()}showEncouragement()};const ref=document.querySelector('#reflection');if(ref)ref.oninput=()=>{state.reflections[idx]=ref.value;save();updateMissionGateUI()};const pause=document.querySelector('#take-break');if(pause)pause.onclick=renderBreak;const review=document.querySelector('#review-btn');if(review)review.onclick=()=>{state.reviewDone=true;state.reviewPrompt=true;save();renderReview()};updateLiveBits();}
function answer(choice,mi,ci){if(state.answers.some(a=>a.mission===mi&&a.challenge===ci))return;const ch=missions[mi].challenges[ci];const correct=choice===ch.answer;state.answers.push({mission:mi,challenge:ci,choice,correct,at:Date.now()});save();renderJourney();if(correct){showEncouragement();playSound('correct')}else{playSound('incorrect');showToast('Cada tentativa ensina. Leia a explicação e siga em frente!')}}
function playTone(frequency,offset,duration,volume){
  try{
    const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
    if(!soundContext)soundContext=new C();
    const c=soundContext;if(c.state==='suspended')c.resume();
    const start=c.currentTime+(offset||0),osc=c.createOscillator(),gain=c.createGain();
    osc.type='sine';osc.frequency.setValueAtTime(frequency,start);
    gain.gain.setValueAtTime(.001,start);gain.gain.linearRampToValueAtTime(volume||.11,start+.012);
    gain.gain.exponentialRampToValueAtTime(.001,start+(duration||.14));
    osc.connect(gain);gain.connect(c.destination);osc.start(start);osc.stop(start+(duration||.14)+.02);
  }catch{}
}
function playSound(kind){
  if(!soundOn&&kind!=='on')return;
  const patterns={
    on:[[523,0,.12,.10],[784,.13,.20,.12]],
    correct:[[659,0,.12,.10],[880,.13,.20,.12]],
    incorrect:[[330,0,.12,.09],[262,.13,.20,.09]],
    flip:[[560,0,.07,.07]],
    mission:[[523,0,.12,.10],[659,.13,.12,.10],[784,.26,.22,.12]]
  };
  (patterns[kind]||[]).forEach(note=>playTone(note[0],note[1],note[2],note[3]));
}
function showEncouragement(){const messages=['Você está indo muito bem! Avance.','Boa! Cada desafio amplia seu repertório.','Seu progresso está aparecendo. Continue!','Mandou bem! Pense no que essa escolha ensina.','Um passo de cada vez — você consegue!'];const el=document.querySelector('.motivation')||makeMotivation();el.textContent=messages[Math.floor(Math.random()*messages.length)];el.classList.add('show');setTimeout(()=>el.classList.remove('show'),3000)}function makeMotivation(){const d=document.createElement('div');d.className='motivation';d.setAttribute('role','status');document.body.append(d);return d}
function showReviewNudge(){if(state.reviewDone)return;showToast('Uma hora de jornada! Que tal fazer uma pausa curta antes de revisar?');renderJourney()}
function renderReview(){const weak=[...missions.keys()].map(i=>({i,n:state.answers.filter(a=>a.mission===i).length,c:state.answers.filter(a=>a.mission===i&&a.correct).length})).filter(x=>x.n&&x.c/x.n<.67).sort((a,b)=>a.c/a.n-b.c/b.n);const target=weak[0]?.i??state.activeMission;const ch=missions[target].challenges[0];app.innerHTML=`<section class="break-card"><span class="eyebrow">REVISÃO DE PERCURSO · 01 HORA</span><div class="break-orbit">↻</div><h2>Revisar também é avançar.</h2><p>Você já dedicou uma hora à sua jornada. Algumas ideias merecem uma segunda olhada. Aqui vai uma atividade extra sobre <b>${missions[target].title}</b>:</p><div class="scenario">${ch.scenario||ch.learn||missions[target].learn}</div><h3>${ch.prompt}</h3><div class="answer-options">${ch.options.map((o,i)=>`<button class="answer-option" data-review-choice="${i}"><span class="answer-letter">${String.fromCharCode(65+i)}</span><span>${o}</span></button>`).join('')}</div><div class="feedback" id="review-feedback"></div><div class="report-actions"><button class="secondary-button" id="return-journey">Voltar à jornada</button></div></section>`;document.querySelectorAll('[data-review-choice]').forEach(b=>b.onclick=()=>{const good=Number(b.dataset.reviewChoice)===ch.answer;document.querySelectorAll('[data-review-choice]').forEach(x=>x.disabled=true);const f=document.querySelector('#review-feedback');f.className=`feedback show ${good?'good':'try'}`;f.textContent=good?'✨ '+ch.explain:'💡 '+ch.explain;state.reviewScore=good;save()});document.querySelector('#return-journey').onclick=()=>renderJourney();}
function renderBreak(){state.onBreak=true;save();app.innerHTML=`<section class="break-card"><span class="eyebrow">PAUSA CONSCIENTE</span><div class="break-orbit">☼</div><h2>Respira. Você está construindo algo.</h2><p>Uma pausa curta ajuda a descansar a atenção. Levante, tome água e volte quando estiver pronto. O relógio da trilha pausa enquanto esta tela estiver aberta.</p><div class="break-time">Seu progresso está salvo.</div><button class="primary-button" id="back-break">Continuar minha jornada →</button></section>`;document.querySelector('#back-break').onclick=()=>{state.onBreak=false;state.missionStartedAt=Date.now();save();renderJourney()}}
function renderResults(){clearInterval(tickHandle);const percent=totalAnswered()?Math.round(correctCount()/totalAnswered()*100):0;const skills=missions.map((m,i)=>{const aa=state.answers.filter(a=>a.mission===i);return {name:m.title,score:aa.length?Math.round(aa.filter(a=>a.correct).length/aa.length*100):0,answered:aa.length}});const badges=percent>=85?['Estrategista do orçamento','Detetive financeiro','Mestre das porcentagens']:percent>=55?['Explorador financeiro','Leitor atento']:['Coragem para aprender','Primeira missão concluída'];app.innerHTML=`<section class="results-wrap"><div class="results-top"><div class="results-icon">✦</div><span class="eyebrow">JORNADA CONCLUÍDA</span><h1>Você fez seu caminho, ${escapeHtml(state.name)}.</h1><p>Aprender sobre dinheiro é uma habilidade que cresce com prática, curiosidade e boas perguntas.</p><div class="badge-row" style="justify-content:center">${badges.map(b=>`<span class="badge">✦ ${b}</span>`).join('')}</div></div><div class="result-grid"><div class="result-card"><strong>${fmt(state.elapsed)}</strong><span>tempo na jornada</span></div><div class="result-card"><strong>${correctCount()} / ${totalAnswered()}</strong><span>desafios corretos</span></div><div class="result-card"><strong>${percent}%</strong><span>aproveitamento</span></div><div class="result-card"><strong>6 / 6</strong><span>missões completas</span></div></div><div class="result-section"><h3>Seu mapa de aprendizagem</h3>${skills.map(s=>`<div class="skill-row"><span>${s.name}</span><div class="skill-track"><i style="width:${s.score}%"></i></div><span>${s.answered?s.score+'%':'—'}</span></div>`).join('')}</div><div class="result-section"><h3>Uma ideia que você leva</h3><p style="color:#b6c8be">${escapeHtml(Object.values(state.reflections).filter(Boolean).slice(-1)[0]||'Você pode registrar uma reflexão na próxima jornada.')}</p><p style="color:#8da59a;font-size:12px">Resultado formativo para apoiar a aprendizagem. Use o relatório junto com a observação e outras atividades da turma.</p></div><div class="report-actions"><button class="primary-button" id="export-report">Baixar relatório da jornada</button><button class="secondary-button" id="restart">Começar de novo</button></div></section>`;document.querySelector('#export-report').onclick=exportReport;document.querySelector('#restart').onclick=()=>{localStorage.removeItem(sessionKey(state.name));state=null;renderHome()};sendResults();}
function escapeHtml(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function exportReport(){const report={className:CLASS_NAME,student:state.name,startedAt:new Date(state.startedAt).toISOString(),durationSeconds:state.elapsed,correct:correctCount(),answered:totalAnswered(),percent:totalAnswered()?Math.round(correctCount()/totalAnswered()*100):0,missions:missions.map((m,i)=>({name:m.title,answers:state.answers.filter(a=>a.mission===i)})),reflections:state.reflections,reviewScore:state.reviewScore??null};const blob=new Blob([JSON.stringify(report,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`relatorio-trilha-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href);}
function readReportQueue(){try{return JSON.parse(localStorage.getItem(REPORT_QUEUE_KEY)||'[]')}catch{return []}}
function writeReportQueue(queue){localStorage.setItem(REPORT_QUEUE_KEY,JSON.stringify(queue))}
function enqueueReport(payload,notice){
  const queue=readReportQueue();
  if(!queue.some(item=>item.id===payload.recordId)){queue.push({id:payload.recordId,payload,notice});writeReportQueue(queue)}
  flushReportQueue();
}
function flushReportQueue(){
  if(!navigator.onLine)return;
  const url=localStorage.getItem(SCRIPT_KEY)||SCRIPT_DEFAULT_URL,queue=readReportQueue();
  if(!url||!queue.length)return;
  queue.forEach(item=>{
    if(inFlightReports.has(item.id))return;
    inFlightReports.add(item.id);
    fetch(url,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(item.payload)})
      .then(()=>{writeReportQueue(readReportQueue().filter(pending=>pending.id!==item.id));showToast(item.notice);})
      .catch(()=>showToast('Sem conexão para enviar agora. O registro ficou na fila para uma nova tentativa.'))
      .finally(()=>inFlightReports.delete(item.id));
  });
}
function reportMissionCompletion(index){
  state.reportedMissions=state.reportedMissions||[];
  if(state.reportedMissions.includes(index))return;
  const answers=state.answers.filter(answer=>answer.mission===index);
  const correct=answers.filter(answer=>answer.correct).length;
  const payload={
    action:'saveMission',recordId:String(state.startedAt)+':mission:'+index,missionIndex:index,
    missionTitle:missions[index].title,className:CLASS_NAME,student:state.name,
    startedAt:new Date(state.startedAt).toISOString(),durationSeconds:state.missionElapsed,
    correct,answered:answers.length,percent:answers.length?Math.round(correct/answers.length*100):0,
    answers,reflections:{[index]:state.reflections[index]||''},reviewScore:state.reviewScore??null
  };
  enqueueReport(payload,'Conclusão da missão enviada. Confirme o novo registro na planilha APP_EDFINANCEIRA.');
  state.reportedMissions.push(index);save();
}
function sendResults(){
  const payload={
    action:'saveResult',recordId:String(state.startedAt)+':final',className:CLASS_NAME,
    student:state.name,startedAt:new Date(state.startedAt).toISOString(),durationSeconds:state.elapsed,
    correct:correctCount(),answered:totalAnswered(),
    percent:totalAnswered()?Math.round(correctCount()/totalAnswered()*100):0,
    answers:state.answers,reflections:state.reflections,reviewScore:state.reviewScore??null
  };
  enqueueReport(payload,'Resultado final enviado. Confirme o recebimento na planilha APP_EDFINANCEIRA.');
}
function showToast(msg){const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastHandle);toastHandle=setTimeout(()=>el.classList.remove('show'),3500)}
document.querySelector('#sound-toggle').onclick=e=>{soundOn=!soundOn;e.currentTarget.innerHTML=soundOn?'♫ <span>Som ligado</span>':'♫ <span>Som</span>';e.currentTarget.setAttribute('aria-label',soundOn?'Desativar efeitos sonoros':'Ativar efeitos sonoros');showToast(soundOn?'Sons ativados.':'Sons desativados.');if(soundOn)playSound('on')};
function parseCsvText(text){
  const firstLine=String(text).split(/\r?\n/,1)[0]||'';
  const delimiter=(firstLine.split(';').length>firstLine.split(',').length)?';':',';
  const rows=[];let row=[],field='',quoted=false;
  for(let i=0;i<text.length;i++){const ch=text[i];if(ch==='"'){if(quoted&&text[i+1]==='"'){field+='"';i++}else quoted=!quoted}else if(ch===delimiter&&!quoted){row.push(field);field=''}else if((ch==='\n'||ch==='\r')&&!quoted){if(ch==='\r'&&text[i+1]==='\n')i++;row.push(field);if(row.some(v=>v!==''))rows.push(row);row=[];field=''}else field+=ch}
  row.push(field);if(row.some(v=>v!==''))rows.push(row);return rows;
}
function csvToTeacherResults(text){
  const grid=parseCsvText(text.replace(/^\uFEFF/,''));
  if(grid.length<2)throw new Error('O arquivo não tem linhas de resultados.');
  const headers=grid[0].map(v=>String(v).trim().toLocaleLowerCase('pt-BR'));
  const col=(name,fallback)=>{const i=headers.indexOf(name.toLocaleLowerCase('pt-BR'));return i<0?fallback:i};
  const number=(v)=>{const n=Number(String(v||'').replace(',','.'));return Number.isFinite(n)?n:0};
  const parse=(v,fallback)=>{try{return JSON.parse(v||'')}catch{return fallback}};
  return grid.slice(1).filter(r=>r[col('Estudante',2)]).map(r=>({
    receivedAt:r[col('Recebido em',0)]||'',className:r[col('Turma',1)]||'',student:r[col('Estudante',2)]||'',
    startedAt:r[col('Início da sessão',3)]||'',durationSeconds:number(r[col('Duração (segundos)',4)]),
    correct:number(r[col('Acertos',5)]),answered:number(r[col('Respondidas',6)]),percent:number(r[col('Aproveitamento (%)',7)]),
    answers:parse(r[col('Respostas (JSON)',8)],[]),reflections:parse(r[col('Reflexões (JSON)',9)],{}),review:r[col('Revisão após 1h',10)]||'',recordType:r[col('Tipo de registro',11)]||'Jornada completa',mission:r[col('Missão',12)]||'Todas as missões'
  })).reverse();
}
function renderTeacherDashboard(password){
  app.innerHTML='<section class="teacher-dashboard"><div class="teacher-dashboard-head"><div><span class="eyebrow">ÁREA DO PROFESSOR · 7º C</span><h1>Painel de resultados</h1><p>Resumo atualizado das missões e dos registros da turma.</p></div><div class="teacher-actions"><button class="secondary-button" id="teacher-back">Voltar ao início</button></div></div><div class="teacher-import-card"><div><h2>Resultados da turma</h2><p>Os dados são consultados diretamente na planilha protegida pelo Apps Script.</p></div><div class="teacher-actions"><button class="secondary-button" id="teacher-refresh">Atualizar painel</button></div></div><div id="teacher-panel-content"><div class="teacher-empty"><div class="empty-mark">↻</div><h2>Carregando resultados</h2><p>Consultando os registros da turma com acesso autorizado.</p></div></div></section>';
  document.querySelector('#teacher-back').onclick=renderHome;
  document.querySelector('#teacher-refresh').onclick=()=>loadTeacherResults(password);
  loadTeacherResults(password);
}
function loadTeacherResults(password){
  const host=document.querySelector('#teacher-panel-content');
  if(!host)return;
  host.innerHTML='<div class="teacher-empty"><div class="empty-mark">↻</div><h2>Atualizando painel</h2><p>Buscando os registros mais recentes.</p></div>';
  const callback='teacherResults_'+Date.now()+'_'+Math.random().toString(36).slice(2);
  const params=new URLSearchParams({action:'teacherResults',password,callback});
  const script=document.createElement('script');
  const cleanup=()=>{delete window[callback];script.remove()};
  const timer=setTimeout(()=>{cleanup();const target=document.querySelector('#teacher-panel-content');if(target)target.innerHTML='<div class="teacher-empty"><h2>Consulta demorou demais</h2><p>Verifique sua conexão e tente atualizar o painel.</p></div>'},20000);
  window[callback]=data=>{
    clearTimeout(timer);cleanup();
    const target=document.querySelector('#teacher-panel-content');
    if(!target)return;
    if(!data||!data.ok){target.innerHTML='<div class="teacher-empty"><h2>Não foi possível acessar os resultados</h2><p>'+escapeHtml(data?.error||'Confira a senha e a configuração do Apps Script.')+'</p></div>';return}
    if(!Array.isArray(data.rows)||!data.rows.length){target.innerHTML='<div class="teacher-empty"><div class="empty-mark">↗</div><h2>Nenhum resultado registrado ainda</h2><p>Quando os estudantes concluírem missões, os registros aparecerão aqui.</p></div>';return}
    renderTeacherResults(data.rows,'Consulta atualizada em '+new Date().toLocaleString('pt-BR'));
  };
  script.onerror=()=>{clearTimeout(timer);cleanup();const target=document.querySelector('#teacher-panel-content');if(target)target.innerHTML='<div class="teacher-empty"><h2>Falha na consulta</h2><p>O Apps Script precisa estar implantado com a versão que libera a consulta autenticada do painel.</p></div>'};
  script.src=SCRIPT_DEFAULT_URL+'?'+params.toString();
  document.head.appendChild(script);
}
function renderTeacherResults(rows,fileName){
  const host=document.querySelector('#teacher-panel-content');
  const unique=new Set(rows.map(r=>r.student)).size;
  const finalSessions=new Set(rows.filter(r=>r.recordType==='Jornada completa').map(r=>r.student+'|'+r.startedAt));
  const performanceRows=rows.filter(r=>r.recordType!=='Missão concluída'||!finalSessions.has(r.student+'|'+r.startedAt));
  const avg=performanceRows.length?Math.round(performanceRows.reduce((n,r)=>n+r.percent,0)/performanceRows.length):0;
  const avgTime=performanceRows.length?Math.round(performanceRows.reduce((n,r)=>n+r.durationSeconds,0)/performanceRows.length):0;
  const missionStats=missions.map((m,i)=>{let total=0,correct=0;performanceRows.forEach(r=>(Array.isArray(r.answers)?r.answers:[]).forEach(a=>{if(Number(a.mission)===i){total++;if(a.correct)correct++}}));return {name:m.title,total,percent:total?Math.round(correct/total*100):0}});
  const active=missionStats.filter(x=>x.total).sort((a,b)=>b.percent-a.percent);
  const highlight=active.length?'<div class="insight-card"><span class="eyebrow">LEITURA DA TURMA</span><p>Melhor resultado registrado em <b>'+escapeHtml(active[0].name)+'</b> ('+active[0].percent+'%).'+(active.length>1?' Vale retomar <b>'+escapeHtml(active[active.length-1].name)+'</b>, com '+active[active.length-1].percent+'% de acertos nos desafios respondidos.':'')+'</p></div>':'<div class="insight-card"><span class="eyebrow">LEITURA DA TURMA</span><p>O CSV contém os resultados gerais. Para a análise por missão, os registros precisam incluir as respostas detalhadas da atividade.</p></div>';
  const bars=missionStats.map(x=>'<div class="mission-analysis-row"><span>'+escapeHtml(x.name)+'</span><div class="skill-track"><i style="width:'+x.percent+'%"></i></div><b>'+(x.total?x.percent+'%':'—')+'</b><small>'+x.total+' respostas</small></div>').join('');
  const rowsHtml=rows.map((r,i)=>{const reflections=Object.entries(r.reflections||{}).filter(([,v])=>String(v||'').trim()).map(([key,v])=>'<li><b>'+escapeHtml(missions[Number(key)]?.title||('Missão '+key))+':</b> '+escapeHtml(v)+'</li>').join('');const answers=Array.isArray(r.answers)?r.answers:[];const detail='<details class="teacher-detail"><summary>Ver detalhes ('+answers.length+')</summary>'+(reflections?'<h4>Reflexões</h4><ul>'+reflections+'</ul>':'<p>Sem reflexões registradas.</p>')+'</details>';return '<tr><td>'+(i+1)+'</td><td>'+escapeHtml(r.recordType)+'</td><td>'+escapeHtml(r.mission)+'</td><td><strong>'+escapeHtml(r.student)+'</strong><small>'+escapeHtml(r.className)+'</small></td><td>'+escapeHtml(r.receivedAt)+'</td><td>'+fmt(r.durationSeconds)+'</td><td>'+r.correct+' / '+r.answered+'</td><td><span class="score-pill">'+r.percent+'%</span></td><td>'+escapeHtml(r.review||'—')+'</td><td>'+detail+'</td></tr>'}).join('');
  host.innerHTML='<div class="teacher-kpis"><article class="teacher-kpi"><span>Registros</span><strong>'+rows.length+'</strong></article><article class="teacher-kpi"><span>Estudantes</span><strong>'+unique+'</strong></article><article class="teacher-kpi"><span>Média de aproveitamento</span><strong>'+avg+'%</strong></article><article class="teacher-kpi"><span>Tempo médio</span><strong>'+fmt(avgTime)+'</strong></article></div>'+highlight+'<section class="teacher-analysis"><div class="teacher-section-heading"><div><span class="eyebrow">DESEMPENHO</span><h2>Resultados por missão</h2></div><span class="file-name">'+escapeHtml(fileName)+'</span></div><div class="mission-analysis">'+bars+'</div></section><section class="teacher-results"><div class="teacher-section-heading"><div><span class="eyebrow">REGISTROS</span><h2>Resultados individuais</h2></div><input id="teacher-search" type="search" placeholder="Buscar estudante" aria-label="Buscar estudante"></div><div class="teacher-table-wrap"><table><thead><tr><th>#</th><th>Registro</th><th>Missão</th><th>Estudante</th><th>Recebido</th><th>Duração</th><th>Acertos</th><th>Resultado</th><th>Revisão</th><th>Reflexões</th></tr></thead><tbody id="teacher-table-body">'+rowsHtml+'</tbody></table></div></section>';
  document.querySelector('#teacher-search').oninput=e=>{const q=e.target.value.toLocaleLowerCase('pt-BR');document.querySelectorAll('#teacher-table-body tr').forEach(tr=>tr.hidden=!tr.textContent.toLocaleLowerCase('pt-BR').includes(q))};
}
document.querySelector('#teacher-access').onclick=()=>{document.querySelector('#teacher-password').value='';document.querySelector('#teacher-error').textContent='';document.querySelector('#teacher-dialog').showModal();document.querySelector('#teacher-password').focus()};
document.querySelector('#teacher-form').addEventListener('submit',e=>{if(e.submitter?.id==='open-results'){e.preventDefault();const input=document.querySelector('#teacher-password'),error=document.querySelector('#teacher-error'),password=input.value.trim();if(!password){error.textContent='Digite a senha para continuar.';return}document.querySelector('#teacher-dialog').close();input.value='';error.textContent='';renderTeacherDashboard(password)}});
window.addEventListener('online',flushReportQueue);
flushReportQueue();
renderHome();
