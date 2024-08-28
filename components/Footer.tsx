"use client";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledFooter>
      <StyledHeading>
        <a href="/">Paul.</a>
      </StyledHeading>
      <StyledLinkSection>
        <a href="https://github.com/PReichetanz">GitHub</a>
        <a href="https://www.linkedin.com/in/preichetanz/">LinkedIn</a>
      </StyledLinkSection>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  border-top: 1px solid var(--color-stroke);
  margin: 0 2vw;
  padding: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

const StyledHeading = styled.h2`
  margin: 0;
`;

const StyledLinkSection = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  a {
    text-transform: lowercase;
    font-weight: 500;
  }
`;
