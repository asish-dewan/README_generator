
// Function to generate README 
function generateREADME (data) {
    return `
    ## ${data.title}
    https://github.com/${data.username}/${data.title}

    ## Description
    ${data.description}

    ## Table of Contents

    * [Installation] (#installation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contributing] (#contributing)
    * [Tests] (#tests)
    * [Questions] (#questions)
    
    ## Installation

    The following dependencies are required to be installed to run the application.
    ${data.dependencies}

    ## Usage
    ${data.usage}

    ## License 
    This project is licensed under the ${data.license} license.
    
    ## Contributing 
    ${data.contribution}

    ## Tests 
    Contributors: ${data.tests}

    ## Contact Me 
    
    If you have any questions, please feel free to reach out to me on:

    Email: ${data.email}
    Github: ${data.username}

    `
} 

module.exports = generateREADME;