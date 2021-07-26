import React from "react";

import Sidebar from "components/Sidebar";
import Ash from "../../assets/images/ashFront.png"

import * as S from "./styled";

const MapPage = () => (
  <S.MapWrapper className="map">
    <Sidebar />
    <S.Character>
      <img src={Ash} alt="" />
    </S.Character>
  </S.MapWrapper>
);

export default MapPage;
