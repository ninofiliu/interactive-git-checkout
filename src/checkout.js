const { execFile: execFileCb } = require('child_process');
const { promisify } = require('util');

const execFile = promisify(execFileCb);

module.exports = async (targetBranch) => {
    const { stdout, stderr } = await execFile('git', ['checkout', targetBranch]);
    process.stderr.write(stderr);
    process.stdout.write(stdout);
};
