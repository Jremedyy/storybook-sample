import {
  SkeletonImage,
  SkeletonText,
  SkeletonTextLine,
} from "../GlobalStyles";
import {
  CompanyAvatar,
  CompanyDetailsWrapper,
  CompanyGroupWrapper,
  CompanyName,
  CompanyPoliticanWrapper,
  CompanyTicker,
  PoliticanGroupWrapper,
  PoliticianDetails,
  PoliticianName,
  TransactionDate,
  TransactionDetail,
  TransactionInfoWrapper,
  TransactionType,
  Wrapper,
} from "./LatestTradesItemStyles";
import styled from "@emotion/styled";

const LatestTradesItemSkeleton = () => {
  return (
    <Wrapper $isloading={"true"} $backgroundAccentColor="">
      <CompanyPoliticanWrapper>
        <CompanyGroupWrapper>
          <SkeletonImageWrapper>
            <SkeletonImage />
          </SkeletonImageWrapper>
          <CompanyDetailsWrapper $isloading={"true"}>
            <SkeletonText>
              <SkeletonTextLine />
              <TempHide>
                <SkeletonTextLine />
              </TempHide>
            </SkeletonText>
          </CompanyDetailsWrapper>
        </CompanyGroupWrapper>
        <PoliticanGroupWrapper>
          <PoliticanGroupWrapper>
            <SkeletonText>
              <SkeletonTextLine />
              <TempHide>
                <SkeletonTextLine />
              </TempHide>
            </SkeletonText>
          </PoliticanGroupWrapper>
        </PoliticanGroupWrapper>
      </CompanyPoliticanWrapper>
      <TransactionInfoWrapper>
        <TransactionType $transactiontype={"Buy"}>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </TransactionType>
        <TransactionDetail $transactiontype="Buy">
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </TransactionDetail>
        <TransactionDate $transactiontype={"Buy"}>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </TransactionDate>
      </TransactionInfoWrapper>
    </Wrapper>
  );
};

export default LatestTradesItemSkeleton;

const SkeletonImageWrapper = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const TempHide = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
  @media only screen and (min-width: 1240px) {
    display: flex;
    width: 100%;
  }
`;
