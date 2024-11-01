import { CloseSvg } from "@/common/icons";
import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ChildrenWrapper = styled.div`
  position: relative;
  max-width: 350px;
`;

export const CloseSvgWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export const StyledCloseSvg = styled(CloseSvg)`
  width: 16px;
  height: 16px;
`;
