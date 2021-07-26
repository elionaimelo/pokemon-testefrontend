import React, { useState } from "react";

import Button from "components/Button";

import iconPlus from "assets/images/plus.png";

import * as S from "./styled";
import Modal from "components/Modal/Modal";

const Sidebar = () => {
  const [isModalVisible, setIsModalVisible] = useState();
  return (
    <>
      <S.SideBarWrapper>
        <S.SideBarList>
          <S.SideBarItem>?</S.SideBarItem>
        </S.SideBarList>

        <Button icon={iconPlus} onClick={() => setIsModalVisible(true)} />
      </S.SideBarWrapper>
      {isModalVisible ? <Modal /> : null}
    </>
  );
};

export default Sidebar;
