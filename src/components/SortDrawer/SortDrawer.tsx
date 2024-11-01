import {
  Body,
  Button,
  ButtonOverlay,
  CloseIconWrapper,
  SortOption,
  SortOptionGroup,
  SortOptionTitle,
  Footer,
  Header,
  HeaderLeft,
  HeaderTitle,
  LabelButton,
  StyledCloseSvg,
  StyledSortSvg,
  StyledCheckSvg,
} from "./styles";
import { Drawer } from "../Drawer";
import { useEffect, useMemo, useState } from "react";
import { isEqual } from "lodash";

export interface SortDrawerProps {
  sortOptions: SortOptionProps[];
  selectedOption: SortOptionProps;
  isVisible: boolean;
  onExited: (selectedOption?: SortOptionProps) => void;
  close: () => void;
}

export interface SortOptionProps {
  label: string;
  value: string;
}

export default function SortDrawer(props: SortDrawerProps) {
  const [initialSelection, setInitialSelection] = useState(
    props.selectedOption,
  );
  const [currentSelection, setCurrentSelection] = useState(
    props.selectedOption,
  );

  // Compare the current selected option with the initial one
  const isSelectionDifferent = useMemo(
    () => !isEqual(currentSelection, initialSelection),
    [currentSelection, initialSelection],
  );

  // Used to know if the apply button was clicked
  const [wereChangesApplied, setWereChangesApplied] = useState(false);

  function handleSortOptionClick(sortOption: SortOptionProps) {
    setCurrentSelection(sortOption);
  }

  // Acknowledge that the apply button was clicked, and close the drawer
  function handleApplyClick() {
    setWereChangesApplied(true);
    props.close();
  }

  // Revert current selection
  function handleResetClick() {
    setCurrentSelection(initialSelection);
  }

  // Run on every exit
  function handleExited() {
    let selection;

    // If changes were applied, pass the new selection to the prop's handler
    if (isSelectionDifferent && wereChangesApplied) {
      selection = {
        label: currentSelection.label,
        value: currentSelection.value,
      };
      setInitialSelection(currentSelection);
    } else {
      // Reset the to the current selection if changes weren't applied
      setCurrentSelection(initialSelection);
    }

    setWereChangesApplied(false);
    props.onExited(selection);
  }

  return (
    <Drawer
      isVisible={props.isVisible}
      close={props.close}
      onExited={handleExited}
    >
      <Header>
        <HeaderLeft>
          <StyledSortSvg />
          <HeaderTitle>{`Sort`}</HeaderTitle>
        </HeaderLeft>
        <CloseIconWrapper onClick={props.close}>
          <StyledCloseSvg />
        </CloseIconWrapper>
      </Header>
      <Body>
        <SortOptionGroup>
          {props.sortOptions.map((sortOption) => (
            <SortOption
              key={`sort-option-${sortOption.value}`}
              onClick={() => handleSortOptionClick(sortOption)}
            >
              <StyledCheckSvg
                $isVisible={(currentSelection.value ?? "") === sortOption.value}
              />
              <SortOptionTitle>{sortOption.label}</SortOptionTitle>
            </SortOption>
          ))}
        </SortOptionGroup>
      </Body>
      {isSelectionDifferent && (
        <Footer>
          <Button onClick={handleApplyClick}>
            <ButtonOverlay />
            {`Apply`}
          </Button>
          <LabelButton onClick={handleResetClick}>
            <ButtonOverlay />
            {`Reset`}
          </LabelButton>
        </Footer>
      )}
    </Drawer>
  );
}
