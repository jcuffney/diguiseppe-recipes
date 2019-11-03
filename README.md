# DiGuiseppe Recipe GraphQL Server

[![Maintainability](https://api.codeclimate.com/v1/badges/8dd418aba27d3dc3d8f8/maintainability)](https://codeclimate.com/github/jcuffney/recipes-apollo-server/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8dd418aba27d3dc3d8f8/test_coverage)](https://codeclimate.com/github/jcuffney/recipes-apollo-server/test_coverage)

## Description

This API implements Apollo Federation to distribute the data graph across micro-services.

`api.diguisepperecipes.com/graphql`

#### GraphQL Microservices
- recipe-graphql-service
- user-graphql-service
- media-graphql-service

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
