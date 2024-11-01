import {
  DetailWrapper,
  DetailGroupWrapper,
  Title,
  Wrapper,
  DetailValue,
  DetailName,
  TextWrapper,
  DetailIconWrapper,
  SearchOptionButton,
  SummaryTitleWrapper,
  SearchOptions,
  StyledSortSvg,
  SearchOptionButtonText,
  StyledFilterSvg,
  SearchOptionButtonPill,
} from "./styles";

import {
  CompanySvg,
  FileSvg,
  MoneyBagSvg,
  PoliticianSvg,
  TradeIcon,
  CalendarSvg,
} from "../../common/icons";
import { useState } from "react";
import { FilterDrawer, FilterOption, FilterProps } from "../FilterDrawer";
import { SortDrawer, SortOptionProps } from "../SortDrawer";

export type FilterSummaryProps = {
  trades?: string;
  filings?: string;
  volume?: string;
  politicians?: string;
  issuers?: string;
  time?: string;
};

export interface FilterHeaderProps {
  headerTitle: string;
  filterSummary: FilterSummaryProps;
  filters: FilterProps[];
  selectedFilters: Record<string, FilterOption | FilterOption[]>;
  sortOptions: SortOptionProps[];
  selectedSortOption: SortOptionProps;
}

const FilterHeader = (props: FilterHeaderProps) => {
  let details = Object.entries(props.filterSummary);

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isSortDrawerOpen, setIsSortDrawerOpen] = useState(false);

  const handleFilterDrawerExited = (
    selectedOptions?: Record<string, FilterOption | FilterOption[]>,
  ) => {
    if (!selectedOptions) {
      return;
    }

    navigateToUrl(selectedOptions, props.selectedSortOption);
  };

  const handleSortDrawerExited = (selectedOption?: SortOptionProps) => {
    if (!selectedOption) {
      return;
    }

    navigateToUrl(props.selectedFilters, selectedOption);
  };

  const mapSelectedFiltersToQueryParams = (
    selectedFilters: Record<string, FilterOption | FilterOption[]>,
  ) => {
    const params: string[] = [];

    Object.entries(selectedFilters).forEach(([key, options]) => {
      if (Array.isArray(options)) {
        const values = options
          .map((option) => encodeURIComponent(option.value))
          .join(",");

        if (values.length) {
          params.push(`${key}=${values}`);
        }
      } else {
        params.push(`${key}=${options.value}`);
      }
    });

    return params;
  };

  const mapSelectedSortOptionToQueryParams = (
    selectedOption: SortOptionProps,
  ) => {
    return `sortBy=${encodeURIComponent(selectedOption.value)}`;
  };

  const navigateToUrl = (
    selectedFilters?: Record<string, FilterOption | FilterOption[]>,
    selectedSortOption?: SortOptionProps,
  ) => {
    const params: string[] = [];

    if (selectedFilters) {
      params.push(...mapSelectedFiltersToQueryParams(selectedFilters));
    }

    if ((selectedSortOption?.value ?? "") !== "last_trade_date_desc") {
      params.push(mapSelectedSortOptionToQueryParams(selectedSortOption!));
    }

    const slug =
      props.headerTitle.toLowerCase() === "trades" ? "trades" : "politicians";

    window.location.href = params.length
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}?${params.join("&")}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`;
  };

  const numFilters = Object.keys(props.selectedFilters).length;

  return (
    <Wrapper>
      <FilterDrawer
        filters={props.filters}
        selectedOptions={props.selectedFilters}
        isVisible={isFilterDrawerOpen}
        close={() => setIsFilterDrawerOpen(false)}
        onExited={handleFilterDrawerExited}
      />
      <SortDrawer
        sortOptions={props.sortOptions}
        selectedOption={props.selectedSortOption}
        isVisible={isSortDrawerOpen}
        close={() => setIsSortDrawerOpen(false)}
        onExited={handleSortDrawerExited}
      />
      <SummaryTitleWrapper>
        <Title>{props.headerTitle}</Title>
      </SummaryTitleWrapper>
      <DetailGroupWrapper $numofdetails={details.length}>
        {details?.map((detail: [string, string], index: number) => (
          <DetailWrapper key={index} $column={index}>
            <TextWrapper>
              <DetailValue>{detail[1]}</DetailValue>
              <DetailName>
                {detail[0] === "time" ? "time frame" : detail[0]}
              </DetailName>
            </TextWrapper>
            <DetailIconWrapper>
              {detail[0] === "trades" ? (
                <TradeIcon />
              ) : detail[0] === "filings" ? (
                <FileSvg />
              ) : detail[0] === "volume" ? (
                <MoneyBagSvg />
              ) : detail[0] === "politicians" ? (
                <PoliticianSvg />
              ) : detail[0] === "time" ? (
                <CalendarSvg />
              ) : (
                detail[0] === "issuers" && <CompanySvg />
              )}
            </DetailIconWrapper>
          </DetailWrapper>
        ))}
      </DetailGroupWrapper>
      <SearchOptions>
        {props.filters.length > 0 && (
          <SearchOptionButton
            onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
          >
            <StyledFilterSvg />
            <SearchOptionButtonText>{`Filter`}</SearchOptionButtonText>
            {numFilters > 0 && (
              <SearchOptionButtonPill>{numFilters}</SearchOptionButtonPill>
            )}
          </SearchOptionButton>
        )}
        {props.sortOptions.length > 0 && (
          <SearchOptionButton
            onClick={() => setIsSortDrawerOpen(!isSortDrawerOpen)}
          >
            <StyledSortSvg />
            <SearchOptionButtonText>{`Sort`}</SearchOptionButtonText>
          </SearchOptionButton>
        )}
      </SearchOptions>
    </Wrapper>
  );
};

export default FilterHeader;
