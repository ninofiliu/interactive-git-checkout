#!/usr/bin/env node
const getBranches = require("./getBranches");
const promptTargetBranch = require("./promptTargetBranch");
const checkout = require("./checkout");
const promptNewBranchName = require("./promptNewBranchName");
const checkoutToNew = require("./checkoutToNew");

(async () => {
  try {
    const { branches, currentBranchIndex } = await getBranches();
    const targetBranch = await promptTargetBranch({
      branches,
      currentBranchIndex,
    });
    if (!targetBranch) process.exit(1);
    if (targetBranch === "New branch...") {
      const newBranchName = await promptNewBranchName();
      await checkoutToNew(newBranchName);
    } else {
      await checkout(targetBranch);
    }
  } catch (e) {
    console.log(`Uncaught error: ${e.message.trim()}`);
  }
})();
