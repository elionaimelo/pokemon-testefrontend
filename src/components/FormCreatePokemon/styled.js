import styled from 'styled-components'
import { colors } from 'assets/styles/colors'
import Select from 'react-select'

export const FormCreatePokemon = styled.form`
  margin: auto;
  display: block;
  width: 93%;

  .uploadImage {
    border-radius: 50%;
    height: 247px;
    width: 247px;
    object-fit: cover;
    margin: -110px auto 0 auto;
    display: block;
  }

  #fileUp {
    display: none;
  }

  label {
    display: block;
  }

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

  .skills {
    input {
      margin-bottom: 10px;
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
