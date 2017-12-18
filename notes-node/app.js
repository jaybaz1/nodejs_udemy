console.log('Starting app.js');

// Internal Modules
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Test'));

var filteredArray = _.uniq(['Baz', 1, 'Baz', 1, 2, 3]);
console.log(filteredArray);

//var add = notes.add(5, 10);
//console.log(add);

//var user = os.userInfo();

// fs.appendFile now throws errors use appendFileSync instead
// Use template string to easily add string and object data
//fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`);