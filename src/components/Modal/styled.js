import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: #f7f9fc;
    width: 360px;
    position: relative;
    box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31),
      0px 4px 8px rgba(9, 30, 66, 0.25);
    border-radius: 8px;

    header {
      height: 153px;
      background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);

      .close {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }
`
