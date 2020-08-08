import React, { useState } from 'react';
import '../assets/App.css';
import Card from './Card';

function App() {

    // username input default blank
    const [username, setUsername] = useState('');
  
    // controlled form
    const handleUsernameChange = (e) => setUsername(e.target.value);

    // fetch loading status
    const [isLoaded, setIsLoaded] = useState(false);
    // fetch catch errors
    const [error, setError] = useState(null);
    // save fetched data
    const [user, setUser] = useState([]);

    const fetchUser = () => {
      fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/vnd.github.v3+json"
        }
      })
      .then(res => {
        if(!res.ok) {
          setIsLoaded(true);
          setError(res.statusText);
        }
        return res.json()
      })
      .then((user) => {
          setIsLoaded(true);
          setUser(user);
          setUsername('');
      })
      // .catch(error => {
      //   setIsLoaded(true);
      //   setError(error);
      // })
    }

    const clearUser = () => {
      setUsername('');
      setIsLoaded(false);
      setError(null);
      setUser([]);
    }

  return (
    <div className="App">
      <h2>Git Stats { isLoaded ? `... ${user.login}` : null } </h2>
      <p>Please type in a GitHub username and the statistics will appear below</p>
      <form>
            <input 
              type='text'
              name='username'
              id='username'
              placeholder='username'
              autoComplete='off'
              value={username}
              onChange={handleUsernameChange}
            />
            <input type='button' value='Swing' onClick={fetchUser} />
      </form>
      <button onClick={clearUser} >clear</button>
      { isLoaded && error === null ? <Card user={user} /> : null }
      { error !== null ?
       <React.Fragment>
         <p>{error}</p>
       </React.Fragment>
       :
       null }
    </div>
  );
}

export default App;