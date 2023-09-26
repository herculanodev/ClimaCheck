                                       WEACAST
Levantamento de Requisitos (RF - Requisito Funcional) para o Aplicativo WeaCast:

RF1 - O aplicativo deve permitir ao usuário visualizar a previsão do tempo para sua localização atual automaticamente.
Descrição: O aplicativo deve ser capaz de detectar a localização atual do usuário e fornecer informações meteorológicas relevantes para essa área.

RF2 - O aplicativo deve permitir ao usuário pesquisar e adicionar cidades favoritas para acompanhar a previsão do tempo.
Descrição: Os usuários devem ter a capacidade de pesquisar cidades e adicioná-las à lista de favoritos para fácil acesso à previsão do tempo de locais de interesse.

RF3 - O aplicativo deve fornecer previsões detalhadas de curto prazo para as próximas horas.
Descrição: Além da previsão de longo prazo, o aplicativo deve apresentar informações sobre o clima nas próximas horas, incluindo temperatura, umidade, velocidade do vento e precipitação.

RF4 - O aplicativo deve oferecer mapas interativos com informações meteorológicas em tempo real.
Descrição: Os usuários devem poder acessar mapas interativos que exibem informações detalhadas sobre as condições climáticas, incluindo mapas de temperatura, radar de precipitação e vento.

RF5 - O aplicativo deve fornecer alertas meteorológicos personalizados.
Descrição: Os usuários devem receber alertas em tempo real sobre eventos climáticos severos, como tempestades, furacões, nevascas, garantindo sua segurança.

RF6 - O aplicativo deve permitir que os usuários escolham suas unidades de medida preferidas (Celsius, Fahrenheit, etc.).
Descrição: Os usuários devem ter a flexibilidade de selecionar as unidades de medida que desejam para as informações meteorológicas apresentadas.

RF7 - O aplicativo deve oferecer histórico de condições climáticas passadas para análise e comparação.
Descrição: Os usuários devem poder acessar informações sobre o histórico do tempo para entender tendências climáticas sazonais e comparar condições climáticas ao longo do tempo.

RF8 - O aplicativo deve permitir o compartilhamento de informações climáticas em redes sociais e outras plataformas.
Descrição: Os usuários devem poder compartilhar facilmente informações sobre o clima com amigos e familiares por meio de redes sociais, mensagens ou e-mail.





ALI (Arquivos Lógicos Internos):

Previsões do Tempo (2 DER) - Simples

Descrição: Este arquivo contém as informações detalhadas sobre as previsões do tempo para diferentes locais, incluindo dados como temperatura, umidade, velocidade do vento e precipitação.
Configurações do Usuário (3 DER) - Simples

Descrição: Este arquivo armazena as preferências e configurações individuais dos usuários, incluindo unidades de medida preferidas (Celsius, Fahrenheit, etc.) e cidades favoritas.
AIE (Arquivos de Interface Externa):

API da Receita Federal - Verificar CPF válido - Simples (baixa) complexidade

Descrição: Essa interface permite que o aplicativo se comunique com a API da Receita Federal para verificar a validade de CPFs fornecidos pelos usuários. Isso pode ser usado para garantir a precisão das informações de cadastro.
API da SSP - Secretaria de Segurança Pública - Verificar RG válido - Simples (baixa) complexidade

Descrição: Essa interface permite que o aplicativo se comunique com a API da Secretaria de Segurança Pública para verificar a validade de números de RG fornecidos pelos usuários. Isso pode ser usado para autenticação ou validação de identidade.


EE's (Entradas Externas):

Incluir Cidade Favorita - Simples (baixa) complexidade

Descrição: Permite aos usuários incluir uma cidade como favorita em sua lista de cidades monitoradas.
Remover Cidade Favorita - Simples (baixa) complexidade

Descrição: Permite aos usuários remover uma cidade da lista de cidades favoritas.
Editar Preferências de Unidade de Medida - Simples (baixa) complexidade

Descrição: Permite aos usuários editar suas preferências de unidade de medida (por exemplo, de Celsius para Fahrenheit).
CE's (Consultas Externas):

Pesquisar Cidade - Simples (baixa) complexidade

Descrição: Permite aos usuários pesquisar informações detalhadas sobre uma cidade específica.
Recuperar Previsão do Tempo para uma Cidade - Simples (baixa) complexidade

Descrição: Recupera a previsão do tempo atualizada para uma cidade específica.
SE's (Saídas Externas - consultas com processamento ou resultados de cálculos):

Observação: Como mencionado, neste exemplo não temos saídas externas ao usuário com processamento ou cálculos. O aplicativo fornece principalmente informações de previsão do tempo, mas não realiza cálculos complexos para apresentar essas informações.


SE’s (saídas externas – consultas com processamento ou resultados de cálculos)
obs.: neste exemplo não temos saída externa ao usuário com processamento (cálculo).




Características Gerais do Sistema (CGS) e Grau de Influência (NI):

Complexidade da Interface com o Usuário (UI) - NI: 3 (influência média)
Processamento de Dados Distribuídos (Distribuição) - NI: 2 (influência moderada)
Regras de Negócios Complexas (Negócios) - NI: 4 (influência significativa)
Requisitos (Técnicos) Não Funcionais (RNFs) e Grau de Influência (NI):

Segurança (Security) - NI: 3 (influência média)
Desempenho (Performance) - NI: 3 (influência média)
Usabilidade (Usability) - NI: 2 (influência moderada)
Total Nível de Influência: 19

Aplicando o Fator de Ajuste (PFA):
O Valor do Fator de Ajuste (VFA) é calculado da seguinte forma:
VFA = (NI * 0,01) + 0,65

VFA = (19 * 0,01) + 0,65 = 0,84

Cálculo do PFA:
PFA = PFB (Pontos de Função Brutos) * VFA (Valor do Fator de Ajuste)

PFA = 75 * 0,84 = 63 pontos de função ajustados

Análise de Indicadores de Pontos de Função (APF):
Supondo que, para cada Desenvolvedor de Software, 1 ponto de função equivale a 2 horas de trabalho.

Horas de desenvolvimento para Requisitos Funcionais = 75 * 2 = 150 horas
Horas de desenvolvimento para Requisitos Não Funcionais = 63 * 2 = 126 horas

Total Acumulado de Pontos de Função (PFB + PFA): 138 pontos de função
Se um desenvolvedor trabalhar 8 horas por dia:

Total de dias úteis para desenvolver o sistema = 138 / 8 = aproximadamente 17,25 dias úteis.

