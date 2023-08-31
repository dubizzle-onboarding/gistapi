import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
  auth: "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",
});

export const getPublicGists = () => octokit.gists.listPublic();

export const getGistForUser = (username) =>
  octokit.gists.listForUser({ username });
