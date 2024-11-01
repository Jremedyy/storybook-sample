import styled from "@emotion/styled";

interface WrapperInterface {
  $index: number;
}

export const Wrapper = styled.div<WrapperInterface>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) min-content;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background: var(--background-color-secondary);
  
  @media only screen and (min-width: 768px) {

  }
`;

export const Rank = styled.div`
    display: flex;
    justify-content: center;
    width: 20px;
    color: #fff;
    text-align: center;
    font-family: var(--font-family);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    flex-shrink: 0;
`;

export const PoliticanGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
`;

export const PoliticianAvatar = styled.img`
  display: block;
  width: 42px;
  height: 42px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 14px;
`;

export const PoliticianName = styled.div`
  display: -webkit-box; /* Necessary for flexbox support */
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical; /* Vertical orientation for the box */
  overflow: hidden; /* Hide overflow text */
  text-overflow: ellipsis; /* Show ellipsis (...) for overflow text */
  max-height: 40px; /* 2 lines of text, adjust according to line-height */
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  text-decoration: none;
  margin-left: 14px;
`;

export const PoliticianDetails = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    color: #fff;
    text-align: center;
    font-size: var(--secondary-text-deskotp);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 200px;
    width: 100%;
  }
  
  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const Value = styled.div`
  color: var(--font-color-primary);
  text-align: center;
  font-size: var(--secondary-text-deskotp);
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &.negative {
    color: var(--negative);
  }
`;

export const ValueLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: var(--font-color-secondary);
  font-size: var(--secondary-text-deskotp);
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  
  &.loading {
    width: 100px;
  }
`;

export const LinkWrapper = styled.a`
  display: block;
  text-decoration: none;
`;
