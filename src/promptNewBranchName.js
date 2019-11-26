const prompts = require('prompts');

module.exports = async () => {
    const { newBranchName } = await prompts({
        type: 'text',
        name: 'newBranchName',
        message: 'New branch name:',
    });
    if (!newBranchName) {
        console.log('No branch specified, exiting...');
        process.exit(0);
    }
    return newBranchName;
};
