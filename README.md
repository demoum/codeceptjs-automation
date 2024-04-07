
# CodeceptJS

Projeto de Aumtoação Web, utilizando o CodeceptJS com Playwright.

## Instalação

```bash
Instalar o projeto com CodeceptJS: 
npx create-codeceptjs

Inicializar o setup do projeto: 
npx codeceptjs init

Criar setup para Page Objects: 
npx codeceptjs gpo  

HTML Reporter
npm i mochawesome mocha -D
```
    
## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
Rodar os testes: 
npx codeceptjs run

Rodar os testes com tag: 
npx codeceptjs run --grep 'task duplicada'

Rodar os testes com HTML Reporter: 
npx codeceptjs run --reporter mochawesome
```

