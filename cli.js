const {exec: execCb} = require('child_process');
const {promisify} = require('util');
const prompts = require('prompts');
const exec = promisify(execCb);

(async () => {
    const {branches, currenBranchIndex} = await getBranches();
    const targetBranch = await promptTargetBranch();

    async function getBranches() {
        const {stdout, stderr} = await exec('git branch', {encoding: 'utf8'});
        if (stderr!='') {
            throw new Error(`Error while running "git branch": ${stderr}`);
        }
        const branches = [];
        let currentBranchIndex;
        const branchLines = stdout.trim().split('\n');
        branchLines.forEach((branchLine, index) => {
            if (branchLine.startsWith('*')) currentBranchIndex = index;
            branches.push(branchLine.substring(2));
        });
        return {branches, currentBranchIndex};
    }

    async function promptTargetBranch() {
        const {branch} = await prompts({
            type: 'select',
            message: 'Select branch to checkout to',
            name: 'branch',
            choices: branches.map((branch) => ({
                title: branch,
                value: branch,
            })),
            initial: currenBranchIndex,
        });
        return branch;
    }
})();
