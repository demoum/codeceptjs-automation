# CodeceptJS

Projeto de Aumtoação Web, utilizando o CodeceptJS com Playwright.

## Instalação

```bash
Instalar o projeto com CodeceptJS:
npx create-codeceptjs

Inicializar o setup do projeto:
npx codeceptjs init

Escolha as seguintes opções:
- Do you plan to write tests in Typescript? (y/n)
  Responda N

- Where are your tests located? (./*_test.js)
  Tecla ENTER

What helpers do you want to use?
  Responda Playwright

Where should logs, screenshots, and reports to be stored? (./output)
Tecla ENTER

Do you want to enable localization for tests?
Tecla em English

Show browser window
Tecla Y  de yes

(As as ultimas perguntas, basta teclar ENTER)

Criar setup para Page Objects:
npx codeceptjs gpo

HTML Reporter
npm i mochawesome mocha -D
```

## Subindo a aplicação local - API e WEB

Para rodar os testes, primeiro precisa fazer o start da API e aplicação Web, ambos localhost.
O projeto da API e Web está em \codeceptjs-express-qa\api-web\mark-dev-build-r2.zip basta descompactar em sua máquina.

```bash
npm install
npm run dev
```

## Rodando os testes

```bash
Rodar os testes:
npx codeceptjs run

Rodar os testes com tag:
npx codeceptjs run --grep 'task duplicada'

Rodar os testes com HTML Reporter:
npx codeceptjs run --reporter mochawesome
```
