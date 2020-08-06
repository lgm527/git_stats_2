import React from 'react';
import '../assets/Back.css';

function Back(props) {
    const { bio, blog, location, public_gists, public_repos, html_url, name, created_at } = props.user;

    const dayCount = () => {
      const oneDay = 24 * 60 * 60 * 1000;
      const since = new Date(created_at);
      const now = new Date();
      const days = Math.round(Math.abs((since - now) / oneDay));
      return days;
    }

    console.log(props.user);

    return (
      <div className="Back">
          <h6>{name}</h6>
          <a href={html_url}>GitHub</a>
          <p>{bio}</p>
          { blog ? <a href={blog}>Blog</a> : null }
          { location ? <p>Coding in <i>{location}</i></p> : null }
          <p>Repos ............................ {public_repos}</p>
          <p>Gists ................................. {public_gists}</p>
          <p>Days .............................. {dayCount()}</p>
      </div>
    );
}

export default Back;