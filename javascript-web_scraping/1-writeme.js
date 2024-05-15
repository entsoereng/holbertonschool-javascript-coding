#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
const stringToWrite = process.argv[3];

fs.writeFile(filePath, stringToWrite, 'utf8', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('The file has been saved!');
    }
});
