#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (error, filenames) => {
    if (error) console.log('error:: ', error);
    
    // Bad code
    for (const filename of filenames) {
        fs.lstat(filename, (err, stats) => {
            console.log(filename,  stats.isFile())
        })
    }
});