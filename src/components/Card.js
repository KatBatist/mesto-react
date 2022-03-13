import React from 'react';

function Card(props) {
  
  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <li className="card" >
      <img className="card__image" alt="" src={props.card.link} onClick={handleClick}/>
      <button className="card__delete-btn card__delete-btn_opened"></button>
      <div className="card__container">
        <p className="card__caption">{props.card.name}</p>
        <div className="card__like-group">
          <button className="card__like-btn" type="button"></button> 
          <span className="card__like-count">{props.card.likes.length}</span>
        </div>   
      </div>
    </li>
  );
}

export default Card;

//<button className={props.card.owner._id === props.userId ? "card__delete-btn" :
//"card__delete-btn card__delete-btn_opened"}></button>