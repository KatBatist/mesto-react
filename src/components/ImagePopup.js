import React from 'react';

function ImagePopup(props) {
  return (
    <div className= {props.card ? `popup popup-card popup_opened` : `popup popup-card`}>
      <figure className="popup-card__figure">
        <img className="popup-card__image" alt={props.card.name} src={props.card.link}/>
        <figcaption className="popup-card__caption">{props.card.name}</figcaption>
        <button className="popup__close-btn popup-card-close" type="button" onClick={props.onClose}></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
