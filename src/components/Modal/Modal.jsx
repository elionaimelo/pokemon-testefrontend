import React from 'react'

import iconClose from 'assets/images/close.png'
import * as S from './styled'

function Modal({ id = 'modal', onClose = () => {}, children }) {
  const handleOutsiteModal = (e) => {
    if (e.target.id === id) onClose()
  }

  return (
    <S.ModalContainer id="modal" onClick={handleOutsiteModal}>
      <div className="container">
        <header>
          <button className="close" onClick={onClose}>
            <img src={iconClose} alt="" />
          </button>
        </header>
        <S.BodyModal>{children}</S.BodyModal>
      </div>
    </S.ModalContainer>
  )
}

export default Modal
