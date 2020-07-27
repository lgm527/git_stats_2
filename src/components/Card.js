import React, { useState } from 'react';
import '../assets/Card.css';
import Front from './Front';
import Back from './Back';

function Card() {
  const [front, setFlip] = useState(true);

  return (
    <div className="Card" onClick={() => {front ? setFlip(false) : setFlip(true)}}>
        {front ? <Front /> : <Back />}
    </div>
  );
}

export default Card;