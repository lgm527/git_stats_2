import React from 'react';

function Back(props) {
    console.log(props.user);
    const { bio, blog, location, public_gists, public_repos } = props.user;
    return (
      <div className="Back">
          <p>{bio}</p>
          <a href={blog}>{blog}</a>
          <p>Coding in <i>{location}</i></p>
          <p>Repos ............................ {public_repos}</p>
          <p>Gists ................................. {public_gists}</p>
      </div>
    );
}

export default Back;