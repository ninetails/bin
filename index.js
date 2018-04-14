#!/usr/bin/env node
const { prompt } = require('inquirer')

const questions = [
  {
    name: 'category',
    message: 'Choose a category',
    type: 'list',
    choices: [
      {
        name: 'Docker',
        value: 'docker'
      },
      {
        name: 'Github',
        value: 'github'
      }
    ]
  }
];

(async () => {
  const { category } = await prompt(questions)
  require(`./scripts/${category}`)()
})()
