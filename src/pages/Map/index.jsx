import React, { useState } from 'react'

import Sidebar from 'components/Sidebar'
import Ash from '../../assets/images/ashFront.png'
import AshRight from '../../assets/images/ashRightLeg.png'
import SearchingTooltip from '../../assets/images/searchingTooltip.png'
import SearchTooltip from '../../assets/images/searchTooltip.png'
import Tippy from '@tippyjs/react'

import * as S from './styled'

const MapPage = () => {
  const [personagem, setPersonagem] = useState(true)

  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <S.Character>
        {personagem ? (
          <Tippy content={<img src={SearchTooltip} alt="" />}>
            <img src={Ash} alt="" onClick={() => setPersonagem(false)} />
          </Tippy>
        ) : (
          <S.CharacterSearching>
            <img src={SearchingTooltip} alt="" className="tootipSearch" />
            <img src={AshRight} alt="" onClick={() => setPersonagem(true)} />
          </S.CharacterSearching>
        )}
      </S.Character>
    </S.MapWrapper>
  )
}

export default MapPage
