import styled from 'styled-components'
import { theme } from 'theme/index'

export const ImagePokemon = styled.div`
  border-radius: 50%;
  border: 5px solid #00d68f;
  background-color: white;
  width: 247px;
  height: 247px;
  display: flex;
  justify-content: center;
  margin: -125px auto 30px;
  overflow: hidden;
  align-items: center;

  > img {
    max-width: 100%;
    height: auto;
  }
`

export const NomePokemon = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${theme.colors.secondary};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 36px;
`

export const DetailsPoke = styled.div`
  display: flex;
  justify-content: space-around;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 25px;
    &:not(:last-child) {
      border-right: 1px solid #c5cee0;
    }

    h5,
    p {
      color: ${theme.colors.secondary};
      font-weight: bold;
      font-size: 12px;
    }

    p {
      font-size: 18px;
    }
  }
`

export const Divisoria = styled.hr`
  border: 0;
  position: relative;
  border-top: 1px solid #c5cee0;
  width: 90%;
  display: block;
  margin: 42px auto 0;
`

export const Pokeball = styled.img`
  display: block;
  margin: -35px auto -50px;
  z-index: 3;
  position: relative;
`

export const Btn = styled.button`
  border-radius: 42px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  padding: 16px 32px;
  border: none;
  background-color: ${theme.colors.fourth};
  &:first-of-type {
    background-color: ${theme.colors.third};
    margin-right: 11px;
  }

  &:hover,
  &::focus {
    opacity: 0.5;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`
