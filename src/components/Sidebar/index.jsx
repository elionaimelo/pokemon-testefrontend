import React, { useState, useEffect } from 'react'

import Button from 'components/Button'

import iconPlus from 'assets/images/plus.png'

import * as S from './styled'
import Modal from 'components/Modal/Modal'
import FormCreatePokemon from 'components/Modal/FormCreatePokemon/FormCreatePokemon'

const Sidebar = () => {
  const [isModalVisible, setIsModalVisible] = useState()
  const [storagepokemons, setStoragePokemons] = useState([])

  useEffect(() => {
    if (localStorage.getItem('pokemons')) {
      setStoragePokemons(JSON.parse(localStorage.getItem('pokemons')))
    }
  }, [])

  function handleStorageChange(storagepokemons) {
    setStoragePokemons(storagepokemons)
  }

  return (
    <>
      <S.SideBarWrapper>
        <S.SideBarList>
          {storagepokemons.length > 0 && (
            <>
              {storagepokemons.map((pokemons, index) => (
                <S.SideBarItem key={index}>
                  <img key={index} src={pokemons.imagePokemon} alt="" />
                </S.SideBarItem>
              ))}
            </>
          )}
          {storagepokemons.length < 1 && (
            <>
              <S.SideBarItem>?</S.SideBarItem>
            </>
          )}
        </S.SideBarList>

        {storagepokemons < 6 ? null : (
          <Button icon={iconPlus} onClick={() => setIsModalVisible(true)} />
        )}
      </S.SideBarWrapper>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <FormCreatePokemon
            onClose={() => setIsModalVisible(false)}
            setStoragePokemons={handleStorageChange}
          />
        </Modal>
      ) : null}
    </>
  )
}

export default Sidebar
