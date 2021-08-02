import React, { useState, useEffect } from 'react'

import { VscLoading } from 'react-icons/vsc'
import * as S from './styled'
import imgPokeball from 'assets/images/pokeball1.png'
import api from 'services/api'

function Capturar() {
  const [pokemonRandom, setPokemonRandom] = useState(0)
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getPokemons() {
      setIsLoading(true)
      try {
        let randNum = Math.abs(Math.floor(Math.random() * (0 - 1000)))
        let response = await api.get('pokemon/' + randNum)
        setPokemonRandom(response.data)
        setPokemonTypes(response.data.types)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }

    getPokemons()
  }, [])

  function catchPokemon() {}
  return (
    <>
      <S.ImagePokemon>
        {isLoading ? (
          <VscLoading size="5rem" />
        ) : (
          <>
            {pokemonRandom ? (
              <img
                src={pokemonRandom.sprites.other.dream_world['front_default']}
                alt={pokemonRandom.name}
              />
            ) : null}
          </>
        )}
      </S.ImagePokemon>

      <S.NomePokemon>
        {isLoading ? <VscLoading /> : <>{pokemonRandom.name}</>}
      </S.NomePokemon>
      <S.DetailsPoke>
        <div>
          <h5>HP</h5>
          <p>
            {isLoading ? (
              <VscLoading />
            ) : (
              <>
                45/45
                {console.log(pokemonRandom.stats)}
              </>
            )}
          </p>
        </div>
        <div>
          <h5>Altura</h5>
          <p>
            {isLoading ? <VscLoading /> : <>{pokemonRandom.height / 10}</>} m
          </p>
        </div>
        <div>
          <h5>Peso</h5>
          <p>
            {isLoading ? <VscLoading /> : <>{pokemonRandom.weight / 10}</>} kg
          </p>
        </div>
      </S.DetailsPoke>
      <S.Divisoria />
      <S.Pokeball src={imgPokeball} onClick={catchPokemon} />
      <S.ContainerButton>
        {pokemonTypes
          ? pokemonTypes.map((types, index) => (
              <S.Btn key={index}>{types.type.name}</S.Btn>
            ))
          : null}
      </S.ContainerButton>
    </>
  )
}

export default Capturar
