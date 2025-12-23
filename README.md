# ProspeccaoEU

SaaS de prospecção B2B europeia.

## Estrutura do Projeto

- `/client`: Frontend em React com Vite e Tailwind CSS.
- `/server`: Backend em Node.js com Express.

## Pré-requisitos

- Node.js (v18 ou superior recomendado)
- npm

## Como Rodar

### Instalação

Na raiz do projeto, instale as dependências de todo o projeto:

```bash
npm run install:all
```

### Rodando o Servidor (Backend)

Em um terminal:

```bash
npm run start:server
```
O servidor rodará em `http://localhost:5000`.

### Rodando o Cliente (Frontend)

Em outro terminal:

```bash
npm run start:client
```
O frontend rodará em `http://localhost:5173` (padrão do Vite).

### Variáveis de Ambiente

Renomeie o arquivo `server/.env.example` para `server/.env` e configure as variáveis necessárias:

```
PORT=5000
AIRTABLE_API_KEY=sua_chave
AIRTABLE_BASE_ID=seu_base_id
STRIPE_SECRET_KEY=sua_chave_stripe
GEMINI_API_KEY=sua_chave_gemini
```
