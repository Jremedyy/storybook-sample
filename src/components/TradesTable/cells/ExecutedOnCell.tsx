import { TextCell } from "@/components/Table/cells/TextCell";

export interface ExecutedOnCellProps {
  text: string;
}

export const ExecutedOnCell = (props: ExecutedOnCellProps) => {
  return <TextCell {...props} />;
};
