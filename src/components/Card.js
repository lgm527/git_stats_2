import React, { useState } from 'react';
import '../assets/Card.css';
import Front from './Front';
import Back from './Back';

function Card(props) {
  // flip card view on click
  const [front, setFront] = useState(true);
    return (
        <div className='Card' onClick={() => {front ? setFront(false) : setFront(true)}}>
            {front ? <Front user={props.user} /> : <Back user={props.user}/>}
        </div>
      );
}

export default Card;