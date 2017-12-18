console.log('Starting App');

const fs = require('fs');
const os = require('os');


var user = os.userInfo();

fs.appendFileSync('greeting.txt', 'Hello ' + user.username);