#!/usr/bin/env node

const fs = require('fs');
const colors = require('colors/safe');
const path = require('path');

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (error, filenames) => {
    if (error) console.log('error:: ', error);

    const statPromises = filenames.map(filename => lstat(path.join(targetDir, filename)));
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
