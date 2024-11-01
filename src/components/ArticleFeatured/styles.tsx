import styled from "@emotion/styled";
import { ArticleFeaturedType } from "./ArticleFeatured";

export const Wrapper = styled.article`
  width: 100%;
`;

export const ImageLink = styled.a``;

export const ImageWrapper = styled.picture`
  display: block;
  width: 100%;
  aspect-ratio: 16/9;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  object-fit: contain;
  border-radius: var(--border-radius);
`;

export const Title = styled.h2<{ type: ArticleFeaturedType }>`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${(props) => (props.type === "primary" ? "18px" : "14px")};
  font-weight: 500;
  line-height: 1.3em;
  color: var(--article-title-color);
  margin: 8px 0px 0px 0px;

  @media only screen and (min-width: 1024px) {
    font-size: ${(props) => (props.type === "primary" ? "24px" : "16px")};
    line-height: 1.2;
    margin: ${(props) =>
      props.type === "primary" ? "16px 0" : "8px 0px 0px 0px"};
  }
`;

export const TitleLink = styled.a`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 52px;
  text-decoration: none !important;
  @media only screen and (min-width: 1024px) {
    min-height: 0px;
  }

  &:link {
    color: var(--article-title-link-color);
  }

  &:visited {
    color: var(--article-title-visited-color);
  }

  &:hover {
    color: var(--article-title-hover-color);
  }

  &:active {
    color: var(--article-title-active-color);
  }
`;
