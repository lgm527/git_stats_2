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
          "Accept": "application/vnd.github.v3+json",
          "User-Agent": "lgm527",
          "Authorization": "token " + process.env.REACT_APP_GH_TOKEN,
        }
      })
      .then(res => res.json())
      .then((user) => {
          setIsLoaded(true);
          setUser(user);
          console.log(user);
      })
      .catch(error => {
          setIsLoaded(true);
          setError(error);
      })
    }

  return (
    <div className="App">
      
      <form>
            <label htmlFor='user'>User: </label>
            <input 
              type='text'
              name='username'
              id='username'
              value={username}
              onChange={handleUsernameChange}
            />
            <input type='button' value='Swing' onClick={fetchUser} />
      </form>
      
      {/* <Card /> */}
    </div>
  );
}

export default App;