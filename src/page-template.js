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

module.exports = generatePage;