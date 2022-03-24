/*const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
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


const generatePage = (Jane, janehub) => {
  return `
  
   Name: ${Jane}
   GitHub: ${janehub};`
};