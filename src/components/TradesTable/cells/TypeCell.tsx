import { PillCell } from "@/components/Table/cells/PillCell";

export interface TypeCellProps {
    backgroundColor: string;
    text: string;
}

export const TypeCell = (props: TypeCellProps) => {
    return <PillCell {...props} />
}