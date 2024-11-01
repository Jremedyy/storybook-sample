import {
  DetailsWrapper,
  LinkWrapper,
  Value,
  PoliticanGroupWrapper,
  PoliticianAvatar,
  PoliticianDetails,
  PoliticianName,
  Rank,
  Wrapper,
  ValueLabel,
} from "./styles";

export interface BiggestMoversItemProps {
  index: number;
  avatarImage: string;
  politicianId: string;
  politicianName: string;
  politicianRole: string;
  politicianParty: string;
  politicianState: string;
  value: string;
  valueLabel: string;
  selectedToggle: string;
}

const BiggestMoversItem = (props: BiggestMoversItemProps) => {
  return (
    <LinkWrapper href={`/politicians/${props.politicianId}`}>
      <Wrapper $index={props.index}>
        <PoliticanGroupWrapper>
          <Rank>{props.index + 1}</Rank>
          <PoliticianAvatar src={props.avatarImage} />
          <PoliticianName>{props.politicianName}</PoliticianName>
        </PoliticanGroupWrapper>
        <DetailsWrapper>
          <Value>{props.value}</Value>
          <ValueLabel>{props.valueLabel}</ValueLabel>
        </DetailsWrapper>
      </Wrapper>
    </LinkWrapper>
  );
};

export default BiggestMoversItem;
