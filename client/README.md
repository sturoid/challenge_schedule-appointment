# starter-web-react-graphql
Starter project with good basics for creating a web application using React and GraphQL. Includes:
- Code and folder structure.
- Code formatting and enforcement with eslint, prettier, and husky.
- Base UI elements, error elements, form elements, utils, and services.
- Sign in, sign up, forgot password, reset password, and initial authenticated dashboard view.
- Testing setup with Jest, enzyme, and Cypress.

For a starting API use [starter-api-node-graphql](https://github.com/sturoid/starter-api-node-graphql).

## Setup

> npm install

## Run project

> npm run dev

## Testing

### Run and watch tests with Jest and enzyme:

> npm run test

### Run e2e testing with cypress:

> npm run teste2e

This will open up the cypress GUI where the tests can be run and interacted with.

## Code

### File Naming

- React components should ollow the name of the component (CoolComponent.js, OtherComponent.js).
- Files that are directly linked to a component such as utils, styles, and files to grab data should have the name of the component and then be namespaced with a period (e.g. MyButton.scss, MyButton.utils.js, MyButton.data.js).
- Non component related files should be lowercase and dash separated (some-file.js, some-other-file.js).
