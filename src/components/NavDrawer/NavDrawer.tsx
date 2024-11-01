import { useState } from "react";
import { Drawer } from "../Drawer";
import {
  Header,
  IconWrapper,
  Nav,
  NavItem,
  NavItemLink,
  NavItemList,
  StyledLogoSvg,
  StyledMenuSvg,
} from "./styles";
import { NavItemProps } from "../Header/Header";

export interface NavDrawerProps {
  close: () => void;
  isVisible: boolean;
  items: NavItemProps[];
}

export const NavDrawer = (props: NavDrawerProps) => {
  const [selectedUrl, setSelectedUrl] = useState<string | undefined>();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    e.preventDefault();
    if (!props.items[index].isCurrentPage) {
      setSelectedUrl(e.currentTarget.getAttribute("href")!);
    }
    props.close();
  };

  const handleExited = () => {
    // Do nothing if there is no URL
    if (!selectedUrl) {
      return;
    }

    // Reset the URL so the value is fresh due to bfcache
    const url = selectedUrl;
    setSelectedUrl(undefined);

    // Navigate to the selected URL
    window.location.href = url;
  };

  return (
    <Drawer
      isOnlyMobile={true}
      isVisible={props.isVisible}
      close={props.close}
      onExited={handleExited}
    >
      <Header>
        <StyledLogoSvg />
        <IconWrapper onClick={props.close}>
          <StyledMenuSvg />
        </IconWrapper>
      </Header>
      <Nav>
        <NavItemList>
          {props.items.map((item, index) => (
            <NavItem
              key={`nav-item-${index}`}
              $isCurrentPage={item.isCurrentPage}
            >
              <NavItemLink
                href={item.url}
                onClick={(e) => handleClick(e, index)}
              >
                {item.title}
              </NavItemLink>
            </NavItem>
          ))}
        </NavItemList>
      </Nav>
    </Drawer>
  );
};
