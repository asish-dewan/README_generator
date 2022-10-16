
// Function to generate README 
const generateREADME (data) {
    return `
    # ${data.title}
    https://github.com/${data.username}/${data.title}

    # Description
    ${data.description}

    # Table of Contents

    * [Installation] (#installation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contributing] (#contributing)
    * [Tests] (#tests)
    * [Questions] (#questions)
    
    # Installation

    The following dependencies are required to be installed to run the application.
    ${data.dependencies}

    # Usage
    ${data.usage}

    # License 
    This project is licensed under the ${data.license} license.
    
    # Contributing 
    Contributors: ${data.contributing}

    # Tests 
    Contributors: ${data.tests}

    `
} 

module.exports = generateREADME;