# DiGuiseppe Recipe GraphQL Server

## Description

This API implements Apollo Federation to distribute the data graph across micro-services.

## Requirements

- nodejs (v12+)

## Getting Started

- `npm i`
- `cp .env.sample .env`
- `npm run dev`

## Commands

| Command              | Description |
| ---------------------|-------------|
| npm run dev          | starts express server with nodemon for automaticly reloading the server |
| npm start            | starts express server |
| npm test             | runs all mocha tests |
| npm test:watch       | runs all mocha tests in watch mode |
| npm run lint         | runs eslint on all javascript files |
| npm run lint:fix     | runs eslint on all javascript files and automatically fixes what it can |
| npm run init:hard    | removes `node_modules`, `package-lock.json` and reinstalls all packages |
| npm run cover        | runes tests with instanbul coverage checks |
| npm run cover:ci     | creates the lcov report that code climate reads from in CI |
| npm run cover:report | opens coverage report |

## Authorization

GraphQL reccomends offloading authorization to the business layer logic

https://graphql.org/learn/thinking-in-graphs/#business-logic-layer

https://www.apollographql.com/docs/apollo-server/security/authentication/