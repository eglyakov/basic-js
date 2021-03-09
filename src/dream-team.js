const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let arrShortName = []
  for(let i = 0; i < members.length; i++) {
    if (typeof members[i] != 'string') continue;

    let firstLetter = members[i].trim().split('');
    arrShortName.push(firstLetter[0].toUpperCase())  
  }

  return arrShortName.sort().join('');
};
