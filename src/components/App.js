import React, { useState, useEffect } from 'react';
import '../assets/App.css';
import Card from './Card';

function App() {

  // fetch loading status
  const [isLoaded, setIsLoaded] = useState(false);
  // fetch catch errors
  const [error, setError] = useState(null);
  // save fetched data
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //     fetch(`https://api.github.com/users/${user}`, {
  //         method: 'GET',
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Accept": "application/vnd.github.v3+json",
  //           "User-Agent": "lgm527",
  //           "Authorization": "token " + process.env.REACT_APP_GH_TOKEN,
  //         }
  //     })
  //     .then(res => res.json())
  //     .then((user) => {
  //         setIsLoaded(true);
  //         setUser(user);
  //     },
  //     (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //     })
  // }, [])

  // if (error) {
  //     return <div>Error: {error.message}</div>
  // } else if (!isLoaded) {
  //     return <div>Loading...</div>
  // } else { ...return statement }

  return (
    <div className="App">
      
      <form>
            <label htmlFor='user'>User: </label>
            <input type='text' name='user' id='user' />
            <input type='submit' value='Submit' />
      </form>
      
      {/* <Card /> */}
    </div>
  );
}

export default App;
