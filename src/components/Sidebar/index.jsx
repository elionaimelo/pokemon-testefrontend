import React, { useState } from 'react'

import Button from 'components/Button'

import iconPlus from 'assets/images/plus.png'

import * as S from './styled'
import Modal from 'components/Modal/Modal'
import FormCreatePokemon from 'components/FormCreatePokemon/FormCreatePokemon'

const Sidebar = () => {
  const [isModalVisible, setIsModalVisible] = useState()
  return (
    <>
      <S.SideBarWrapper>
        <S.SideBarList>
          <S.SideBarItem>?</S.SideBarItem>
        </S.SideBarList>

        <Button icon={iconPlus} onClick={() => setIsModalVisible(true)} />
      </S.SideBarWrapper>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <FormCreatePokemon onClose={() => setIsModalVisible(false)} />
        </Modal>
      ) : null}
    </>
  )
}

export default Sidebar
