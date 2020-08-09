import React, { useState } from 'react';
import '../assets/App.css';
import Card from './Card';
import Error from './Error';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Form, Button, Notification } from 'react-bulma-components';

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
      <h2 id='title' className='title'>Git Stats </h2>
      <p id='instructions' className='subtitle'>Please type in a GitHub username and the statistics will appear below</p>
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
            <Button onClick={fetchUser} color='primary'>Swing</Button>
            <Button onClick={clearUser} color='info' >clear</Button>
      </Field>
      { isLoaded && error === null ? <Card user={user} /> : null }
      { error !== null ?
       <React.Fragment>
         <Error />
         <Notification color='danger'>Whoops! {error}... Try again?</Notification>
       </React.Fragment>
       :
       null }
    </div>
  );
}

export default App;