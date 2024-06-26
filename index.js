#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (error, filenames) => {
    if (error) console.log('error:: ', error);
    
    const allStats = Array(filenames.length).fill(null);

    for (const filename of filenames) {
        const index = filenames.indexOf(filename);

        fs.lstat(filename, (err, stats) => {
            if (err) console.log(err)
            allStats[index] = stats;

            const ready = allStats.every((stats) => stats);
            if (ready) {
                allStats.forEach((stats, index) => {
                    console.log(filenames[index], stats.isFile())
                })
            }
        })
    }
});