import styled from 'styled-components'

import img from 'assets/images/pageBackground.png'

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;
`

export const Character = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  > img {
    align-self: center;
  }
`

export const CharacterSearching = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;

  .tootipSearch {
    position: absolute;
    top: -83px;
  }
  > img {
    align-self: center;
  }
`
