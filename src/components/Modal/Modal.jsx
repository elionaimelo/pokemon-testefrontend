import React from 'react'

import iconClose from 'assets/images/close.png'
import * as S from './styled'

function Modal() {
  return (
    <S.ModalContainer>
      <div className="container">
        <header>
          <button className="close">
            <img src={iconClose} alt="" />
          </button>
        </header>
      </div>
    </S.ModalContainer>
  )
}

export default Modal
