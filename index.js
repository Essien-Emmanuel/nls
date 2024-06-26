#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const colors = require('colors/safe');

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (error, filenames) => {
    if (error) console.log('error:: ', error);

    const statPromises = filenames.map(filename => lstat(filename));
    try {
        const allStats = await Promise.all(statPromises);
        for (const stats of allStats) {
            const index = allStats.indexOf(stats)

            if (!stats.isFile()) {
                console.log(colors.bold(filenames[index]))
            } else {
                console.log(filenames[index])
            }
        }
    } catch (err) {
        console.log(err)
    }
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