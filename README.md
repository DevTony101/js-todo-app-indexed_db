# TO-DO IndexedDB Web App

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/DevTony101/js-todo-app-indexed_db/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1955bdc7-8239-4b5e-ac30-b817283b057e/deploy-status)](https://app.netlify.com/sites/indexed-todo-app/deploys)

![banner](https://github.com/DevTony101/js-todo-app-indexed_db/blob/master/banner.png)

This a sample project, product of a series of tutorials made by myself on **DEV**. The aim is to teach/learn the basics of the IndexedDB API, specifically:

- Learn about the concepts of transactions, requests, object stores
- Learn how to perform **CRUD** operations in the IndexedDB instance

You can read the blog [here](https://dev.to/devtony101/javascript-building-a-to-do-app-with-the-indexeddb-api-part-1-4382).

## Features

- **Create a task**: You can create a brand new task with a given title and description. Later that task is saved using JavaScript IndexedDB API.
- **Show saved tasks**: Everytime the page loads it will query the indexed database to get all saved tasks and display them as panels at the bottom of the page.
- **Edit a task**: You can edit any given task at any given moment.
- **Toggle the "done" status of a task**: You can toggle whether a task is "done" via either a checkbox or while editing the task.

## Want to code along?
Here are the starting and finished code templates for each part of the tutorial series.

| Part                                       |                                                                                                           |                                                                                                           |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| First Part (Creating the `persist` function) | [Starting Code](https://github.com/DevTony101/js-todo-app-indexed_db/releases/tag/starter-code-part-one)  | [Finished Code](https://github.com/DevTony101/js-todo-app-indexed_db/releases/tag/finished-code-part-one) |
| Second Part (Creating the `getOpenCursor` function) | [Starting Code](https://github.com/DevTony101/js-todo-app-indexed_db/releases/tag/starting-code-part-two) | [Finished Code](https://github.com/DevTony101/js-todo-app-indexed_db/releases/tag/finished-code-part-two) |
| Third Part (Creating the `delete` function) | [Starting Code](https://github.com/DevTony101/js-todo-app-indexed_db/releases/tag/starting-code-part-three) | [Finished Code](https://github.com/DevTony101/js-todo-app-indexed_db/releases/tag/finished-code-part-three) |

Once you download the code, execute the following commands.

To install all the dependencies:
```
npm install
```

To start the local development server:
```
npm run start   
```

## How to contribute?
Please refer to the [contributing guide](https://github.com/DevTony101/js-todo-app-indexed_db/blob/master/CONTRIBUTING.md).
