import React, { useState } from 'react';
import '../assets/App.css';
import Card from './Card';
import Error from './Error';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Form, Button, Notification, Loader } from 'react-bulma-components';

function App() {

    // username input default blank
    const [username, setUsername] = useState('');
  
    // controlled form
    const handleUsernameChange = (e) => setUsername(e.target.value);

    // fetch loading status
    const [isLoading, setLoading] = useState(false);
    // fetch catch errors
    const [error, setError] = useState(null);
    // save fetched data
    const [user, setUser] = useState([]);

    const fetchUser = () => {
      setError(null);
      setLoading(true);
      fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/vnd.github.v3+json"
        }
      })
      .then(res => {
        setLoading(false);
        if(!res.ok) {
          setError(res.statusText);
          setUser([]);
          setUsername('');
        }
        return res.json()
      })
      .then((user) => {
          setUser(user);
          setUsername('');
      })
    }

    const clearUser = () => {
      setUsername('');
      setError(null);
      setUser([]);
    }

  const { Input, Field, Control } = Form;

  return (
    <div className="App">
      <h2 id='title' className='title'>Git Stats </h2>
      <p id='instructions' className='subtitle'>Please type in a GitHub username and the statistics will appear below</p>

      <Field id='form'>
          <Control>
          <Input 
              type='text'
              name='username'
              id='username'
              placeholder='username'
              autoComplete='off'
              value={username}
              onChange={handleUsernameChange}
              aria-label='search'
              aria-placeholder='username'
            />
          </Control>
            <Button onClick={fetchUser} color='primary' id='submit' aria-label='submit' type='submit'>swing!</Button>
            <Button onClick={clearUser} color='info' id='clear' aria-label='clear'>clear</Button>
      </Field>
      { user.login !== undefined && error === null ? 
      <React.Fragment>
        <p>Click to flip</p>
        <Card user={user} />
      </React.Fragment>
      : isLoading ? 
      <Loader style={{ width: 200, height: 200, border: '4px solid darkgray', borderTopColor: 'transparent', borderRightColor: 'transparent', position: 'fixed', left: '25%' }}/> 
      : null }
      { error !== null ?
       <React.Fragment>
         <Error />
         <Notification color='danger'>Whoops! {error}... Try again?</Notification>
       </React.Fragment>
       :
       null }

        <div className='foot'>
          Made with
          <span role='img' aria-label='heart'> ❤️ </span>
          <a href='https://github.com/lgm527' target='_blank' rel='noopener noreferrer'>@lgm527</a> © 2020
        </div>


    </div>
  );
}

export default App;