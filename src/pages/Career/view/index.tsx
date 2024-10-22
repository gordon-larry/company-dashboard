import { CareerItem, CareerList, CareerWrapper } from "./style";

export const CareerView: React.FC = () => {
  return (
    <CareerWrapper>
      <CareerList>
        <CareerItem to={""}>Backend Developer(f/m/d)</CareerItem>
        <CareerItem to={""}>Full Stack Developer(f/m/d)</CareerItem>
      </CareerList>
    </CareerWrapper>
  );
};
