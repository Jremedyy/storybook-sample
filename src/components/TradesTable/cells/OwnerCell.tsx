import { TextCell } from "@/components/Table/cells/TextCell";

export interface OwnerCellProps {
    text: string;
}

export const OwnerCell = (props: OwnerCellProps) => {
    return <TextCell {...props} />
}