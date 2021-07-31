import styled from 'styled-components'
import { theme } from 'theme/index'

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 360px;
    max-height: 90%;
    background: ${theme.colors.backgroundLinear};
    position: relative;
    box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31),
      0px 4px 8px rgba(9, 30, 66, 0.25);
    border-radius: 8px;
    overflow-x: hidden;
    overflow-y: scroll;

    header {
      height: 153px;
      .close {
        position: absolute;
        right: 12px;
        width: 38px;
        height: 38px;
        top: 12px;
        background: #f7f9fc;
        border: 2px solid #8f9bb3;
        border-radius: 1000px;
        cursor: pointer;
      }
    }
  }
`

export const BodyModal = styled.section`
  background: #f7f9fc;
  position: relative;
  border-radius: 24px 24px 0px 0px;
  padding: 1rem;
  padding-bottom: 60px;
`
