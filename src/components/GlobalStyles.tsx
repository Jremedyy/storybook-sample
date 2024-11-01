import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = css`
  :root {
    --background-color-primary: #18191a;
    --background-color-secondary: #242526;
    --button-secondary--background-color: rgba(255, 255, 255, .1);
    --primary-icon-color: #E4E6EB;
    --on-primary: #3a3b3c;
    --positive: #31a24c;
    --negative: hsl(350, 87%, 55%);
    --lemon: #f5c33b;
    --font-color-primary: #ffffff;
    --font-color-secondary: #888888;
    --article-body-color: #cccccc;
    --article-body-bold-color: var(--primary-font-color);
    --font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --border-color: #4a4a4a50;
    --border-radius: 4px;
    --button-background-color-on-primary: #1c1e21;
    --divider-color: var(--border-color);
    --header-mobile: 20px;
    --title-mobile: 19px;
    --primary-text-mobile: 14px;
    --secondary-text-mobile: 12px;
    --header-desktop: 25px;
    --title-desktop: 25px;
    --primary-text-desktop: 18px;
    --secondary-text-desktop: 14px;
    --accent: rgb(117, 182, 355);
    --link-color: var(--accent);
    --h1-font-size-s: 28px;
    --h1-font-size-l: 38px;
    --h1-font-weight: 500;
    --h1-line-height: 1.25;
    --h2-font-size: 19px;
    --h2-font-weight: 400;
    --h2-line-height: 1.25;
    --h3-font-size: 19px;
    --h3-font-weight: 500;
    --h3-line-height: 1.25;
    --main-min-height: calc(100dvh - 61px);
    --main-min-height-fallback: calc(100vh - 61px);
    --p-font-size: 18px;
    --p-font-weight: 400;
    --p-line-height: 1.8;
    --text-area-background-color: #333333;
    --text-area-caret-color: #888888;
    --text-area-color: #ffffff;
    --text-area-placeholder-color: #888888;
    --text-area-font-size: 16px;
    --text-area-line-height: 1.5;
    --text-area-padding: 12px;
    --text-field-background-color: #333333;
    --text-field-caret-color: #888888;
    --text-field-color: #ffffff;
    --text-field-placeholder-color: #888888;
    --text-field-font-size: 16px;
    --text-field-line-height: 1.5;
    --text-field-padding: 12px;
    --article-time-color: #d3d3d3;
    --article-tag-color: #e6ce1e;
    --home-page-banner-section-header-color: var(--primary-font-color);
    --body-bg-color: #1e1e23;
    --header-bg-color: #1e1e23;
    --policy-layout-h1-color: var(--primary-font-color);
    --policy-layout-h2-color: var(--primary-font-color);
    --policy-layout-h3-color: var(--primary-font-color);
    --policy-layout-body-color: var(--secondary-font-color);
    --policy-layout-a-link-color: var(--primary-color);
    --policy-layout-a-visited-color: var(--primary-color);
    --policy-layout-a-hover-color: var(--primary-color);
    --policy-layout-a-active-color: var(--primary-color);
    --button-filled-link-color: green;
    --political-party-democratic: #00aef3;
    --political-party-republican: #e81b23;
  }

  * {
    font-family: var(--font-family);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    background-color: var(--background-color-primary);
    color: var(--font-color-primary);
    font-family: var(--font-family);
  }

  html,
  body {
    height: 100%;
    width: 100%;
    background-color: var(--background-color-primary);
  }

  a {
    text-decoration: none;
    color: var(--link-color);
  }
`;

export const CustomScroll = styled.div`
  scrollbar-color: var(--background-color-primary) var(--divider-color);
  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  *::-webkit-scrollbar-track {
    background: var(--header-bg-color);
    border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--divider-color);
    border-radius: 14px;
    border: 3px solid var(--primary);
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: var(--divider-color);
  }
`;

export const placeHolderShimmer = keyframes`
  0% {
    opacity: 0.75
  }
  100% {
    opacity: 1

  }
`;

// Styled component for the animated background
export const SkeletonAnimatedBackground = styled.div`
  animation: 0.75s ease 0s infinite alternate;
  animation-name: ${placeHolderShimmer};
  background: var(--on-primary);
  height: 96px;
  position: relative;
  &.on-secondary {
    background: var(--background-color-secondary);
  }
`;

// Styled component for the image
export const SkeletonImage = styled(SkeletonAnimatedBackground)`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
`;

// Styled component for the text
export const SkeletonText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  &.header {
    padding: unset;
    width: 100%;
    @media only screen and (min-width: 768px) {
      padding: 0 20px;
    }
  }
`;

// Styled component for the text line
export const SkeletonTextLine = styled(SkeletonAnimatedBackground)`
  display: flex;
  height: 10px;
  width: 100%;
  margin: 4px 0;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  grid-column-start: 1;
  grid-column-end: 5;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  @media only screen and (min-width: 768px) {
    grid-column-end: 9;
    padding: 40px;
  }

  @media only screen and (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 13;
    padding: 40px 0;
  }
`;
