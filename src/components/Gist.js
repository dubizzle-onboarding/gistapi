import React from 'react';

function Gist({ gist }) {
    return (
        <div>
            <div className="user-wrap">
                <div className="user-info">
                    <div className="name-img">

                        {/* Displaying the owner's avatar */}
                        <img src={gist.owner.avatar_url} alt={gist.owner.login}/>

                        {/* Displaying the owner's login username */}
                        <h4 className="name">{gist.owner.login}</h4>
                    </div>
                    <div className="right-side-info">

                        {/* Displaying the number of files in the gist */}
                        <span><i className="fa fa-angle-left "></i><i className="fa fa-angle-right "></i> {Object.keys(gist.files).length} {Object.keys(gist.files).length > 1 ? 'Files':'File'} </span>

                        {/* Link to view forks of the gist */}
                        <a href={gist.forks_url} target="_blank" rel="noreferrer"><i className="fa fa-code-fork "></i> Forks</a>

                        {/* Link to view comments on the gist */}
                        <a href={gist.comments_url} target="_blank" rel="noreferrer"><i className="fa fa-comment-o"></i> Comments</a>

                        {/* Link to view stars on the gist */}
                        <a href={gist.owner.starred_url} target="_blank" rel="noreferrer"><i className="fa fa-star"></i> Stars</a>
                    </div>
                </div>
                <div className="dates">

                    {/* Displaying the creation date of the gist */}
                    <p>Created at: {new Date(gist.created_at).toLocaleDateString()}</p>

                    {/* Displaying the last update date of the gist */}
                    <p>Last Updated at: {new Date(gist.updated_at).toLocaleDateString()}</p>
                </div>

                {/* Displaying the gist description or "No description" if it's empty */}
                <h3 className="description">{gist.description || 'No description'}</h3>

                {/* Mapping through and displaying each file in the gist */}
                <div className="files">
                    {Object.keys(gist.files).map((fileName, index) => (
                        <div key={index}>
                            <i className="fa fa-file-text-o"></i>
                            <span>{fileName}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default Gist;
