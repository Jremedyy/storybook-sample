import styled from "@emotion/styled";

export interface TextCellProps {
    text: string;
} 

export const TextCell = (props: TextCellProps) => {
    return (
        <Text>{props.text}</Text>
    );
}

const Text = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    overflow: hidden;
`;