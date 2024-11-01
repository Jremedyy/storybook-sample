import { useState } from "react";
import { NavDrawer } from "../NavDrawer";
import {
  Content,
  LogoLinkWrapper,
  MenuSvgWrapper,
  Nav,
  NavItem,
  NavItemLink,
  NavItemList,
  StyledLogoSvg,
  StyledMenuSvg,
  Wrapper,
} from "./styles";

export interface HeaderProps {
  logoUrl: string;
  navItems: NavItemProps[];
}

export interface NavItemProps {
  title: string;
  url: string;
  isCurrentPage: boolean;
}

const Header = (props: HeaderProps) => {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  return (
    <Wrapper>
      <Content>
        <LogoLinkWrapper href={props.logoUrl}>
          <StyledLogoSvg />
        </LogoLinkWrapper>
        <Nav>
          <NavItemList>
            {props.navItems.map((navItem, index) => (
              <NavItem key={`nav-item-${index}`} $isCurrentPage={navItem.isCurrentPage}><NavItemLink href={navItem.url}>{navItem.title}</NavItemLink></NavItem>
            ))}
          </NavItemList>
        </Nav>
        <MenuSvgWrapper onClick={() => setIsNavDrawerOpen(true)}>
          <StyledMenuSvg />
        </MenuSvgWrapper>
      </Content>
      <NavDrawer
        close={() => setIsNavDrawerOpen(false)}
        isVisible={isNavDrawerOpen}
        items={props.navItems}
      />
    </Wrapper>
  );
};

export default Header;
