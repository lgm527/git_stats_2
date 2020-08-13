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


    return (
      <div className="Back">
          <h6 className='subtitle' id='name'>{name}</h6>
          <h6 className='subtitle' id='bio'>{bio}</h6>
          <a href={html_url} target='_blank' rel='noopener noreferrer'>GITHUB</a>
          { blog ? ' | ' : null }
          { blog ? <a href={blog} target='_blank' rel='noopener noreferrer'>BLOG</a> : null }
          { location ? <p>CODING IN <i>{location}</i></p> : null }
          <table>
            <tbody>
            <tr>
              <th>REPOS</th>
              <td>{public_repos}</td>
            </tr>
            <tr>
              <th>GISTS</th>
              <td>{public_gists}</td>
            </tr>
            <tr>
              <th>DAYS</th>
              <td>{dayCount()}</td>
            </tr>
            </tbody>
          </table>
          {/* <p><b className='stats'>REPOS</b> <b className='number'>{public_repos}</b></p>
          <p><b className='stats'>GISTS</b> <b className='number'>{public_gists}</b></p>
          <p><b className='stats'>DAYS</b> <b className='number'>{dayCount()}</b></p> */}
      </div>
    );
}

export default Back;