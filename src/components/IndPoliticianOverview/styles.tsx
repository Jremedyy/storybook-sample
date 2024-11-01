import { GlobeSvg } from "@/common/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  border-radius: 4px;
  background-size: cover;
  background-position-x: center;
  z-index: 0;
  overflow: hidden;
`;

export const PatternBackground = styled.div<{ $primaryColor: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
  background-color: var(--background-color-secondary);
  background-image: ${(props) =>
    `url('data:image/svg+xml,<%3Fxml version="1.0" encoding="UTF-8"%3F><svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><circle cx="4" cy="4" r="2" style="fill:${props.$primaryColor.replace("#", "%23")};"/></svg>')`};
  background-size: 4px 4px;
  border-radius: 4px 4px 8px 8px;
  background-position-y: -2px;
`;

export const SolidBackground = styled.div`
  position: absolute;
  top: 4px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--background-color-secondary);
  border-radius: 45% 45% 4px 4px;
  z-index: -1;
  box-shadow: 0 0 10px 5px rgba(36, 37, 38);
`;

export const PoliticianWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  width: 100px;
  border-radius: 50%;
  aspect-ratio: 1;
  overflow: hidden;
  margin-top: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
`;

export const Avatar = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
`;

export const PoliticianDetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--font-color-primary);
  text-align: center;
  font-family: var(--font-family);
  font-style: normal;
  line-height: normal;
  margin-top: 8px;
`;

export const PoliticianName = styled.div`
  font-size: var(--primary-text-mobile);
  font-weight: 600;

  @media only screen and (min-width: 1024px) {
    font-size: var(--primary-text-desktop);
  }
`;
export const PoliticianDetail = styled.div`
  font-size: var(--secondary-text-mobile);
  text-align: center;
  font-family: var(--font-family);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--font-color-secondary);
  @media only screen and (min-width: 1024px) {
    font-size: var(--secondary-text-desktop);
  }
`;

export const TradeDetailGroup = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin-top: 8px;
  padding: 0 8px;
`;

export const TradeDetail = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Value = styled.div`
  color: var(--font-color-primary);
  text-align: center;
  font-family: var(--font-family);
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;
export const Title = styled.div`
  color: var(--font-color-secondary);

  text-align: center;
  font-family: var(--font-family);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: var(--secondary-text-mobile);
  @media only screen and (min-width: 1024px) {
    font-size: var(--secondary-text-desktop);
  }
`;
export const SocialAccountGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-top: 1px solid var(--border-color);
`;

export const SocialAccount = styled.a`
  width: 32px;
  height: 32px;
  padding: 2px;
  cursor: pointer;
`;

export const StyledGlobal = styled(GlobeSvg)`
  fill: #FFFFFF;
`;
