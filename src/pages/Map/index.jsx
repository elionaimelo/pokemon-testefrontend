import React from 'react'

import Sidebar from 'components/Sidebar'
import Ash from '../../assets/images/ashFront.png'
import SearchTooltip from '../../assets/images/searchTooltip.png'
import Tippy from '@tippyjs/react'

import * as S from './styled'

const MapPage = () => (
  <S.MapWrapper className="map">
    <Sidebar />
    <S.Character>
      <Tippy content={<img src={SearchTooltip} alt="" />}>
        <img src={Ash} alt="" />
      </Tippy>
    </S.Character>
  </S.MapWrapper>
)

export default MapPage
