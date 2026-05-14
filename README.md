# SketchDream

## Status
Projeto legado em estado de refatoração. 

## Objetivos atuais
- **Consertar a arquitetura SPA:** Corrigir os bugs no JavaScript de roteamento, intercepção de links e manipulação de DOM.
- **Resolver a componentização do HTML:** Refatorar as páginas para que atuem como fragmentos (partials) injetáveis, ao invés de documentos HTML completos aninhados.
- **Corrigir links quebrados (Pathing):** Padronizar caminhos relativos que quebram ao carregar componentes assincronamente a partir da raiz.
- **Implementar persistência de dados realista:** Substituir o uso rudimentar do `localStorage` por uma integração funcional com a API Fake (`json-server`).
- **Remover redirecionamentos estáticos:** Eliminar redirecionamentos forçados (ex: `window.location.href`) que recarregam a página e destroem o fluxo da SPA.
- **Alinhar dependências e ambiente:** Assegurar que as bibliotecas e CDNs (Bootstrap, AlertifyJS) carreguem corretamente na aplicação principal.

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
