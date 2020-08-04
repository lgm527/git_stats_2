import React, { useState } from 'react';
import '../assets/Card.css';
import Front from './Front';
import Back from './Back';

function Card() {
  // flip card view on click
  const [front, setFront] = useState(true);
    return (
        <div className='Card' onClick={() => {front ? setFront(false) : setFront(true)}}>
            {/* {front ? <Front user={user} /> : <Back user={user}/>} */}

            {front ? <Front  /> : <Back />}

        </div>
      );
}

export default Card;