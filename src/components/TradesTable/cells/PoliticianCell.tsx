import { InfoCardCell } from "@/components/Table/cells/InfoCardCell";

export interface PoliticianCellProps {
  url: string;
  imageUrl?: string;
  party: string;
  firstName: string;
  lastName: string;
  chamberTitleShort: string;
  provinceAbbreviation: string;
}

export const PoliticianCell = (props: PoliticianCellProps) => {
  function getImageBorderColor(party: string) {
    switch (party) {
      case "democratic":
        return "#00aef3";
      case "republican":
        return "#e81b23";
      default:
        return undefined;
    }
  }

  return (
    <a href={props.url}>
      <InfoCardCell
        imageUrl={props.imageUrl}
        imageBorderColor={getImageBorderColor(props.party)}
        title={`${props.firstName} ${props.lastName}`}
        subtitle={`${[props.chamberTitleShort, props.provinceAbbreviation].join(" | ")}`}
      />
    </a>
  );
};
