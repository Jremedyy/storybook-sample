import { TextCell } from "@/components/Table/cells/TextCell";

export interface SizeCellProps {
  text: string;
}

export const SizeCell = (props: SizeCellProps) => {
  return <TextCell {...props} />;
};
