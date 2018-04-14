const { spawn } = require('child_process')
const { prompt, Separator } = require('inquirer')

const questions = [
  {
    name: 'script',
    message: 'Which script to run?',
    type: 'list',
    choices: [
      {
        name: 'Show running containers',
        value: 'docker ps'
      },
      {
        name: 'Show all containers',
        value: 'docker ps -a'
      },
      {
        name: 'Stop running containers',
        value: 'docker stop $(docker ps -q)'
      },
      {
        name: 'Kill running containers',
        value: 'docker kill $(docker ps -q)'
      },
      {
        name: 'Remove all containers',
        value: 'docker rm $(docker ps -a -q)'
      },
      new Separator(),
      {
        name: 'Show all images',
        value: 'docker images'
      },
      {
        name: 'Remove all images',
        value: 'docker rmi $(docker images -q)'
      },
      new Separator()
    ]
  }
];

module.exports = async () => {
  const { script } = await prompt(questions)
  if (/^(.*)\s\$\((.*)\)$/.test(script)) {
    const [head, ...tail] = RegExp.$1.split(' ')
    spawn(head, tail.concat([`$(${RegExp.$2})`]), {
      cwd: process.cwd(),
      detached: true,
      stdio: 'inherit'
    })
  } else {
    const [head, ...tail] = script.split(' ')
    spawn(head, tail, {
      cwd: process.cwd(),
      detached: true,
      stdio: 'inherit'
    })
  }
}
