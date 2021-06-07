import React, { useCallback, useEffect, useRef, useState } from 'react'
import { IGist } from '../interfaces/IGist';
import { getGistForUser, getPublicGists } from '../services/gistService'
import Gist from './Gist';
import styled from 'styled-components'
import _ from 'lodash';
import ErrorMessage from './ErrorMessage';

/**
 * Bootstrap like container
 */
const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
`

/**
 * Convert from OctokitResponse to IGist interface since OctokitResponse type is not exposed
 * @param gistResponse Gist response from Octokit
 * @returns List of IGist
 */
const mapGistData = (gistResponse: any) => {
    return gistResponse.data.map((gistData: any) => {
        const gist: IGist = {
            comments: gistData.comments,
            comments_url: gistData.comments_url,
            commits_url: gistData.commits_url,
            created_at: gistData.created_at,
            description: gistData.description,
            files: gistData.files,
            forks_url: gistData.forks_url,
            git_pull_url: gistData.git_pull_url,
            git_push_url: gistData.git_push_url,
            html_url: gistData.html_url,
            id: gistData.id,
            node_id: gistData.node_id,
            owner: gistData.owner,
            public: gistData.public,
            truncated: gistData.truncated,
            updated_at: gistData.updated_at,
            url: gistData.url,
            user: gistData.user,
        }

        return gist;
    });
}

/**
 * Gist List component. Shows the list of gists from Octokit
 * @param props Props to get the current search term 
 * @returns React component
 */
const GistList = ({search}: {search: string}) => {
    let [publicGists, setPublicGists] = useState<IGist[]>([]);
    let [error, setError] = useState<any>({});

    const fetchPublicGists = async (searchQuery: string) => {
        let publicGistsResponse: any = {};
        try {
            publicGistsResponse = searchQuery === ""? await getPublicGists() : await getGistForUser(searchQuery);

            // If not OK response and if no gists exist for the user
            if (publicGistsResponse.status !== 200 || publicGistsResponse.data.length === 0) {
                setError({status: 204});
                return;
            }
    
            const gists = mapGistData(publicGistsResponse)
    
            setPublicGists(gists);
            setError({}); // Clear error
        } catch (error) {
            setError(error);
        }
    };

    // Debounce fetch to reduce API calls
    const debouncedFetch = useCallback(
		_.debounce((search) => fetchPublicGists(search), 300),
		[], // will be created only once initially
	);

    useEffect(() => {
        debouncedFetch(search);
    }, [search])

    return <Container>
        {(error.status && error.status !== 200) ? <ErrorMessage error={error} query={search} /> :  publicGists.map(gist => <Gist gist={gist} key={gist.id} />)}
    </Container>;
}

export default GistList
