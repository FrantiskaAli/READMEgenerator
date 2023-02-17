const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const extras = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
  {type: 'input',
  message: 'Please enter your email',
  name: 'email'
  },
  {type: 'input',
  message: 'Your github name',
  name:'github',
  },
  {type:'input',
  message: 'Please, eneter title of your application',
  name:'title'},
  {type: 'input',
  message:'Describe your application',
  name:'description'},
  {type:'input',
  message: 'How to install your application?',
  name:'installation'},
  {type:'input',
  message: 'How to use your application?',
  name:'usage'}, 
  {type: 'list',
  loop: false,
  message: 'Pick your license',
  choices: Object.keys(extras.licences),
  default: 3,
  name:'license'},
  {type: 'input',
  message: 'Application Contributors',
  name: 'contributors'},//will need to create an array of all the contributors  separetelly
  {type: 'input',
  message: 'Tests done on this application so far',
  name:'tests'}];
// function to initialize program
function init() {
inquirer
.prompt(questions)
.then((answers) => {
 const myReadMe = extras.generateMarkdown(answers);
 fs.writeFile('README.md', myReadMe, err => err ? console.error(err) : console.log('Well done, your readme is ready!') )
})
}
// function call to initialize program
init();
