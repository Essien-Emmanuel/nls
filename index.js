#!/usr/bin/env node

const fs = require('fs');

// Method #2
// const util = require('util');
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
            console.log(filenames[index], stats.isFile())
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