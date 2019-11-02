# Apollo Server

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
| npm run cover:report | opens coverage report |

## TODO:

- relay spec for id's type, uuid encoded
- apollo gateway, federation
- dockerize for local development
- deployment to AWS Lambda
- integration with DataSources
  - DynamoDB
- Authentication
- imporove test coverage
- auto generated documentation
- pagination
- code climate (static analysis)
- media uploads
- logging
- Update operation
