import { SectionStyled, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children}
    </SectionStyled>
  );
};
