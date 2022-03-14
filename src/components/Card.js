import React from 'react';

function Card({card, onCardClick}) {
  
  function handleClick() {
    onCardClick(card);
  }  

  return (
    <li className="card" >
      <img className="card__image" alt={card.name} src={card.link} onClick={handleClick}/>
      <button className="card__delete-btn card__delete-btn_opened"></button>
      <div className="card__container">
        <p className="card__caption">{card.name}</p>
        <div className="card__like-group">
          <button className="card__like-btn" type="button"></button> 
          <span className="card__like-count">{card.likes.length}</span>
        </div>   
      </div>
    </li>
  );
}

export default Card;
