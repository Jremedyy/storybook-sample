import { CloseSvg, FilterSvg } from "@/common/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div<{$isVisible: boolean, $isOnlyMobile: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  pointer-events: ${props => props.$isVisible ? undefined : "none"};

  ${props => props.$isOnlyMobile && `
    @media only screen and (min-width: 768px) {
      display: none;
    }
  `}
`;

export const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  align-items: flex-end;

  &.drawer-overlay-enter {
    opacity: 0;
  }

  &.drawer-overlay-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in-out;
  }

  &.drawer-overlay-exit {
    opacity: 1;
  }

  &.drawer-overlay-exit-active {
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: var(--background-color-primary);

  @media only screen and (min-width: 768px) {
    max-width: 360px;
  }

  &.drawer-content-enter {
    right: calc(-100%);
  }

  &.drawer-content-enter-active {
    right: 0;
    transition: right 250ms ease-in-out;
  }

  &.drawer-content-enter-done {
    right: 0;
  }

  &.drawer-content-exit {
    right: 0;
  }

  &.drawer-content-exit-active {
    right: calc(-100%);
    transition: right 250ms ease-in-out;
  }
`;


