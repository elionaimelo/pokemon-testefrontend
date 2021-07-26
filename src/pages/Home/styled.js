import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
`;

export const ButtonInitial = styled(Link)`
  background: #ff3d71;
  border-radius: 42px;
  margin-top: 31px;
  width: 124px;
  height: 56px;
  color: white;
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
`;
