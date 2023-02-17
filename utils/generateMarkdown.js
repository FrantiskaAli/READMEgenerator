// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Describtion
${data.describtion}
## Table of content
- [Installation](path)
- [Usage](path)
- [License](path)
- [Contributing](path)
- [Tests](path)
- [Questions](path)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributors}
## Tests
${data.tests}
## Questions

`;
}

module.exports = generateMarkdown;
