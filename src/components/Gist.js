import React from 'react';

const Gist = ({ data }) => (
  <div>
    <div className="top-bar">
      <div>{data.owner.login}</div>
    </div>
  </div>
);

export default Gist;
