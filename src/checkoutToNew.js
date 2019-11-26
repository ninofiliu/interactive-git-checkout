const { exec: execCb } = require('child_process');
const { promisify } = require('util');

const exec = promisify(execCb);

module.exports = async (newBranchName) => {
    const { stdout, stderr } = await exec(`git checkout -b ${newBranchName}`);
    process.stderr.write(stderr);
    process.stdout.write(stdout);
};
