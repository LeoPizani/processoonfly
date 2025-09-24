# Conector n8n - True Random Number Generator (Desafio Onfly)

Este repositório contém o código-fonte de um conector (nó) customizado para a plataforma de automação n8n, desenvolvido como parte do processo seletivo da Onfly.

O conector, chamado **"Random"**, cumpre com os seguintes requisitos funcionais:
* Utiliza a API pública do **Random.org** para gerar números verdadeiramente aleatórios.
* Possui uma única operação: "True Random Number Generator".
* Aceita dois parâmetros de entrada numéricos: "Min" e "Max".

**Desenvolvido por:** Leonardo Piuzana Pizani

---

## Índice

* [Pré-requisitos](#pré-requisitos)
* [Instalação e Execução](#instalação-e-execução)
* [Configuração do Ambiente](#configuração-do-ambiente)
* [Como Usar o Conector](#como-usar-o-conector)
* [Execução dos Testes](#execução-dos-testes)

---

## Pré-requisitos

Para executar este projeto localmente, você precisará ter as seguintes ferramentas instaladas:

* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [Docker](https://www.docker.com/products/docker-desktop/)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Git](https://git-scm.com/)

---

## Instalação e Execução

Siga os passos abaixo para instalar as dependências e executar o serviço localmente.

**1. Clonar o Repositório**
```bash
git clone [https://github.com/LeoPizani/processoonfly.git](https://github.com/LeoPizani/processoonfly.git)
cd processoonfly
```

**2. Instalar as Dependências**
Este comando irá baixar todas as bibliotecas necessárias para o desenvolvimento do nó.
```bash
npm install
```

**3. Compilar o Projeto**
O código do nó é escrito em TypeScript (`.ts`) e precisa ser compilado para JavaScript (`.js`).
```bash
npm run build
```
Este comando cria uma pasta `dist` com os arquivos compilados.

**4. Executar o Serviço com Docker**
Este comando irá iniciar dois contêineres: um para o n8n e outro para o banco de dados Postgres, conforme os requisitos do desafio.
```bash
docker-compose up
```

**5. Acessar o n8n**
Após a inicialização dos contêineres (pode levar um minuto na primeira vez), a interface do n8n estará disponível no seu navegador no seguinte endereço:
[http://localhost:5678](http://localhost:5678)

---

## Configuração do Ambiente

Toda a configuração do ambiente é gerenciada pelo arquivo `docker-compose.yml`.

* **Banco de Dados:** Um serviço do Postgres é iniciado automaticamente e conectado ao n8n através das variáveis de ambiente `DB_TYPE`, `DB_POSTGRESDB_HOST`, etc. Não é necessária nenhuma configuração manual do banco de dados.
* **Nó Customizado:** O `docker-compose.yml` está configurado para montar o diretório do projeto dentro do contêiner do n8n. Graças à variável `NODE_ENV=development`, qualquer alteração no código (seguida por um `npm run build`) será refletida automaticamente na instância do n8n, facilitando o desenvolvimento.
* **Credenciais:** O nó "Random" utiliza uma API pública e não requer a configuração de nenhuma credencial ou chave de API.

---

## Como Usar o Conector

1.  Acesse a interface do n8n em `http://localhost:5678`.
2.  Crie um novo workflow.
3.  Clique no botão `+` para adicionar um novo nó.
4.  Na barra de busca, procure por **"Random"**.
5.  Adicione o nó ao seu workflow e configure os campos "Min" e "Max".
6.  Clique em "Execute Node" para ver o resultado.

---

## Execução dos Testes

O projeto está configurado com o ESLint para garantir a qualidade e a padronização do código. Para executar o teste de lint, use o seguinte comando:

```bash
# Verifica por erros de formatação e padrão
npm run lint
```

Para tentar corrigir os erros automaticamente:
```bash
npm run lintfix
```
