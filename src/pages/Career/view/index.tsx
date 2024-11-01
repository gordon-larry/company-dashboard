import { CareerItem, CareerList, CareerWrapper } from "./style";

export const CareerView: React.FC = () => {
  return (
    <CareerWrapper>
      <CareerList>
        <CareerItem
          to={"https://apply.workable.com/everyvote/j/CE0D54B067/"}
        >
          Web3 Frontend Engineer(f/m/d)
        </CareerItem>
      </CareerList>
    </CareerWrapper>
  );
};
