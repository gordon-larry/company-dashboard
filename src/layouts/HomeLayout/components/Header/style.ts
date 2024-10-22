import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 84px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Logo = styled.img`
  max-width: 48px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 8px;
  margin-left: 111px;
  gap: 8px;
  background-color: var(--primary-1);
`;

export const LogoLabel = styled.label`
  font-size: 36px;
  font-weight: 800;
  color: white;
`;

export const MenuGroups = styled.div`
  display: flex;
  margin-right: 81px;
`;

export const MenuButton = styled.a<{ $selected: boolean }>`
  color: var(--primary-1);
  padding: 30px 40px;
  text-decoration: none;
  font-weight: ${(props) => (props.$selected ? 700 : 500)};
  font-size: 17px;
  background-color: ${(props) =>
    props.$selected ? "var(--bg-primary-1)" : "white"};
  border-bottom: ${(props) =>
    props.$selected ? "4px solid var(--primary-1)" : "none"};
  &:hover {
    background-color: var(--bg-primary-1);
  }
  transition: all 0.3s ease-in-out;
`;
