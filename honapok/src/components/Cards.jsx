import React from 'react';
import honapok from '../honapok.json'


const Cards = ({ cards }) => {
  return (
    <div id="kartyak">
      {honapok.map((card, index) => (
        <div class="kartya" id="osz">
		  <img src={card.photoUrl} alt="szeptemberi kép"/>
		  <h2>{card.name}</h2>
		  <p>{card.leiras}</p>
		  <a href="">Bővebben</a>
		</div>
		
      ))}
    </div>
  );
};

export default Cards;