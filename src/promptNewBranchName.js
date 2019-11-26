const prompts = require('prompts');

module.exports = async () => {
    const { newBranchName } = await prompts({
        type: 'text',
        name: 'newBranchName',
        message: 'New branch name:',
    });
    return newBranchName;
};
