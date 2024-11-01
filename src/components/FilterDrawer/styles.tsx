import { CloseSvg, FilterSvg } from "@/common/icons";
import styled from "@emotion/styled";

// Header styles
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 0 16px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CloseIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px; /* line up with combobox icons */
  padding: 8px;
  cursor: pointer;
  height: min-content;
`;

export const StyledCloseSvg = styled(CloseSvg)`
  height: 12px;
`;

export const StyledFilterSvg = styled(FilterSvg)`
  height: 24px;
`;

export const HeaderTitle = styled.h2`
  font-size: 24px;
`;

// Body styles
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid var(--divider-color);
  margin-top: 8px;
  padding-top: 16px;
  flex: 1;
  overflow-y: scroll;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
`;

export const Filter = styled.div``;

export const FilterTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

// Footer styles
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0;
  padding: 0 16px;
`;

export const Button = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e4e6eb;
  background-color: var(--positive);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3333;
  height: 36px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  & > div:not(.three-dots) {
    display: none;
  }

  &:hover > div {
    display: unset;
  }
`;

export const LabelButton = styled(Button)`
  background-color: unset;
`;

export const ButtonOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  z-index: 2;
`;
