import {
  Content,
  Overlay,
  Wrapper,
} from "./styles";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

export interface DrawerProps {
  isOnlyMobile?: boolean; 
  isVisible: boolean;
  close: () => void;
  onExited: () => void;
  children?: React.ReactNode;
}

export const Drawer = (props: DrawerProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    document.body.style.overflow = "hidden";
  };

  const onExited = () => {
    document.body.style.overflow = "";
    props.onExited();
  };

  return (
    <Wrapper $isVisible={props.isVisible} $isOnlyMobile={props.isOnlyMobile ?? false}>
      <CSSTransition
        in={props.isVisible}
        timeout={250}
        classNames="drawer-overlay"
        unmountOnExit={true}
      >
        <Overlay ref={overlayRef} onClick={props.close} />
      </CSSTransition>
      <CSSTransition
        in={props.isVisible}
        timeout={250}
        classNames="drawer-content"
        unmountOnExit={true}
        onEnter={onEnter}
        onExited={onExited}
      >
        <Content ref={contentRef}>
          {props.children}
        </Content>
      </CSSTransition>
    </Wrapper>
  );
};
