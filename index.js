const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {type:'input',
    message: 'Please, eneter title of your application',
    name:'title'},
    {type: 'input',
    message:'Describe your application',
    name:'describtion'},
    {type:'input',
    message: 'How to install your application?',
    name:'installation'},
    {type:'input',
    message: 'How to use your application?',
    name:'usage'}, 
    {type: 'list',
    message: 'Pick your license',
    choices: ['one','two', 'three'],
    default: 3,
    name:'license'},
    {type: 'input',
    message: 'Application Contributors',
    name: 'contributors'},//will need to create an array of all the contributors  separetelly
    {type: 'input',
    message: 'Tests done on this application so far',
    name:'tests'}

    //  , {'Questions'}
]
;

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer
.prompt(questions)
.then((answers) => {
  generateMarkdown(answers)
})
}

// function call to initialize program
init();
