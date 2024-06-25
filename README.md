# sketch-dream

Este projeto tem como objetivo implementar progressivamente o conteúdo assistido em aula.
Inspiração: DeviantArt

# O frontend da aplicação foi desenvolvido com HTML, CSS e JavaScript.
https://github.com/diogooabreu/sketch-dream.git

# Protótipo no Figma
https://www.figma.com/design/OT9QPvnt8ps2fEEkqHPIuO/DesignSystem?node-id=2-2&t=Y3I3VHFWImxUX9f7-1

Lista de verificação | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)
RA1 - Utilizar Frameworks CSS para estilização de HTML e criação de layouts responsivos.

- [x] ID0 - Interfaces Prototipa adaptáveis para no mínimo no émdores de tela mobile e desktop, ferramentas que se delineam como Figma, Quant UX ou Sketch.
- [x] ID 01 - Implementa um layout responsivo de uma página web utilizando um Framework CSS, como Bootstrap ou Tailwind, que se adapt a adequadamente a diferentes tamanhos de tela e dispositivos.
- [x] ID 02 - Utilizar técnicas avançadas de CSS, como Flexbox ou Grid Layout, layouts para criar responsivos e fluidos em resoluções diferentes de tela.
- [x] ID 03 - Utilizar os componentes CSS e JavaScript por um oferecidos Framework CSS, como cartões, modais ou carros ouséis, frameworkando conformando estilos o necessário.
- [x] ID 04 - Implementa um layout fluido e responsivo unidades de visualização de visualização de utilizando (vw, vh) em unidades de vez fixas (px) para experiência uma consistente de usuário em em tamanhos e dispositivos de tela.
- [x] ID 05 - Implementa animações em elementos da página, como hover, fadeIn/fadeOut, slideIn/slideOut, CSS utilizando Animas ou bibliotecas de, como animação o Animate.css, para fornecer feedback visual ao usuário e criar uma experiência.
- [ ] ID 06 - Cria transições personalizados diferentes entre da da página ou estados, elementos como mudanças, alterações de cor ou/hide de, elementos, que se traduz CSS Transitions ou CSS Animation, para a aabilidade nos aparência e a aplicação da. 
- [x] ID 07 - Aplica um Design System consistente, definindo diretrizes de estilo, núcleos, tipografia e padrões de componentes em toda aplicação em toda a aplicação, experiência uma usuário de usuário e uniforme.

RA2 - Realizarizar de tratamento e aplica validações customizadas sem cliente, utilizando um lado de API faz expressões HTML e regulares (REGEX).

- [x] ID 08 - Implementa tratamento de formulários no lado cliente com apresentação de mensagens de erro ou sucesso, utilizando os recursos da API do HTML, como validação de campos obrigatórios, tipo de entrada e limites de caracteres, garantindo que os dados inseridos sejam válidos antes de serem enviados para o servidor.
- [x] ID 09 - Aplica expressões regulares (REGEX) eficiente para realiza validações customizadas nos campos des, como os formatos de e-mail, telefone, data ou outros definidos para padrões relacionados (REGEX) eficiente para realizar validações customizados no projeto.
- [ ] ID 10 - Incorpora elementos de listagem, como checkbox, rádio ou select, forma eficiente ems web, possibilitando uma seleção de coleta e precisa de dados usuários.
- [x] ID 11 - Realiza a escrita e leitura de dados no Web Storage, a persistência de sessões de usuário e fornecendo maneira umamente dermado de dados de forma eficaz localmente no navegador.

RA3 - Aplicarr para otimização para o processo de desenvolvimento web com a internet, Node.js, NPM e linters para qualidade a do código do código, juntamento com boas práticas de versãoamento e organização de projetos.

- [x] ID 12 - Configura adequadamente um ambiente de desenvolvimento de desenvolvimento Node.js e NPM para gerenciar e pacotes de dependência do projeto, facilitando a instalação a uso e de bibliotecas e ferramentas de desenvolvimento de terceiros.
- [ ] ID 13 - Utilização linters, como ESLint ou Stylelint, para analisar e corrigir automaticamente de problemas, erros de código do modelo, doação de estilo, práticas e boas-práticas, garantindo a qualidade e consistência do código do projeto.
- [x] ID 14  - Adota boas práticas de versionamento utilizando sistemas como Git, criando e gerenciando repositórios com branches adequados.
- [ ] ID 15 - Utilização de técnicas de minificação e de, recursos minificação de CSS e JavaScript e otimização de imagens, para melhorar o desempenho e o tempo de carregamento do site ou aplicação.
- [x] ID 16 - Organiza arquivos do projeto em uma estrutura coerente, e lógica modular, facilitando a localização, manutenção e escadabilidade.
- [ ]ID 17 - Utilizar como metodologias BEM (Block Element Modifier) ou SMACSS (Scalable and Modular Architecture for CSS) organizar e estruturar os estrapanho os CSS de forma eficiente, uma legibilidade, uma legibilidade do projeto e manutenção a do projeto.

RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para a interprovatividade de páginas web.

- [x] ID 18 - Utilizar uma biblioteca jQuery para manipular o DOM e a interpercutagear das páginas web, implementando funcionalidades como eventos, animações e manipulação de elementos HTML de forma eficiente.
- [ ] ID 19 - Selecionar e integra com sucesso um plugin jQuery, o o jQuery Mask Plugin ou outro plugin relevante para o projeto, a melhorar de uma funcionalidade ou a aparência de elementos des em uma página web.
- [ ] ID 20 - Utilizar bibliotecas de componentes web, como Lit, para criar reutiliz components reutiliz components, para criar reutiliz components, paramilitares e encapsulados, melhorando a modularidade e a manutenibilidade das páginas web.
- [ ] ID 21 - Utilizar uma biblioteca de componentes, adas como Material Web Components ou outra escolha de outra, alguma componente (standalone) a site inglês (standalone) a fim de embalagem de uma biblioteca

RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, uma aquisição e de manipulação dinamicamente.

- [ ] ID 22 ID 22 - Realiza requisições assíncronas para APIs públicas, utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para obter dados dinâmicos e realizar a manipulação e exibição dos resultados na página web.
- [ ] ID 23 -ID 23 - Realiza requisições assíncronas para uma API fake utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para manipular dados e exibição dos resultados na página web.
Manual de execução

    Clonar o repositório com git clone
    Fazer checkout sem branch developque contém como mais modificações recentes
    Abrir o projeto no editor Visual Studio Code (VS Code)
    Abrir um terminal pelo VSCode ou qualquer terminal do Sistema Operacional apontando para o raiz do projeto
    Instalar como dependência nãopackage.json
        Comando: npm i
    (Opcional) Instalar o JSON Server disponível em emhttps://www.npmjs.com/package/json-server
        Comando: npm i -g json-server
        É opcional porque a dependência a já cadastrada no arquivo package.jsonpara instalação local na massa node_modules
    Executar a API Fake (JSON Server) via um dos comandos seguintes:
        via scriptmail registrado não package.json: npm run json:server:routes
        Ou via Execução explícita: json-server --watch db.json --routes routes.json
    O comando para execução do JSON Server deve ser aplicado no raiz do projeto, ou, que contém o arquivodb.jsoneroutes.json( , . e
        Por padrão, a aplicação JSON Server se a a. localhost:3000
    Executar o projeto frontend.
