import styled from "@emotion/styled";
import IndPoliticianTradeItem, {
  IndPoliticianTradeItemProps,
} from "./IndPoliticianTradeItem";
import { ComponentFooter, MoreTradesButton } from "./styles";

import { FilterHeader } from "../FilterHeader";
import { TradesTable, TradesTableRowProps } from "../TradesTable";

export interface IndPoliticianTradeGroupProps {
  totalTransactions: string;
  totalFilings: string;
  totalVolume: string;
  timeFrame: string;
  politicianId: string;
  trades: TradesTableRowProps[];
}

const IndPoliticianTradeGroup = (props: IndPoliticianTradeGroupProps) => {
  return (
    <Wrapper>
      <FilterHeader
        filterSummary={{
          time: props.timeFrame,
          filings: props.totalFilings,
          trades: props.totalTransactions,
          volume: props.totalVolume,
        }}
        headerTitle={""}
        filters={[]}
        selectedFilters={{}}
        sortOptions={[]}
        selectedSortOption={{ label: "", value: "" }}
      />
      <TableWrapper>
        <TradesTable trades={props.trades}></TradesTable>
      </TableWrapper>
      <ComponentFooter>
        <MoreTradesButton
          href={`/trades?politicianIds[]=${props.politicianId}`}
        >
          {"More Activity"}
        </MoreTradesButton>
      </ComponentFooter>
    </Wrapper>
  );
};

export default IndPoliticianTradeGroup;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
  }
`;

const TableWrapper = styled.div`
  margin-left: 10px;
`;
