const prompts = require('prompts');

module.exports = async ({ branches, currentBranchIndex }) => {
    const { targetBranch } = await prompts({
        type: 'select',
        message: 'Select branch to checkout to',
        name: 'targetBranch',
        choices: [...branches, 'New branch...'].map((branch) => ({
            title: branch,
            value: branch,
        })),
        initial: currentBranchIndex,
    });
    if (!targetBranch) {
        console.log('No branch specified, exiting...');
        process.exit(0);
    }
    return targetBranch;
};
