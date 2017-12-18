console.log('Starting App');

// Internal Modules
const fs = require('fs');
const os = require('os');


var user = os.userInfo();

// fs.appendFile now throws errors use appendFileSync instead
// Use template string to easily add string and object data
fs.appendFileSync('greeting.txt', `Hello ${user.username}!`);