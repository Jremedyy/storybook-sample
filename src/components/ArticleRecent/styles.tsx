import PersonSvg from "@/common/icons/PersonSvg";
import ScheduleSvg from "@/common/icons/ScheduleSvg";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    border-radius: var(--border-radius) 0px 0px var(--border-radius);
  }

  @media only screen and (min-width: 1024px) {
    padding: unset;
  }
`;

export const HeroImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  aspect-ratio: 16 / 9;

  @media only screen and (min-width: 768px) {
    border-radius: var(--border-radius) 0px 0px var(--border-radius);
  }
`;

export const HeroImage = styled.img`
  display: block;
  width: 100%;
`;

export const DetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  background-color: var(--background-color-secondary);
  border-radius: 0px 0px var(--border-radius) var(--border-radius);

  @media only screen and (min-width: 768px) {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }

  @media only screen and (min-width: 1440px) {
    border-radius: 0px var(--border-radius) var(--border-radius) 0px;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media only screen and (min-width: 768px) {
    font-size: var(--primary-text-desktop);
  }
`;

export const Subtitle = styled.div`
  color: rgb(136, 136, 136);
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  @media only screen and (min-width: 768px) {
    font-size: var(--secondary-text-desktop);
  }
`;

export const AuthorByLine = styled.div`
  color: rgb(136, 136, 136);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: auto;
`;

export const ByLineSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const AuthorName = styled.div`
  display: flex;
`;

export const Date = styled.div`
  display: flex;
`;

export const LinkWrapper = styled.a``;

export const PersonIcon = styled(PersonSvg)`
  height: 10px;
  flex-shrink: 0;
`;

export const ScheduleIcon = styled(ScheduleSvg)`
  height: 10px;
  flex-shrink: 0;
`;
