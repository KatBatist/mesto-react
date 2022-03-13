import React from 'react';
import {api} from '../utils/Api.js'
import Card from './Card';

function Main(props) {
  let {onEditProfile, onAddPlace, onEditAvatar, onCardClick} = props;

  const [userName, setUserName] = React.useState("Жак Ив Кусто")
  const [userDescription, setUserDescription] = React.useState("Исследователь океана")
  const [userAvatar, setUserAvatar] = React.useState("")
  const [userId, setUserId] = React.useState(0)
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cardsData]) => {
      setUserName(userData.name)
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setUserId(userData._id);
      setCards(cardsData);
    })
  }, [userName, userDescription, userAvatar, userId]);

  return (
    <>
      <section className="profile">
        <div className="profile__container-avatar">
          <img className="profile__avatar" alt="Аватар." src={userAvatar}/>
            <button className="profile__avatar-btn"  onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-btn" type="button" onClick={onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__add-btn" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__container">
          {cards.map(res => (
            <Card key={res._id} card = {res} onCardClick={onCardClick}/>
          ))}
        </ul>
      </section>
    </>  
  );
}

export default Main;
