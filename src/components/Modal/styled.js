import styled from 'styled-components'
import UploadFoto from 'assets/images/upload_foto.png'
import { colors } from 'assets/styles/colors'
import Select from 'react-select'

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
    background: ${colors.backgroundLinear};
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

export const StyledSelect = styled(Select)`
  .Select__control {
    height: 48px;
    width: 100%;
    padding: 8px;
    border: 2px solid ${colors.grey};
    cursor: pointer;
  }

  .Select__value-container {
    padding: 0;
    margin-top: -14px;
  }

  .Select__single-value {
    color: #c5cee0;
    font-size: 14px;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    color: ${colors.secondary};
    margin-top: -14px;
  }

  .Select__menu {
    color: #3c3d3e;
  }
`

export const BodyModal = styled.section`
  background: #f7f9fc;
  position: relative;
  border-radius: 24px 24px 0px 0px;
  padding: 1rem;
  padding-bottom: 60px;

  form {
    margin: auto;
    display: block;
    width: 93%;

    button {
      background: ${colors.primary};
      border-radius: 42px;
      padding: 0 25px;
      height: 56px;
      color: white;
      margin: 31px auto;
      max-width: fit-content;
      text-transform: uppercase;
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      box-shadow: 0px 25px 22px rgba(0, 0, 0, 0.21);
      cursor: pointer;

      &:hover {
        background-color: purple;
      }

      &:disabled {
        background: #ccc;
      }
    }

    .helpTip {
      color: red;
      font-size: 16px;
      text-align: center;
      display: block;
    }

    .form-row {
      display: flex;
      flex-direction: column;
      margin-bottom: 14px;
      margin-top: 10;

      label {
        font-weight: bold;
        text-transform: uppercase;
        color: #2e3a59;
        font-size: 14px;
        margin-bottom: 6px;
      }
      input {
        height: 48px;
        border-radius: 4px;
        background-color: white;
        color: #c5cee0;
        border: 2px solid ${colors.grey};
        padding: 8px;
      }

      .divider {
        text-align: center;
        position: relative;
        margin-bottom: 30px;
        border-bottom: 1px solid ${colors.divider};
        span {
          background-color: #f7f9fc;
          position: relative;
          font-weight: bold;
          top: 10px;
          padding: 0 10px;
        }
      }

      input {
        ::placeholder {
          color: #c5cee0;
        }
      }
    }

    .skills {
      input {
        margin-bottom: 10px;
      }
    }
  }

  .upload__image-wrapper {
    button {
      background: url(${UploadFoto});
      display: block;
      margin: -108px auto 30px;
      width: 247px;
      height: 247px;
      cursor: pointer;
      max-width: none;
      box-shadow: none;
      margin-bottom: 0px;

      &:hover {
        background-color: transparent;
      }
    }
  }

  .image-item {
    margin: -261px auto 30px;
    border-radius: 50%;
    overflow: hidden;
    height: 247px;
    width: 247px;

    img {
      height: inherit;
    }
  }

  .image-item__btn-wrapper {
    margin-top: -70px;
    button {
      background-image: none;
      background-color: ${colors.primary};
      height: auto;
      width: auto;
      max-width: none;
      padding: 16px;
      margin: auto;
    }
  }
`
