import React from 'react';

function NoResult({message}) {
    return (
        <div className="no-result">
                <img src="no-result-img.png" alt="Github"/>
            {/* Display the provided message*/}
               <h5>{message}!</h5>
        </div>
    );
}

export default NoResult;