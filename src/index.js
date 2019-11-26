// #!/usr/bin/env node
const getBranches = require('./getBranches');
const promptTargetBranch = require('./promptTargetBranch');
const checkout = require('./checkout');

(async () => {
    try {
        const { branches, currentBranchIndex } = await getBranches();
        const targetBranch = await promptTargetBranch({ branches, currentBranchIndex });
        if (!targetBranch) process.exit(1);
        await checkout(targetBranch);
    } catch (e) {
        console.log(`Uncaught error: ${e.message.trim()}`);
    }
})();
