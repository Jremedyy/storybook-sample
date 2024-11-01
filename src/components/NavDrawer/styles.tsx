import { CloseSvg, MenuSvg } from "@/common/icons";
import LogoSvg from "@/common/icons/LogoSvg";
import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 0 0 10px;
  border-bottom: 1px solid var(--border-color);
  overflow-x: hidden;
`;

export const StyledLogoSvg = styled(LogoSvg)`
  height: 43px;
`;

export const IconWrapper = styled.div`
  padding: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledMenuSvg = styled(CloseSvg)`
  height: 16px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const NavItemList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.li<{ $isCurrentPage: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 500;

  &:not(:first-child) {
    border-top: 1px solid var(--border-color);
  }

  ${(props) =>
    props.$isCurrentPage &&
    `
        &::before {
        content: "";
        position: absolute;
        left: -10px;
        top: 50%;
        transform: translateY(-50%);
        height: 24px;
        width: 4px;
        border-radius: 0 4px 4px 0;
        background-color: var(--font-color-secondary);
    }
  `}
`;

export const NavItemLink = styled.a`
  display: block;
  padding: 10px 0;
  color: var(--primary-font-color);
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: var(--primary-font-color);
    text-decoration: none;
  }
`;
