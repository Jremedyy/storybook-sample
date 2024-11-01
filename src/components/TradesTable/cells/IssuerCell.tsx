import { InfoCardCell } from "@/components/Table/cells/InfoCardCell";

export interface IssuerCellProps {
    title: string;
    symbol?: string;
}

export const IssuerCell = (props: IssuerCellProps) => {
    return <InfoCardCell title={props.title} subtitle={props.symbol} />
}