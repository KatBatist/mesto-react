import React from 'react';

function PopupWithForm(props) {
  
  let {name, title, buttonText, isOpen, onClose, children} = props;
  return (
    <div className= {isOpen ? `popup popup-${props.name} popup_opened` : 
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
  );
}

export default PopupWithForm;      