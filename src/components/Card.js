import React, { useState, useEffect } from 'react';
import '../assets/Card.css';
import Front from './Front';
import Back from './Back';

function Card() {
  // flip card view on click
  const [front, setFront] = useState(true);
  // fetch loading status
  const [isLoaded, setIsLoaded] = useState(false);
  // fetch catch errors
  const [error, setError] = useState(null);
  // save fetched data
  const [user, setUser] = useState([]);

  useEffect(() => {
      fetch('https://api.github.com/users/lgm527', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "lgm527",
            "Authorization": "token " + process.env.REACT_APP_GH_TOKEN,
          }
      })
      .then(res => res.json())
      .then((user) => {
          setIsLoaded(true);
          setUser(user);
      },
      (error) => {
          setIsLoaded(true);
          setError(error);
      })
  }, [])

  if (error) {
      return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
      return <div>Loading...</div>
  } else {
    return (
        <div className='Card' onClick={() => {front ? setFront(false) : setFront(true)}}>
            {front ? <Front user={user} /> : <Back user={user}/>}
        </div>
      );
  }
}

export default Card;