const { spawn } = require('child_process')
const { prompt } = require('inquirer')

const url = 'https://api.github.com/user/repos'

const questions = [
  {
    name: 'user',
    message: 'Username:',
    type: 'input',
    validate: input => !!input
  },
  {
    name: 'repo',
    message: 'Repository name:',
    type: 'input',
    validate: input => !!input
  }
];

module.exports = async () => {
  const { user, repo } = await prompt(questions)
  spawn('curl', ['-u', user, url, '-d', `{"name":"${repo}"}`], {
    cwd: process.cwd(),
    detached: true,
    stdio: 'inherit'
  })
}
