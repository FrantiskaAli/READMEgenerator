
const licences = {
  'Apache License 2.0' : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'GNU General Public License v3.0':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'MIT License': '[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' ,
  'BSD 2-Clause "Simplified" License' : '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)' ,
  'BSD 3-Clause "New" or "Revised" License': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' ,
  'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  'Creative Commons Zero v1.0 Universal':'[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]',
  'Eclipse Public License 2.0':'[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)' ,
  'GNU Affero General Public License v3.0': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
  'GNU General Public License v2.0': '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
  'Mozilla Public License 2.0':'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'The Unlicense':'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  };
// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} ${licences[data.license]}
## Describtion
${data.describtion}
## Table of content
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributions](#Contributions)
- [Tests](#Tests)
- [Questions](#Questions)
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
If you have any more questions for the project you can alwasy contact me on my [email](mailto:${data.email}).
[HERE](https://github.com/${data.github}) is lint to my github account. 
`;
}

module.exports = { licences, generateMarkdown };

