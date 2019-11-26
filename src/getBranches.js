#!/usr/bin/env node
const { exec: execCb } = require('child_process');
const { promisify } = require('util');

const exec = promisify(execCb);

module.exports = async () => {
    const { stdout, stderr } = await exec('git branch', { encoding: 'utf8' });
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
