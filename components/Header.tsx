"use client";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>
        <MainPageLink href="#">Paul.</MainPageLink>
      </h1>
      <EmailLink href="mailto:hallo@paulreichetanz.de">Email</EmailLink>
    </StyledHeader>
  );
}

const EmailLink = styled.a`
  display: block;
`;

const MainPageLink = styled.a`
  text-transform: uppercase;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 0 2vw;
  border-bottom: 1px solid var(--color-stroke);
`;
