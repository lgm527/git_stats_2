import React, { useState } from 'react';
import '../assets/Card.css';
import Front from './Front';
import Back from './Back';

function Card(props) {
  // flip card view on click
  const [front, setFront] = useState(true);

  const handleKeyDown = (event) => {
    if(event.key === 'Enter' || event.key === ' ') {
      setFront(!front);
    }
  }

    return (
        <div 
        className={ front ? 'Card' : 'Card flipped'}
        onClick={() => {front ? setFront(false) : setFront(true)}} 
        tabIndex='0'
        onKeyDown={(event) => handleKeyDown(event)}
        >
            {front ? <Front user={props.user} /> : <Back user={props.user}/>}
        </div>
      );
}

export default Card;