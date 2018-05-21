# Passos Executados

Fork do projeto

Criação de Pasta para o Admin e para o App Mobile

Usar npm install para baixar angular 1.6 e angular animate

Baixei CSS do Bootstrap 

Baixei .js do Angular UI para junto com o CSS do BootStrap fazer um layout melhor

Criei index.html com rascunho angular 

Começei a separar os componentes Angular do Admin

Definição Esqueleto do projeto baseado nos principios do https://github.com/johnpapa/angular-styleguide/tree/master/a1

Criação de Esqueleto do projeto Mobile com o ionic start e definição de plataforma android com ionic cordova add platform android



# TODO

## Minimo
Tela para cadastro de lista de pergunta offline e sem qrcode OK  
Mobile com Login Fake e Lista Fake de Perguntas 

Tela cadastro gerando QrCode Offline e Tela Fake Consulta


Criar Banco e Serviços Rest  
Salvar Questionario Server no Banco

Mobile usando ID fixo, puxar questionario de Rest e salvar em banco local(do browser mesmo)  
Admin gerar QrCode do Questionario

Mobile Enviar Respostas para Server  
Consulta ver resposta

Mobile Ler QrCode  
Mobile com Login Google ou Facebook(o que der certo) e tela para por resposta nas perguntas  
Consulta Enviar Push

Mobile receber Push e mostrar Toast

## Administracao
### Criar Questionario
1. Nome do Questionario
2. Grid de Lista de Perguntas
3. Ao clicar no item da lista abre o detalhe
4. Pergunta terá texto da pergunta e tipo de resposta
5. Finaliza mostrando ID do questionatio e imagem de QR Code(ID ou perguntas?)
6. O mesmo questionario pode ir para diferentes pessoas?
### Ver Questionario
1. Estado inicial, textbox senha(ID) questionario
2. Mostra mesma tela do anterior em modo leitura com as respostas de cada pergunta
3. Botao Enviar Notificao que abre Modal
4. No Modal escreve texto e manda por Push
5. Ver resposta por pessoas
6. Ver QR Code do questionario

## BackEnd
1. Banco Mongo para guardar as perguntas e respostas
2. Eventualmente servir de ponte para notificacao
3. Serviço Rest no Express para validar, devolver,gravar questionarios

## Mobile
1. Login com Facebook ou Google
2. Mostrar Lista de questionario já cadastrados antes(DB Local)
3. Botao Ler Qr Code
4. Após ler abrir tela com as perguntas
5. Após responder volta para tela Inicial
6. Pode receber push


## Extras
* Teste Unitário
* Segurança dos dados
* Estrutura Deploy(gulp?)
* Escalabilidade
* Outras features
* Usar Angular5 e Ionic3
* Doc API Rest Swagger