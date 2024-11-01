/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import {
  CellWrapper,
  StyledTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Wrapper,
} from "./styles";
import { SerializedStyles } from "@emotion/react";

export interface TableProps {
  columns: TableColumnProps[];
  rows: ReactNode[][];
}

interface TableColumnProps {
  title: string;
  css?: SerializedStyles;
}

export const Table = (props: TableProps) => {
  return (
    <Wrapper>
      <StyledTable>
        <Thead>
          <Tr>
            {props.columns.map((column, columnIndex) => (
              <Th key={columnIndex} css={column.css}>
                <CellWrapper>{column.title}</CellWrapper>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {props.rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex} css={props.columns[cellIndex].css}>
                  <CellWrapper>{cell}</CellWrapper>
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </StyledTable>
    </Wrapper>
  );
};
