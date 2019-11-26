const { exec: execCb } = require('child_process');
const { promisify } = require('util');

const exec = promisify(execCb);

module.exports = async (targetBranch) => {
    const { stdout, stderr } = await exec(`git checkout ${targetBranch}`);
    process.stderr.write(stderr);
    process.stdout.write(stdout);
};
