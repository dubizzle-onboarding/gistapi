import React, { useCallback, useEffect, useRef, useState } from 'react'
import { IGist } from '../interfaces/IGist';
import { getGistForUser, getPublicGists } from '../services/gistService'
import Gist from './Gist';
import styled from 'styled-components'
import _ from 'lodash';
import ErrorMessage from './ErrorMessage';

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

const GistList = ({search}: {search: string}) => {

    let [publicGists, setPublicGists] = useState<IGist[]>([]);
    let [error, setError] = useState<any>({});

    const fetchPublicGists = async (searchQuery: string) => {
        let publicGistsResponse: any = {};
        try {
            publicGistsResponse = searchQuery === ""? await getPublicGists() : await getGistForUser(searchQuery);
        } catch (error) {
            setError(error)
        }

        if (publicGistsResponse.status !== 200) {
            return <>Error</>
        }

        const gists = mapGistData(publicGistsResponse)

        setPublicGists(gists);
        setError({});
    };

    const debouncedFetch = useCallback(
		_.debounce((search) => fetchPublicGists(search), 300),
		[], // will be created only once initially
	);
    

    useEffect(() => {
        debouncedFetch(search);
    }, [search])

    return <Container>
        {error.status !== 200 ? <ErrorMessage error={error}/> :  publicGists.map(gist => <Gist gist={gist} key={gist.id} />)}
    </Container>;
}

export default GistList
