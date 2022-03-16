import React from 'react';
import Popup from './Popup';

function PopupWithForm({name, title, buttonText, isOpen, onClose, children}) {
  
  return (
    <>
    <Popup isOpen ={true} onClose={onClose} />
    <div className= {isOpen ? `popup popup-${name} popup_opened` : 
      `popup popup-${name}`}>
      <div className="popup__container">
        <h2 className="popup__header">{title}</h2>
        <form className={`form form-${name}`} name={`form-${name}`} noValidate>
          {children}
          <button className="form__submit" type="submit">{buttonText}</button>)
        </form>
        <button className={`popup__close-btn popup-${name}-close`} type="button" onClick={onClose}></button>
      </div>
    </div>
    </>  
  );
}

export default PopupWithForm;      
