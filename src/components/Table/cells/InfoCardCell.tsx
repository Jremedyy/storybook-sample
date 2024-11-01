import styled from "@emotion/styled";

export interface InfoCardCellProps {
  imageUrl?: string;
  imageBorderColor?: string;
  title: string;
  subtitle?: string;
}

export const InfoCardCell = (props: InfoCardCellProps) => {
  return (
    <Wrapper>
      <Avatar $borderColor={props.imageBorderColor ?? "unset"}>
        {props.imageUrl && <Img src={props.imageUrl} />}
        {!props.imageUrl && (
          <DefaultAvatar>{props.title[0].toUpperCase()}</DefaultAvatar>
        )}
      </Avatar>
      <Info>
        <Title>{props.title}</Title>
        {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div<{ $borderColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${(props) => props.$borderColor};
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const DefaultAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--background-color-secondary);
  font-size: 16px;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: var(--font-color-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limits to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
`;

const Subtitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 400;
  color: var(--font-color-secondary);
`;
