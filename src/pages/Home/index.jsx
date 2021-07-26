import React from "react";

import * as S from "./styled";
import Logo from "../../assets/images/pokemonLogo.png"

const HomePage = () => (
  <S.HomeWrapper>
      <img src={Logo} alt="" />
      <S.ButtonInitial to="/map">
        Start
      </S.ButtonInitial>
  </S.HomeWrapper>
);

export default HomePage;
