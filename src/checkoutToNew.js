const { execFile: execFileCb } = require("child_process");
const { promisify } = require("util");

const execFile = promisify(execFileCb);

module.exports = async (newBranchName) => {
  const { stdout, stderr } = await execFile("git", [
    "checkout",
    "-b",
    newBranchName,
  ]);
  process.stderr.write(stderr);
  process.stdout.write(stdout);
};
