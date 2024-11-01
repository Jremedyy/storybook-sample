import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  overflow-x: auto;
  white-space: nowrap;
  max-width: 100%;
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  & > th > div {
    border-top: 1px solid var(--border-color);
    background-color: var(--background-color-secondary);
  }

  & > th > div,
  & > td > div {
    border-bottom: 1px solid var(--border-color);
  }

  & > th:first-of-type > div,
  & > td:first-of-type > div {
    border-left: 1px solid var(--border-color);
  }

  & > th:last-of-type > div,
  & > td:last-of-type > div {
    border-right: 1px solid var(--border-color);
  }

  &:first-of-type > th {
    :first-of-type > div {
      border-top-left-radius: var(--border-radius);
    }

    :last-of-type > div {
      border-top-right-radius: var(--border-radius);
    }
  }

  &:last-of-type > td {
    :first-of-type > div {
      border-bottom-left-radius: var(--border-radius);
    }

    :last-of-type > div {
      border-bottom-right-radius: var(--border-radius);
    }
  }

  & > th:first-of-type,
  & > td:first-of-type {
    position: sticky;
    left: 0;
    z-index: 1;
  }

  & > td:not(:first-of-type) {
    position: relative;
  }

  & > td:not(:first-of-type) > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:nth-child(even) > td {
    background-color: #1c1d1e;
  }

  &:hover > td {
    background-color: #2A2B2C;
  }
`;

export const Th = styled.th`
  font-size: 12px;
  text-align: left;
  color: var(--font-color-secondary);
  background-color: var(--background-color-primary);
`;

export const Td = styled.td`
  background-color: var(--background-color-primary);
`;

export const CellWrapper = styled.div`
  padding: 10px;
`;
