import { css } from "@emotion/react";
import { Table } from "../Table";
import { PoliticianCell, PoliticianCellProps } from "./cells/PoliticianCell";
import { IssuerCell, IssuerCellProps } from "./cells/IssuerCell";
import { TypeCell, TypeCellProps } from "./cells/TypeCell";
import { SizeCell, SizeCellProps } from "./cells/SizeCell";
import { OwnerCell, OwnerCellProps } from "./cells/OwnerCell";
import { ExecutedOnCell, ExecutedOnCellProps } from "./cells/ExecutedOnCell";

export interface TradesTableProps {
  trades: TradesTableRowProps[];
}

export interface TradesTableRowProps {
  politican: PoliticianCellProps;
  issuer: IssuerCellProps;
  type: TypeCellProps;
  size: SizeCellProps;
  owner: OwnerCellProps;
  executedOn: ExecutedOnCellProps;
}

export const TradesTable = (props: TradesTableProps) => {
  const columns = [
    {
      title: "Politician",
      css: css`
        width: 150px;
        min-width: 150px;
        max-width: 150px;

        @media only screen and (min-width: 1024px) {
          width: 225px;
          min-width: 225px;
          max-width: 225px;
        }
      `,
    },
    {
      title: "Issuer",
      css: css`
        width: 300px;
        min-width: 300px;
        max-width: 300px;

        @media only screen and (min-width: 1024px) {
          width: 100%;
          min-width: 225px;
        }
      `,
    },
    {
      title: "Transaction Type",
      css: css`
        width: 150px;
        min-width: 150px;
        max-width: 150px;
      `,
    },
    {
      title: "Size",
      css: css`
        width: 150px;
        min-width: 150px;
        max-width: 150px;

        @media only screen and (min-width: 1024px) {
          min-width: 125px;
          width: 100%;
        }
      `,
    },
    {
      title: "Owner",
      css: css`
        width: 150px;
        min-width: 150px;
        max-width: 150px;

        @media only screen and (min-width: 1024px) {
          min-width: 125px;
          width: 100%;
        }
      `,
    },
    {
      title: "Executed On",
      css: css`
        width: 150px;
        min-width: 150px;
        max-width: 150px;

        @media only screen and (min-width: 1024px) {
          min-width: 100px;
        }
      `,
    },
  ];

  return (
    <Table
      columns={columns}
      rows={props.trades.map((t) => {
        return [
          <PoliticianCell {...t.politican} />,
          <IssuerCell {...t.issuer} />,
          <TypeCell {...t.type} />,
          <SizeCell {...t.size} />,
          <OwnerCell {...t.owner} />,
          <ExecutedOnCell {...t.executedOn} />,
        ];
      })}
    />
  );
};
