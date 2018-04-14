#!/usr/bin/env node
const { prompt } = require('inquirer')

const questions = [
  {
    name: 'script',
    message: 'What script to run?',
    type: 'list',
    choices: [
      {
        name: 'Create a github repository',
        value: 'create-github-repo'
      }
    ]
  }
];

(async () => {
  const { script } = await prompt(questions)
  require(`./scripts/${script}`)()
})()
