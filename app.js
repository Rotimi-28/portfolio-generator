const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [Rotimi, Rotimihub] = profileDataArgs;

/*const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);*/

//const generatePage = () => 'Name: Jane, Github: janehub'
//console.log(generatePage());

//console.log(generatePage('Jane', 'Janehub'));


const generatePage = (Rotimi, Rotimihub) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
   <h1>${Rotimi}</h1>
    <h2><a href="https;//github.com/"${Rotimihub}>Github</a></h2>
  </body>
  </html>
   ;`
};

fs.writeFile('index.html', generatePage(Rotimi, Rotimihub), err => {
  if (err) throw new error(err);
  
  console.log('portifilio complete! check out index.html to see the output')
});