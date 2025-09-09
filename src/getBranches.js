#!/usr/bin/env node
const { execFile: execFileCb } = require('child_process');
const { promisify } = require('util');

const execFile = promisify(execFileCb);

module.exports = async () => {
    const { stdout, stderr } = await execFile('git', ['branch'], { encoding: 'utf8' });
    if (stderr !== '') {
        throw new Error(`Error while running "git branch": ${stderr}`);
    }
    const branches = [];
    let currentBranchIndex;
    const branchLines = stdout.trimEnd().split('\n');
    branchLines.forEach((branchLine, index) => {
        if (branchLine.startsWith('*')) currentBranchIndex = index;
        branches.push(branchLine.substring(2));
    });
    return { branches, currentBranchIndex };
};
