import LocationSvg from "@/common/icons/LocationSvg";
import PersonSvg from "@/common/icons/PersonSvg";
import ScheduleSvg from "@/common/icons/ScheduleSvg";
import styled from "@emotion/styled";

interface WrapperInterface {
  $backgroundAccentColor: string;
  $isloading: string;
}
export const Wrapper = styled.a<WrapperInterface>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84px;
  border-radius: 4px 8px 8px 8px;
  background-color: var(--background-color-primary);
  background-image: ${props => `url('data:image/svg+xml,<%3Fxml version="1.0" encoding="UTF-8"%3F><svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><circle cx="4" cy="4" r="2" style="fill:${props.$backgroundAccentColor.replace("#", "%23")};"/></svg>')`};
  background-size: 4px 4px;
  position: relative;
  background-position-x: -1px;
  background-position-y: -1px;

  &:nth-of-type(n + 6) {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    &:nth-of-type(n + 6) {
      display: unset;
    }
  }
`;

export const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  border-radius: 4px;
  cursor: pointer;
  background: linear-gradient(to top left, rgba(36, 37, 38, 1) 85%, rgba(36, 37, 38, .5) 95%, rgba(36, 37, 38, 0));
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
`;

export const BottomRow = styled(Row)`
  justify-content: space-between;
  margin-top: 4px;
`;

export const CompanyPoliticanWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

export const CompanyGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
`;

export const CompanyAvatarWrapper = styled.div`
  position: relative;
`;

export const CompanyAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: var(--background-color-primary);
  object-fit: cover;
  aspect-ratio: 1;
  font-weight: 700;
  flex-shrink: 0;
  color: var(--font-color-primary);
`;

export const PoliticianAvatar = styled.img`
  display: block;
  position: absolute;
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  bottom: -2px;
  right: -2px;
`;

interface CompanyDetailsWrapperInterface {
  $isloading: string;
}
export const CompanyDetailsWrapper = styled.div<CompanyDetailsWrapperInterface>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => (props.$isloading === "true" ? "100px" : "100%")};
  margin-left: 12px;
  min-width: 0;
`;

export const CompanyName = styled.div`
  color: var(--font-color-primary);
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`;

export const CompanyTicker = styled.div`
  color: rgb(136, 136, 136);
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PoliticanGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PoliticianName = styled.div`
  color: rgb(136, 136, 136);
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 4px;
  width: max-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PoliticianDetails = styled.div`
  color: rgb(136, 136, 136);
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
  @media only screen and (min-width: 1240px) {
    display: flex;
    font-size: var(--secondary-text-desktop);
  }
`;

export const TransactionInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96px;
  color: #fff;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 8px;
`;

interface TransactionTypeInterface {
  $transactiontype: "Buy" | "Sell";
}

export const TransactionType = styled.div<TransactionTypeInterface>`
  color: var(--font-primary-color);
  background-color: ${(props) =>
    props.$transactiontype === "Sell" ? "var(--negative)" : "var(--positive)"};
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 2px 16px;
  border-radius: 4px;
`;

export const TransactionDetail = styled.div<TransactionTypeInterface>`
  display: unset;
  color: ${(props) =>
    props.$transactiontype === "Sell" ? "var(--negative)" : "var(--positive)"};
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TransactionDate = styled(TransactionDetail)`
  display: unset;
  font-size: var(--secondary-text-mobile);
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 4px;
  background-color: #4a4a4a60;
`;

export const BottomRowColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  &:first-child {
    min-width: 0;
  }

  &:last-child {
    flex: 0;
  }
`;

export const PersonIcon = styled(PersonSvg)`
  height: 10px;
  flex-shrink: 0;
`;

export const LocationIcon = styled(LocationSvg)`
  height: 10px;
  flex-shrink: 0;
`;

export const ScheduleIcon = styled(ScheduleSvg)`
  height: 10px;
  flex-shrink: 0;
`;
