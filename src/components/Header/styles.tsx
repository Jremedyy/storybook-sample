import { MenuSvg } from "@/common/icons";
import LogoSvg from "@/common/icons/LogoSvg";
import styled from "@emotion/styled";

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--background-color-primary);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: 0 0 0 10px;
`;

export const LogoLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const StyledLogoSvg = styled(LogoSvg)`
  height: 43px;
`;

export const LogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
    margin-left: 10px;
  }
`;

export const NavItemList = styled.ul`
  display: flex;
  height: 100%;
`;

export const NavItem = styled.li<{ $isCurrentPage: boolean }>`
  position: relative;
  display: flex;
  height: 100%;
  padding: 0px 10px;
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  -webkit-box-align: center;
  align-items: center;
  color: var(--font-color-primary) !important;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  border-style: none;

  ${(props) =>
    props.$isCurrentPage &&
    `
        &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 4px;
        width: 50%;
        border-radius: 4px 4px 0 0;
        background-color: var(--font-color-secondary);
    }
  `}
`;

export const NavItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--primary-font-color);
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    color: var(--font-color-secondary);
    text-decoration: none;
  }
`;

export const MenuSvgWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledMenuSvg = styled(MenuSvg)`
  height: 16px;
`;
