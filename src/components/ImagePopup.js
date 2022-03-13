import React from 'react';

function ImagePopup(props) {
  let {card, onClose} = props;

  return (
    <div className= {card ? `popup popup-card popup_opened` : `popup popup-card`}>
      <figure className="popup-card__figure">
        <img className="popup-card__image" alt={card.name} src={card.link}/>
        <figcaption className="popup-card__caption">{card.name}</figcaption>
        <button className="popup__close-btn popup-card-close" type="button" onClick={onClose}></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
