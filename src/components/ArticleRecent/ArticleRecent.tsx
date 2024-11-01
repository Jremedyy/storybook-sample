import {
  AuthorByLine,
  AuthorName,
  DetailsWrapper,
  HeroImage,
  Subtitle,
  Title,
  Wrapper,
  Date,
  LinkWrapper,
  HeroImageWrapper,
  PersonIcon,
  ScheduleIcon,
  ByLineSection,
} from "./styles";

export interface ArticleRecentInterface {
  heroImage: string;
  articleTitle: string;
  articleSubtitle: string;
  articleAuthor: string;
  articleDate: string;
  slug: string;
}

const ArticleRecent = (props: ArticleRecentInterface) => {
  return (
    <LinkWrapper href={`/articles/${props.slug}`}>
      <Wrapper>
        <HeroImageWrapper>
          <HeroImage src={props.heroImage} />
        </HeroImageWrapper>
        <DetailsWrapper>
          <Title>{props.articleTitle}</Title>
          <Subtitle>{props.articleSubtitle}</Subtitle>
          <AuthorByLine>
            <ByLineSection>
              <PersonIcon />
              <AuthorName>{`${props.articleAuthor}`}</AuthorName>
            </ByLineSection>
            <ByLineSection>
              <ScheduleIcon />
              <Date>{`${props.articleDate} `}</Date>
            </ByLineSection>
          </AuthorByLine>
        </DetailsWrapper>
      </Wrapper>
    </LinkWrapper>
  );
};

export default ArticleRecent;
