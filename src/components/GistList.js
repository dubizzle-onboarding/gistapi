import React from 'react';
import Gist from './Gist';
import NoResult from './NoResult';

function GistList({ gists, isLoading, message }) {
    return (
        <div>
            {isLoading ? (
                // Display a loading spinner while data is being fetched
                <p className="loader"><i className="fa fa-circle-o-notch fa-spin"></i></p>
            ) : (
                gists && gists.length > 0 ? (
                    // Display gists if there are any
                    gists.map((gist) => (
                        <Gist key={gist.id} gist={gist} />
                    ))
                ) : (
                    // Display a "No Result" message when there are no gists
                    <NoResult message={message} />
                )
            )}
        </div>
    );
}

export default GistList;
