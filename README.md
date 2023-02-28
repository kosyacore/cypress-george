
# TypeScript Cypress Cucumber Framework for George

[![TypeScript](https://shields.io/npm/v/typescript?label=typescript&logo=typescript&style=for-the-badge)](https://www.typescriptlang.org/)
[![Cypress](https://img.shields.io/npm/v/cypress?color=33ff99&label=cypress&logo=cypress&style=for-the-badge)](https://www.cypress.io)
[![Cucumber Preprocessor](https://img.shields.io/npm/v/@badeball/cypress-cucumber-preprocessor?label=Cucumber%20preprocessor&style=for-the-badge)](https://github.com/badeball/cypress-cucumber-preprocessor)

This is simple framework project that demonstrates end-to-end testing in [cypress.io](https://www.cypress.io/)
using [cucumber preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor) for [George](https://george.fat3.sparkasse.at/) site.

## Approach

Two approaches were used in test development:

| Approach  | Description  | Features  |
| :------------: | :------------: | :------------: |
| BDD  | Standard BDD approach. The steps are implemented in the GWT format from user perspective  | cypress/features/bdd  |
| Element Driven | Also GWT format from user perspective but interaction occurs with each individual element | cypress/features/element-driven

## Prerequisites

Make sure you have installed all the following prerequisites on your development machine:

| OS      | Node                                    |
|---------|-----------------------------------------|
| macOS   | `brew install node`                     |

## Executing The Tests

- Clone the repository

```shell
git clone git@github.com:kosyacore/cypress-george.git
```

- Change the directory

```shell
cd cypress-george
```

- Run the test

```shell
npm install && npm run test