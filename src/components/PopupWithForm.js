import React from 'react';

function PopupWithForm(props) {
  
  return (
    <div className= {props.isOpen ? `popup popup-${props.name} popup_opened` : 
      `popup popup-${props.name}`}>
         <div className="popup__container">
          <h2 className="popup__header">{props.title}</h2>
          <form className={`form form-${props.name}`} name={`form-${props.name}`} noValidate>
            {props.children}
            {props.name ==="add" 
              ? (<button className="form__submit" type="submit">Создать</button>)
              : props.name ==="delete"
                ? (<button className="form__submit form__submit_delete" type="submit">Да</button>)
                : (<button className="form__submit" type="submit">Сохранить</button>)
            }
          </form>
          <button className={`popup__close-btn popup-${props.name}-close`} type="button" onClick={props.onClose}></button>
        </div>
      </div>
  );
}

export default PopupWithForm;      