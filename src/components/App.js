import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(false)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', handlClick);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', handlClick);
  };

  function handleAddPlaceClick() { 
    setIsAddPlacePopupOpen(true);
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', handlClick);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
    document.removeEventListener('keydown', handleEscClose);
    document.removeEventListener('click', handlClick);
  }

  function handleEscClose (e) {
    if (e.key === 'Escape') { 
      closeAllPopups();
    }
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    document.addEventListener('click', handlClick);
  }

  function handlClick(e) {
      if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close-btn')) {
        closeAllPopups();
      }
  }

  return (
    <div className="root">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} onClick={handlClick}/>
      <PopupWithForm id="1" name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} onClick={handlClick}>
        <input className="form__input" type="text" id="profile-name" placeholder="Имя" name="inputName" minLength="2" maxLength="40" required/>  
        <span className="form__input-error" id="profile-name-error"></span>
        <input className="form__input form__input_second" type="text" id="profile-job" placeholder="Занятие" name="inputJob" minLength="2" maxLength="200" required/>
        <span className="form__input-error" id="profile-job-error"></span>
      </PopupWithForm>  
      <PopupWithForm id="2" name="add" title="Новое место" isOpen={isAddPlacePopupOpen} 
      onClose={closeAllPopups} onClick={handlClick}>
        <input className="form__input" type="text" id="card-name" placeholder="Название" name="inputCardName" minLength="2" maxLength="30" required/>  
        <span className="form__input-error" id="card-name-error"></span>
        <input className="form__input form__input_second" type="url" id="card-link" placeholder="Ссылка на картинку" name="inputCardLink" required/>
        <span className="form__input-error" id="card-link-error"></span>
      </PopupWithForm>
      <PopupWithForm id="3" name="avatar-edit" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} 
      onClose={closeAllPopups} onClick={handlClick}>
        <input className="form__input" type="url" id="profile-avatar-edit" placeholder="Ссылка на аватар" name="inputAvatar" required/>  
        <span className="form__input-error" id="profile-avatar-edit-error"></span>
      </PopupWithForm>
      <PopupWithForm id="4" name="delete" title="Вы уверены?"/>
    </div>
  );
}

export default App;
