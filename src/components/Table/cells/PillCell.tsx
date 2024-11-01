import styled from "@emotion/styled";

export interface PillCellProps {
  backgroundColor: string;
  text: string;
}

export const PillCell = (props: PillCellProps) => {
  return (
    <Wrapper>
      <Pill $backgroundColor={props.backgroundColor}>{props.text}</Pill>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Pill = styled.div<{ $backgroundColor: string }>`
  color: var(--font-color-primary);
  background-color: ${(props) => props.$backgroundColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 2px 8px;
  border-radius: 4px;
`;
