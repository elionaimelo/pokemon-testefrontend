import React, { useState } from 'react'

import Sidebar from 'components/Sidebar'
import Ash from 'assets/images/ashFront.png'
import AshRight from 'assets/images/ashRightLeg.png'
import SearchingTooltip from 'assets/images/searchingTooltip.png'
import SearchTooltip from 'assets/images/searchTooltip.png'
import Tippy from '@tippyjs/react'
import Modal from 'components/Modal/Modal'
import Capturar from 'components/Modal/Capturar'

import * as S from './styled'

const MapPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [personagem, setPersonagem] = useState(false)
  const [delay, setDelay] = useState(false)

  const handleCheck = () => {
    setIsModalVisible(true)
    setDelay(!delay)
  }

  const timer = () => {
    setTimeout(() => {
      handleCheck()
    }, 1000)
  }

  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <S.Character>
        {personagem ? (
          <>
            <S.CharacterSearching>
              <img src={SearchingTooltip} alt="" className="tootipSearch" />
              <img
                src={AshRight}
                alt=""
                onClick={() => {
                  setPersonagem(false)
                  setIsModalVisible(true)
                }}
              />
            </S.CharacterSearching>
            {isModalVisible ? (
              <Modal
                onClose={() => {
                  setIsModalVisible(false)
                  setPersonagem(false)
                  console.log(personagem)
                }}
              >
                <Capturar />
              </Modal>
            ) : null}
          </>
        ) : (
          <Tippy content={<img src={SearchTooltip} alt="" />}>
            <img
              src={Ash}
              alt=""
              onClick={() => {
                setPersonagem(true)
                timer()
              }}
            />
          </Tippy>
        )}
      </S.Character>
    </S.MapWrapper>
  )
}

export default MapPage
