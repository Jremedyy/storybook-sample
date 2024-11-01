import styled from '@emotion/styled'

interface WrapperBackgroundProps {
  $backgroundAccentColor: string;
}

export const LinkWrapper = styled.a``;

export const WrapperBackground = styled.div<WrapperBackgroundProps>`
  position: relative;
  display: flex;
  height: 170px;
  background-color: var(--background-color-secondary);
  background-image: ${props => `url('data:image/svg+xml,<%3Fxml version="1.0" encoding="UTF-8"%3F><svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><circle cx="4" cy="4" r="2" style="fill:${props.$backgroundAccentColor.replace("#", "%23")};"/></svg>')`};
  background-size: 4px 4px;
  background-position-x: -1px;
  background-position-y: -1px;
  border-radius: 8px 8px 8px 4px;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  padding: 16px;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  background: linear-gradient(45deg, rgba(36, 37, 38, 0) 0, rgba(36, 37, 38, 1) 25%);
`;

export const PoliticianAvatar = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
`;

export const Header = styled.div`
  
`;

export const Body = styled.div`
  
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130px;
  justify-content: center;
  gap: 16px;
`;

export const TradingDetails = styled.div`
  color: var(--font-color-primary);
  font-family: var(--font-family);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: space-between;
`;

export const PoliticianName = styled.div`
  color: var(--font-color-primary);
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: var(--primary-text-desktop);
  }
`;

export const PoliticianDetails = styled.div`
  color: var(--font-color-primary);
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  color: var(--font-color-secondary);
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: var(--secondary-text-desktop);
  }
`;

export const Detail = styled.div`
  color: var(--font-color-secondary);
  text-align: center;
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: var(--secondary-text-desktop);
  }
`;
