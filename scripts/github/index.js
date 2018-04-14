const { prompt } = require('inquirer')

const questions = [
  {
    name: 'script',
    message: 'Which script to run?',
    type: 'list',
    choices: [
      {
        name: 'Create a github repository',
        value: 'create-github-repo'
      }
    ]
  }
];

module.exports = async () => {
  const { script } = await prompt(questions)
  require(`./${script}`)()
}
