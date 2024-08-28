import styled from "styled-components";

export default function Contact() {
  return (
    <StyledSection>
      <h2>Lass&apos; uns was zusammen bauen!</h2>
      <StyledParagraph>
        Kontaktiere mich gern, wenn Du nach einem Entwickler suchst, eine Frage
        hast oder Dich ganz einfach vernetzen möchtest!
      </StyledParagraph>
      <StyledLink href="mailto:hallo@paulreichetanz.de">
        hallo@paul.reichetanz.de
      </StyledLink>
    </StyledSection>
  );
}

const StyledParagraph = styled.p`
  padding-block: 1rem;
  max-width: 600px;
`;

const StyledLink = styled.a`
  padding-inline: 1rem 0;
`;

const StyledSection = styled.section`
  padding-bottom: 3rem;
`;
