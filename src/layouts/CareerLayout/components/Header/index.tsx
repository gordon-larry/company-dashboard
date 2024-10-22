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
export const HeaderView: React.FC = () => {

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={LogoImg} />
        <LogoLabel>C-Vote</LogoLabel>
      </LogoWrapper>
      <MenuGroups>
        <MenuButton to={`${PATH.HOME}`} $selected={false}>
          Home
        </MenuButton>
        <MenuButton to={`/${PATH.CAREER}`} $selected={true}>
          Careers
        </MenuButton>
      </MenuGroups>
    </HeaderWrapper>
  );
};
