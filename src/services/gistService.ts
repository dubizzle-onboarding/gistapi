import { Octokit } from "@octokit/rest";
const octokit = new Octokit()

export const getPublicGists = () => octokit.gists.listPublic()

export const getGistForUser = (username: string) =>  octokit.gists.listForUser({ username });