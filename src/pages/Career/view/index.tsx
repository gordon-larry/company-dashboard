import { CareerItem, CareerList, CareerWrapper } from "./style";

export const CareerView: React.FC = () => {
  return (
    <CareerWrapper>
      <CareerList>
        <CareerItem
          to={"https://wellfound.com/jobs/3132718-web3-frontend-developer"}
        >
          Web3 Frontend Engineer(f/m/d)
        </CareerItem>
      </CareerList>
    </CareerWrapper>
  );
};
