import {
  DetailsWrapper,
  PoliticianDetails,
  PoliticianName,
  TradingDetails,
  Wrapper,
  PoliticianAvatar,
  Detail,
  LinkWrapper,
  Header,
  Body,
  WrapperBackground,
} from "./styles";

export interface PoliticianCardProps {
  politicianImage: string;
  politicianName: string;
  chamber: "House" | "Senate";
  politicalParty: "Democratic" | "Republican";
  state: string;
  numOfTrades: string;
  tradeVolume: string;
  lastTradeDate: string;
  politicianId: string;
  href: string;
}
const PoliticianCard = (props: PoliticianCardProps) => {
  return (
    <LinkWrapper href={props.href}>
      <WrapperBackground
        $backgroundAccentColor={
          props.politicalParty === "Democratic" ? "#00AEF3" : "#E81B23"
        }
      >
        <Wrapper>
          <PoliticianAvatar src={props.politicianImage} />
          <DetailsWrapper>
            <Header>
              <PoliticianName>{props.politicianName}</PoliticianName>
              <PoliticianDetails>{`${props.chamber} / ${props.politicalParty} / ${props.state} `}</PoliticianDetails>
            </Header>
            <Body>
              <TradingDetails>
                {"No. Trades"}
                <Detail>{props.numOfTrades}</Detail>
              </TradingDetails>
              <TradingDetails>
                {"Volume"}
                <Detail>{props.tradeVolume}</Detail>
              </TradingDetails>
              <TradingDetails>
                {"Last Trade"} <Detail>{props.lastTradeDate}</Detail>
              </TradingDetails>
            </Body>
          </DetailsWrapper>
        </Wrapper>
      </WrapperBackground>
    </LinkWrapper>
  );
};

export default PoliticianCard;
