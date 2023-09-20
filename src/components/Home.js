import React, { useEffect, useState } from 'react';
import Header from './Header';
import GistList from './GistList';
import { getGists } from '../services/gistService';

function Home() {
    // Define state variables
    const [username, setUsername] = useState(''); // Stores the username input
    const [gists, setGists] = useState([]); // Stores the list of gists
    const [isLoading, setIsLoading] = useState(true); // Indicates if data is being fetched
    const [message, setMessage] = useState(''); // Stores a message (e.g., error message or "Not Found")

    // Used useEffect to fetch gists based on the username
    useEffect(() => {
        // Called getGists function with the current username
        getGists(username)
            .then((data) => {
                setIsLoading(false); // Data fetching is complete
                setGists(data); // Set the fetched gists
                data.length === 0 && setMessage('Not Found'); // Set a "Not Found" message if no gists are found
            })
            .catch((error) => {
                setMessage(error.message); // Set an error message if there's an issue with fetching
            });
    }, [username]); // Trigger this effect whenever the username changes

    return (
        <div>
            {/* Render the Header component and pass a function to handle username input */}
            <Header onSearch={(newUsername) => setUsername(newUsername)} />

            <div className="container">
                {/* Render the GistList component and pass gists, isLoading, and message as props */}
                <GistList gists={gists} isLoading={isLoading} message={message} />
            </div>
        </div>
    );
}

export default Home;
