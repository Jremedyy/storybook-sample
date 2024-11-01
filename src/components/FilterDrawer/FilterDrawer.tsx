import {
  Body,
  Button,
  ButtonOverlay,
  CloseIconWrapper,
  Filter,
  FilterGroup,
  FilterTitle,
  Footer,
  Header,
  HeaderLeft,
  HeaderTitle,
  LabelButton,
  StyledCloseSvg,
  StyledFilterSvg,
} from "./styles";
import Select from "react-select";
import { useMemo, useState } from "react";
import { isEqual } from "lodash";
import { Drawer } from "../Drawer";

export interface FilterDrawerProps {
  filters: FilterProps[];
  selectedOptions: Record<string, FilterOption | FilterOption[]>;
  isVisible: boolean;
  onExited: (selectedOptions?: Record<string, FilterOption | FilterOption[]>) => void;
  close: () => void;
}

export interface FilterProps {
  key: string;
  title: string;
  options: FilterOption[];
  defaultValue?: string;
  isRequired: boolean;
  isMulti: boolean;
  isSearchable: boolean;
}

export interface FilterOption {
  label: string;
  value: string;
}

const deepCopyFilters = (
  filters: Record<string, FilterOption | FilterOption[]>,
): Record<string, FilterOption | FilterOption[]> => {
  const copy: Record<string, FilterOption | FilterOption[]> = {};

  console.log(filters);

  for (const key in filters) {
    if (Array.isArray(filters[key])) {
      copy[key] = filters[key].map((option) => ({
        label: option.label,
        value: option.value,
      }));
    } else {
      copy[key] = {
        label: filters[key].label,
        value: filters[key].value,
      };
    }
  }

  return copy;
};

export default function FilterDrawer(props: FilterDrawerProps) {
  // Initially selected options
  const [initialSelectedOptions, _] = useState(props.selectedOptions);

  // State to manage the selected options
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, FilterOption | FilterOption[]>
  >(initialSelectedOptions);

  // Handle option change for each filter
  const handleOptionChange = (filterKey: string, options: FilterOption[]) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [filterKey]: options,
    }));
  };

  // Compare the current selected options with the initial ones
  const areFiltersDifferent = useMemo(
    () => !isEqual(selectedOptions, initialSelectedOptions),
    [selectedOptions, initialSelectedOptions],
  );

  // Used to know if the apply button was clicked
  const [wereChangesApplied, setWereChangesApplied] = useState(false);

  // Store apply action
  const handleApplyClick = () => {
    setWereChangesApplied(true);
    props.close();
  };

  // Reset filters on button click
  const handleResetClick = () => {
    setSelectedOptions(initialSelectedOptions);
  };

  // Reset filters on exit
  const handleExited = () => {
    const options =
      areFiltersDifferent && wereChangesApplied && selectedOptions
        ? deepCopyFilters(selectedOptions)
        : undefined;
    setWereChangesApplied(false);
    setSelectedOptions(initialSelectedOptions);
    props.onExited(options);
  };

  return (
    <Drawer
      isVisible={props.isVisible}
      close={props.close}
      onExited={handleExited}
    >
      <Header>
        <HeaderLeft>
          <StyledFilterSvg />
          <HeaderTitle>{`Filters`}</HeaderTitle>
        </HeaderLeft>
        <CloseIconWrapper onClick={props.close}>
          <StyledCloseSvg />
        </CloseIconWrapper>
      </Header>
      <Body>
        <FilterGroup>
          {props.filters.map((filter) => (
            <Filter key={filter.key}>
              <FilterTitle>{filter.title}</FilterTitle>
              <Select
                options={filter.options}
                isMulti={filter.isMulti}
                isSearchable={filter.isSearchable}
                value={selectedOptions[filter.key]}
                onChange={(options) =>
                  handleOptionChange(filter.key, options as FilterOption[])
                }
                placeholder={
                  filter.isSearchable ? "Search or select..." : "Select..."
                }
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: "var(--background-color-secondary)",
                    borderColor: "var(--divider-color)",
                    marginTop: "8px",
                    boxShadow: "none",
                    ":hover": {
                      borderColor: "#FFFFFF",
                    },
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  input: (baseStyles) => ({
                    ...baseStyles,
                    color: "var(--font-color-secondary)",
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: "var(--background-color-secondary)",
                    color: "var(--font-color-secondary)",
                  }),
                  multiValue: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: "var(--on-primary)",
                  }),
                  multiValueLabel: (baseStyles) => ({
                    ...baseStyles,
                    color: "#FFFFFF",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "var(--font-color-secondary)",
                    backgroundColor:
                      state.isFocused || state.isSelected
                        ? "rgba(255, 255, 255, 0.05)"
                        : undefined,
                    ":active": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    },
                  }),
                  placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: "var(--font-color-secondary)",
                  }),
                  singleValue: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "var(--font-color-secondary)",
                  }),
                }}
              />
            </Filter>
          ))}
        </FilterGroup>
      </Body>
      {areFiltersDifferent && (
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
