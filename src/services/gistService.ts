import { Octokit } from "@octokit/rest";
const octokit = new Octokit()

/**
 * Gets the list of most recently updated Github Gists
 * @returns List of Gists
 */
export const getPublicGists = () => octokit.gists.listPublic()

/**
 * Gets the list of most recently updated Github Gists for the user
 * @param username Github user to get gists for
 * @returns List of Gists
 */
export const getGistForUser = (username: string) =>  octokit.gists.listForUser({ username });