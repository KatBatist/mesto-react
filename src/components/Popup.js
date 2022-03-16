import React from 'react';

function Popup({isOpen, onClose}) {

  function handleEscClose (e) {
    if (e.key === 'Escape') { 
      onClose();
    }
  }

  function handleClick(e) {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close-btn')) {
      onClose();
    }
  }

  React.useEffect(() => {
    if (isOpen) {
        document.addEventListener('keydown', handleEscClose);
        document.addEventListener('click', handleClick);
    }
    return () => {
      if (isOpen) {
        document.removeEventListener('keydown', handleEscClose);
        document.removeEventListener('click', handleClick);
      }
    }
  });

  return (<></>)
}
export default Popup; 
