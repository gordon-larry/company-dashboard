import { HeaderContainer } from "./container";
import { CareerWrapper } from "./style";

interface CareerLayoutProps {
  children: React.ReactNode;
}

export const CareerLayout: React.FC<CareerLayoutProps> = ({ children }) => {
  return (
    <CareerWrapper>
      <HeaderContainer />
      {children}
    </CareerWrapper>
  );
};
