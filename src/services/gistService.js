// Imported the Octokit library to work with GitHub API
import { Octokit } from '@octokit/rest';
// Created a new instance of Octokit
const octokit = new Octokit();

// Function to fetch gists based on a username or get public gists if no username is provided
export const getGists = async (username = '') => {
    // Check if a username is provided
    if (username !== '') {
        // Fetch gists for a specific user using the provided username
        const response = await octokit.gists.listForUser({ username });
        return response.data; // Return the list of gists for the user
    } else {
        // If no username is provided, fetch public gists
        const response = await octokit.gists.listPublic();
        return response.data; // Return the list of public gists
    }
};