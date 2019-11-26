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
    return targetBranch;
};
