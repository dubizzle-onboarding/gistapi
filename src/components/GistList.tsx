import React, { useEffect, useState } from 'react'
import { IGist } from '../interfaces/IGist';
import { getPublicGists } from '../services/gistService'
import Gist from './Gist';
import styled from 'styled-components'
import _ from 'lodash';

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

const GistList: React.FC = () => {

    let [publicGists, setPublicGists] = useState<IGist[]>([]);

    const fetchPublicGists = async () => {
        const publicGistsResponse = await getPublicGists();

        if (publicGistsResponse.status !== 200) {
            return <>Error</>
        }

        const gists = publicGistsResponse.data.map((gistData) => {
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

        setPublicGists(gists);
    };

    useEffect(() => {
        fetchPublicGists();
    }, [])

    return <Container>
        {publicGists
            // .filter(o => o.owner?.id === 25447658)
            .map(gist => <Gist gist={gist} key={gist.id} />)}
    </Container>;
}

export default GistList
