// let firstName = 'Victor';
function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return(name);
}

let firstName = getName("What's your first name?\n");
let lastName = getName("What's your last name?\n");
console.log(`Good morning, ${firstName} ${lastName}.`);
console.log(`Good afternoon, ${firstName} ${lastName}.`);
console.log(`Good evening, ${firstName} ${lastName}.`);