import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from 'assets/styles/colors'

export const HomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${colors.backgroundLinear};
`

export const ButtonInitial = styled(Link)`
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
`
