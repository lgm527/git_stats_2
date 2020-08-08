import React, { useState } from 'react';
import '../assets/App.css';
import Card from './Card';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Form, Button } from 'react-bulma-components';
import laptop from '../Laptop/Laptop-01.svg';

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

  const { Input, Field, Control } = Form;

  return (
    <div className="App">
      <h2 id='title'>Git Stats { isLoaded ? `... ${user.login}` : null } </h2>
      <p id='instructions'>Please type in a GitHub username and the statistics will appear below</p>
      <Field>
          <Control>
          <Input 
              type='text'
              name='username'
              id='username'
              placeholder='username'
              autoComplete='off'
              value={username}
              onChange={handleUsernameChange}
            />
          </Control>
            <Button onClick={fetchUser} color='dark'>Swing</Button>
            <Button onClick={clearUser} color='warning' >clear</Button>
      </Field>
      { isLoaded && error === null ? <Card user={user} /> : null }
      { error !== null ?
       <React.Fragment>
         <p>{error}</p>
         <img src={laptop} alt='error' />
       </React.Fragment>
       :
       null }
    </div>
  );
}

export default App;