#!/usr/bin/env node

const fs = require('fs');

// Method #2
// const util = require('util');
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

fs.readdir(process.cwd(), (error, filenames) => {
    if (error) console.log('error:: ', error);
});

// Method #1
// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stat) => {
//             if (err) reject(err);
//             resolve(stat);
//         });
//     });
// }