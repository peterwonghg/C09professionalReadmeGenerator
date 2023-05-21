

# Professional README Generator

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Table of Contents:
### - [Description](#description)
### - [Usage](#usage)
### - [Video Demo](#video)
### - [Screenshot Demo](#screenshot)
### - [License](#license)
### - [Contributing](#contributing)
### - [Tests](#tests)
### - [Questions](#questions)
### - [References](#references)

## Description
AS A developer<br>I WANT a README generator<br>SO THAT I can quickly create a professional README for a new project<br><br>GIVEN a command-line application that accepts user input<br>WHEN I am prompted for information about my application repository<br>THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions<br>WHEN I enter my project title<br>THEN this is displayed as the title of the README<br>WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions<br>THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests<br>WHEN I choose a license for my application from a list of options<br>THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under<br>WHEN I enter my GitHub username<br>THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile<br>WHEN I enter my email address<br>THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions<br>WHEN I click on the links in the Table of Contents<br>THEN I am taken to the corresponding section of the README

## Installation
Install the Dev folder and run index.js in the integrated terminal

## Usage
This Professional README Generator uses the Node.js file system (fs) module to work with the file system in the computer and the Inquirer NPM package to provide a way to capture inputs in Node.js from the integrated terminal by prompting questions and returning the answers given by the user.<br><br>It also enables the user to embed a remotely hosted video, attach images and link web references or attributes into the README documentation.

## Demo Video
[![Demo Video](./assets/images/play.png)](https://drive.google.com/file/d/1mV_kzpNNImPDRs28S44fep25VbPYj1Bz/view)

## Demo Screenshot
![Demo Screenshot](./assets/images/screenshot.png)

## License
Three license choices namely MIT, Apache 2.0 and GNU GPL v3 are made available and a foourth choice with None if the user prefer not to make a choice of the available license choices<br><br>When a license type is chosen a badge will be included below the title, when none is chosen, line below the title will be empty.
- MIT

## Contributing
Thank you for investing your time in contributing to Professional README Generator project!<br><br>In this guide you will get an overview of the contribution workflow from creating a pull request, reviewing and merging the pull request.<br><br><b>Making the changes locally</b><br>1. Fork the repository<br>2. Install or update Node.js 8.2.4<br>3. Create a working branch and start with your changes!<br><br><b>Commit your update</b><br>Commit the changes once you are happy with them.  Don't forget to self-review to speed up the review process.<br><br><b>Pull Request</b><br>When you are finished with the changes, create a pull request<br><br><b>Merging your Pull Request</b><br>1. Our team will review your Pull Request.<br>2. We may ask for changes to be made before your Pull Request can be merged.<br>3. You can apply suggested changes directly through the UI.  You can make any other changes on your fork, then commit them on your branch.<br>4. As you update your PR and apply changes, mark each conversation as resolved.<br>5. You can then merge your contributions.<br><br>Thank you for your contribution.

## Tests
Challenge09 Readme is tested and generated using this Profesisonal README Generator, the original readme test file is named sampleREADME.mdto prevent it being overwritten by a new user.<br><br>Testing is carried out with the following sequence:<br>1. blank input to test validation prompt (Only title blank input will be tested)<br>2. Input title<br>3. Input description<br>4. Input installation<br>5. Input usage<br>6. Input video link<br>7. Input image link<br>8. Choose license<br>9. Input contributing guidelines<br>10. Input testing procedures<br>11. Input github username<br>12. Input email address<br>13. Input References

## Questions
If you have any questions, please contact me:
- GitHub: [peterwonghg](https://github.com/peterwonghg)
- Email: peterwonghg@gmail.com

## References
Creating a Professional README Generator – Sam Meske<br>https://www.youtube.com/watch?v=xMoAZVIiGT0<br><br>README.md Generator with Node.js and inquirer<br>https://www.youtube.com/watch?v=SpFyvDPdcO0<br><br>How to embed a video inro GitHub README.ms?<br>https://stackoverflow.com/questions/4279611/how-to-embed-a-video-into-github-readme-md<br><br>npm inquirer.js Documentation<br>https://www.npmjs.com/package/inquirer#prompt<br><br>Welcome to GitHub docs contributing guide<br>https://github.com/github/docs/blob/main/CONTRIBUTING.md

