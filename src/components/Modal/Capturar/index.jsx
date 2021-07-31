import React from 'react'
import * as S from './styled'
import imgPoke from 'assets/images/bulba.png'
import imgPokeball from 'assets/images/pokeball1.png'

function Capturar() {
  return (
    <>
      <S.ImagePokemon src={imgPoke} alt="" />
      <S.NomePokemon>Bulbasaur</S.NomePokemon>
      <S.DetailsPoke>
        <div>
          <h5>HP</h5>
          <p>45/45</p>
        </div>
        <div>
          <h5>Altura</h5>
          <p>0.7m</p>
        </div>
        <div>
          <h5>Peso</h5>
          <p>6.9kg</p>
        </div>
      </S.DetailsPoke>
      <S.Divisoria />
      <S.Pokeball src={imgPokeball} />
      <S.ContainerButton>
        <S.Btn ghost>PLANTA</S.Btn>
        <S.Btn>VENENO</S.Btn>
      </S.ContainerButton>
    </>
  )
}

export default Capturar
