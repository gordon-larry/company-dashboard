import { PATH } from "constant";
import {
  HeaderWrapper,
  Logo,
  LogoLabel,
  LogoWrapper,
  MenuButton,
  MenuGroups,
} from "./style";
import LogoImg from "assets/img/mark-light.png";
import { useLocation } from "react-router-dom";

export const HeaderView: React.FC = () => {
  const location = useLocation();
  console.log(location.hash);
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={LogoImg} />
        <LogoLabel>P-Vote</LogoLabel>
      </LogoWrapper>
      <MenuGroups>
        <MenuButton
          href={`#${PATH.LANDING}`}
          $selected={location.hash === `#${PATH.LANDING}` || location.hash === ""}
        >
          Home
        </MenuButton>
        <MenuButton
          href={`#${PATH.ABOUT}`}
          $selected={location.hash === `#${PATH.ABOUT}`}
        >
          About
        </MenuButton>
        <MenuButton
          href={`#${PATH.PRODUCT}`}
          $selected={location.hash === `#${PATH.PRODUCT}`}
        >
          Product
        </MenuButton>
        <MenuButton
          href={`#${PATH.CONTACT}`}
          $selected={location.hash === `#${PATH.CONTACT}`}
        >
          Contact
        </MenuButton>
        <MenuButton
          href={`#${PATH.CAREER}`}
          $selected={location.hash === `#${PATH.CAREER}`}
        >
          Careers
        </MenuButton>
      </MenuGroups>
    </HeaderWrapper>
  );
};
