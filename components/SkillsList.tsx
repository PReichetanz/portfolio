import styled from "styled-components";

export default function SkillsList() {
  return (
    <section>
      <h2>Meine Fähigkeiten</h2>
      <StyledList>
        <li>JavaScript ES6</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Git</li>
        <li>HTML & CSS</li>
        <li>Styled-Components</li>
        <li>Jest</li>
        <li>React Testing Library</li>
        <li>Scrum</li>
      </StyledList>
    </section>
  );
}

const StyledList = styled.ul`
  margin-top: 1rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  list-style: circle;
  @media (max-width: 400px) {
    display: block;
  }
  li {
    margin-left: 2rem;
    font-weight: 600;
  }
  li::marker {
    color: var(--color-tertiary);
  }
`;
