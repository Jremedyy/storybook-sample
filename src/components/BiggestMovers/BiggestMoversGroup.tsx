import styled from "@emotion/styled";

import { useState } from "react";
import BiggestMoversItem, {
  BiggestMoversItemProps,
} from "./BiggestMoversItem";
import BiggestMoversItemSkeleton from "./BiggestMoversItemSkeleton";

export interface BiggestMoversGroupInterface {
  viewAllLink: string;
  mostActive: BiggestMoversItemProps[];
  mostVolume: BiggestMoversItemProps[];
}

const BiggestMoversGroup = (props: BiggestMoversGroupInterface) => {
  const [selectedToggle, setSelectedToggle] = useState<"Active" | "Volume">("Active");
  const skeletons = Array.from({ length: 10 });
  const isLoading = false;

  return (
    <Wrapper>
      <Header>
        <TitleLinkWrapper>
          <Title>{"Biggest Movers"}</Title>
          <ViewAll href={props.viewAllLink}>{"View All"}</ViewAll>
        </TitleLinkWrapper>
        <ToggleWrapper>
          <TopToggleButton
            onClick={() => setSelectedToggle("Active")}
            $selectedtoggle={selectedToggle}
          >
            {"Most Active"}
          </TopToggleButton>
          <WorstToggleButton
            onClick={() => setSelectedToggle("Volume")}
            $selectedtoggle={selectedToggle}
          >
            {"Most Volume"}
          </WorstToggleButton>
        </ToggleWrapper>
      </Header>
      <Grid>
        {isLoading
          ? skeletons.map((key, index) => (
            <BiggestMoversItemSkeleton key={index} index={index} />
          ))
          : selectedToggle === "Active"
            ? props.mostActive.map((mover, index) => (
              <BiggestMoversItem
                key={index}
                index={index}
                avatarImage={mover.avatarImage}
                politicianName={mover.politicianName}
                politicianRole={mover.politicianRole}
                politicianParty={mover.politicianParty}
                politicianState={mover.politicianState}
                selectedToggle={selectedToggle.toLowerCase()}
                politicianId={mover.politicianId}
                value={mover.value}
                valueLabel={mover.valueLabel} />
            ))
            : props.mostVolume.map((mover, index) => (
              <BiggestMoversItem
                key={index}
                index={index}
                avatarImage={mover.avatarImage}
                politicianName={mover.politicianName}
                politicianRole={mover.politicianRole}
                politicianParty={mover.politicianParty}
                politicianState={mover.politicianState}
                politicianId={mover.politicianId}
                selectedToggle={selectedToggle.toLowerCase()}
                value={mover.value}
                valueLabel={mover.valueLabel} />
            ))}
      </Grid>
    </Wrapper>
  );
};

export default BiggestMoversGroup;

const Wrapper = styled.div`
  width: 100%;
  padding: 28px 0;
  background-color: var(--background-color-primary);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 1024px) {
    padding: 0;
  }
`;

const Title = styled.h2`
  color: var(--primary-font-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 10px 0px;
`;

const ViewAll = styled.a`
  color: var(--link-color);
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  line-height: normal;
`;

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 8px;
`;

interface ToggleButtonProps {
  $selectedtoggle: "Active" | "Volume";
}
const WorstToggleButton = styled.button<ToggleButtonProps>`
  background-color: ${({ $selectedtoggle }) =>
    $selectedtoggle === "Volume" ? "#3A3B3C" : "#212122"};
  color: #fff;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  width: 100%;
  cursor: pointer;
  border-radius: 0px var(--border-radius) var(--border-radius) 0px;
  white-space: nowrap;
  flex: 1;
  flex-shrink: 0;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const TopToggleButton = styled(WorstToggleButton)`
  background-color: ${({ $selectedtoggle }) =>
    $selectedtoggle === "Active" ? "#3A3B3C" : "#212122"};
  border-radius: var(--border-radius) 0px 0px var(--border-radius);
`;

const TitleLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  position: relative;

  @media only screen and (max-width: 768px) {
    & > a:last-child > div {
      border-bottom: unset !important;
    }
  }

  @media only screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 1px;
      background-color: var(--border-color); /* Color of the divider line */
      transform: translateX(-50%);
    }

    & > a:nth-child(5n) > div {
      border-bottom: unset !important;
    }
  }
`;
