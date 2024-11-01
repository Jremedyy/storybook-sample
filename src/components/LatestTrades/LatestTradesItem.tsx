import {
  BottomRow,
  BottomRowColumn,
  CompanyAvatar,
  CompanyAvatarWrapper,
  CompanyDetailsWrapper,
  CompanyGroupWrapper,
  CompanyName,
  CompanyPoliticanWrapper,
  CompanyTicker,
  ContentOverlay,
  Divider,
  LocationIcon,
  PersonIcon,
  PoliticianAvatar,
  PoliticianName,
  Row,
  ScheduleIcon,
  TransactionDetail,
  TransactionInfoWrapper,
  TransactionType,
  Wrapper,
} from "./LatestTradesItemStyles";

export interface LatestTradesItemProps {
  url: string;
  companyName: string;
  companyTicker: string;
  politicianName: string;
  politicalParty: string;
  politicalRole: string;
  state: string;
  transactionType: "Buy" | "Sell";
  transactionAmount: string;
  transactionDate: string;
  image: string;
}

const LatestTradesItem = (props: LatestTradesItemProps) => {
  return (
    <Wrapper
      $isloading="false"
      $backgroundAccentColor={
        props.transactionType === "Buy" ? "#31a24c" : "#f0284a"
      }
      href={props.url}
    >
      <ContentOverlay>
        <Row>
          <CompanyPoliticanWrapper>
            <CompanyGroupWrapper>
              <CompanyAvatarWrapper>
                <CompanyAvatar>{props.companyName[0]}</CompanyAvatar>
                <PoliticianAvatar src={props.image} />
              </CompanyAvatarWrapper>
              <CompanyDetailsWrapper $isloading="false">
                <CompanyName>{props.companyName}</CompanyName>
                <CompanyTicker>{props.companyTicker}</CompanyTicker>
              </CompanyDetailsWrapper>
            </CompanyGroupWrapper>
          </CompanyPoliticanWrapper>
          <TransactionInfoWrapper>
            <TransactionType $transactiontype={props.transactionType}>
              {props.transactionType}
            </TransactionType>
          </TransactionInfoWrapper>
        </Row>
        <Divider />
        <BottomRow>
          <BottomRowColumn>
            <PersonIcon />
            <PoliticianName>{`${props.politicianName}`}</PoliticianName>
          </BottomRowColumn>
          <BottomRowColumn>
            <LocationIcon />
            <PoliticianName>{props.politicalRole}</PoliticianName>
          </BottomRowColumn>
          <BottomRowColumn>
            <ScheduleIcon />
            <PoliticianName>{props.transactionDate}</PoliticianName>
          </BottomRowColumn>
        </BottomRow>
      </ContentOverlay>
    </Wrapper>
  );
};

export default LatestTradesItem;
