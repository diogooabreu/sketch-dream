# SketchDream

## Status
Projeto legado em estado de refatoração. 

## Objetivos atuais
- Reorganização de arquitetura para seguir o padrão SPA (Single Page Aplication)
- Atualização de dependências defasadas
- Correção de bugs 
- Melhoria da estrutura e legibilidade do código

## Sobre o Projeto
Esse projeto foi originalmente desenvolvido para implementação prática do conteúdo assistido em aula, com inspiração no site DeviantArt.

## Tecnologias utilizadas
- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery

## Ferramentas utilizadas
- Git
- Github Pages

## Link do projeto no GitHub Pages
https://github.com/diogooabreu/sketch-dream.git

## Protótipo no Figma
https://www.figma.com/design/OT9QPvnt8ps2fEEkqHPIuO/DesignSystem?node-id=2-2&t=Y3I3VHFWImxUX9f7-1

# Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)
### RA1 - Utilizar Frameworks CSS para estilização de HTML e criação de layouts responsivos.

- **[x] ID 00** - Prototipa interfaces adaptáveis para no mínimo mobile e desktop, em ferramentas como Figma, Quant UX ou Sketch.
- **[x] ID 01** - Implementa um layout responsivo de uma página web utilizando um Framework CSS, como Bootstrap ou Tailwind.
- **[x] ID 02** - Utiliza técnicas avançadas de CSS, como Flexbox ou Grid Layout para criar layouts responsivos e fluidos em resoluções diferentes de tela.
- **[x] ID 03** - Utiliza os componentes CSS e JavaScript oferecidos por um Framework CSS, como cards, modais ou carrosséis, ajustando estilos conforme o necessário.
- **[x] ID 04** - Implementa um layout fluído e responsivo utilizando unidades de visualização como *vw* ou *vh* em vez de unidades fixas (px) para oferecer uma experiência mais consistente ao usuário em diferentes tamanhos de tela.
- **[x] ID 05** - Implementa animações CSS em elementos da página, como hover, fadeIn/fadeOut, slideIn/slideOut, utilizando bibliotecas de animação como o Animate.css, para fornecer feedback visual ao usuário e criar uma experiência mais agradável.
- ~~[-] ID 06 - Tópico cancelado.~~
- **[x] ID 07** - Aplica um Design System consistente, definindo diretrizes de estilo, núcleos, tipografia e padrões de componentes em toda a aplicação, oferecendo uma experiência uniforme ao usuário.

### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente, utilizando a API do HTML e expressões regulares (REGEX).

- **[x] ID 08** - Implementa tratamento de formulários no lado cliente com apresentação de mensagens de erro ou sucesso, utilizando os recursos da API do HTML, como validação de campos obrigatórios, tipo de entrada e limites de caracteres, garantindo que os dados inseridos sejam válidos antes de serem enviados para o servidor.
- **[x] ID 09** - Aplica expressões regulares (REGEX) de froma eficiente para realizar validações customizadas em campos como formatos de e-mail, telefone, data ou outros definidos para padrões relacionados (REGEX) para realizar validações customizados no projeto.
- **[x] ID 10** - Incorpora elementos de listagem, como checkbox, rádio ou select, de forma eficiente possibilitando uma seleção precisa de coleta de dados usuários.
- **[x] ID 11** - Realiza a escrita e leitura de dados no Web Storage, bem como a persistência de sessões de usuário fornecendo uma maneira eficiente de armazenar dados de forma eficaz localmente no navegador.

### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web, incluindo Node.js, NPM e linters para garantir a qualidade do código, juntamento com boas práticas de versionamento e organização de projetos.

- **[x] ID 12** - Configura adequadamente um ambientede desenvolvimento Node.js e NPM para gerenciar e pacotes de dependência do projeto, facilitando a instalação e uso de bibliotecas e ferramentas de desenvolvimento de terceiros.
- ~~[-] ID 13 - tópico cancelado.~~
- **[x] ID 14** - Adota boas práticas de versionamento utilizando sistemas como Git, criando e gerenciando repositórios com branches adequados.
- ~~[-] ID 15 - tópico cancelado.~~
- **[x] ID 16** - Organiza arquivos do projeto em uma estrutura coerente, lógica e modular, facilitando a localização, manutenção e escadabilidade.
- ~~[-]ID 17 - tópico cancelado.~~

### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para a inter-rovatividade de páginas web.

- **[x] ID 18** - Utilizar uma biblioteca jQuery para manipular o DOM e a interação das páginas web, implementando funcionalidades como eventos, animações e manipulação de elementos HTML de forma eficiente.
- **[ ] ID 19** - Selecionar e integra com sucesso um plugin jQuery, o o jQuery Mask Plugin ou outro plugin relevante para o projeto, a fim melhorar uma funcionalidade ou a aparência de elementos da página web.
- ~~[-] ID 20 - tópico cancelado.~~
- ~~[-] ID 21 - tópico cancelado.~~

### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, uma aquisição e de manipulação dinamicamente.

- **[x] ID 22** - Realiza requisições assíncronas para APIs públicas, utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para obter dados dinâmicos e realizar a manipulação e exibição dos resultados na página web.
- **[ ] ID 23** - Realiza requisições assíncronas para uma API fake utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para manipular dados e exibição dos resultados na página web.

## Manual de execução
- Abrir um terminal (ctrl + alt + t)
- Clonar o repositório
```
    git clone https://github.com/diogooabreu/sketch-dream.git
```
- Fazer checkout na branch develop, que contém as modificações mais recentes
```
    git checkout develop
```
- Instalar as dependências
```
    npm install
```
- (Opcional) Instalar o JSON Server disponível em [json-server](https://www.npmjs.com/package/json-server)
```
    npm i -g json-server
```
- Executar a API Fake (JSON Server) via um dos comandos seguintes:
```
    npm run json:server:routes
```
- Ou via Execução explícita: 
```
    json-server --watch db.json --routes routes.json
```
O comando para execução do JSON Server deve ser aplicado no raiz do projeto, ou, que contém o arquivo **db.json-routes.json**
Por padrão, a aplicação JSON Server roda no endereço localhost:3000

Executar o projeto frontend.
