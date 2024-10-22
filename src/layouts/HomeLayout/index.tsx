import { HeaderContainer } from "./container";
import { HomeWrapper } from "./style";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <HomeWrapper>
      <HeaderContainer />
      {children}
    </HomeWrapper>
  );
};
