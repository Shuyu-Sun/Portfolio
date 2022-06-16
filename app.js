const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [gitName, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(gitName, github), err => {
    if(err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});