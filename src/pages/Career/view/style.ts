import { Link } from "react-router-dom";
import styled from "styled-components";

export const CareerWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 84px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CareerList = styled.div`
  width: 60vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const CareerItem = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: var(--primary-1);
  font-size: 24px;
  font-weight: 900;
  width: 100%;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  padding: 16px 48px;
  border-radius: 8px;
  &:hover {
    background-color: var(--bg-primary-3);
  }
  cursor: pointer;
  transition: all;
  transition-duration: 150ms;
`;
