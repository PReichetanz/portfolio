import styled from "styled-components";

export default function SkillsList() {
  return (
    <section>
      <h2>Meine Fähigkeiten</h2>
      <p>
        Durch mein Studium habe ich ein solides Verständnis von Informatik- und
        Webentwicklungskonzepten erlangt, und ich habe einen Großteil meiner
        Freizeit der Anwendung dieser Konzepte auf reale Szenarien und
        Anwendungen gewidmet.
      </p>
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
  margin: 1rem auto 0;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  width: 90%;
  list-style: circle;

  @media (max-width: 400px) {
    display: block;
    margin-left: 2rem;
  }
  li {
    margin-left: 2rem;
    font-weight: 600;
  }
  li::marker {
    color: var(--color-tertiary);
  }
`;
