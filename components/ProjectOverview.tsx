import styled from "styled-components";
import Project from "./Project";
import type { ProjectType } from "../lib/db";

type ProjectOverviewProps = {
  projects: ProjectType[],
  title: string
};

export default function ProjectOverview({ projects, title }: ProjectOverviewProps): JSX.Element {
  return (
    <>
      <StyledHeading>{title}</StyledHeading>
      <p>
        Ich mag es, produktiv zu sein und habe immer ein Projekt (oder mehrere?)
        in Arbeit. Schau Dich gern bei denjenigen Applikationen um, in die ich
        Zeit investiert habe.
      </p>
      <StyledList role="list">
        {projects.map(({ id, name, descriptions, images, slug }) => (
          <li key={id}>
            <Project
              name={name}
              description={descriptions.short}
              imageURL={images.main.url}
              alt={images.main.alt}
              slug={slug}
            />
          </li>
        ))}
      </StyledList>
    </>
  );
}

const StyledHeading = styled.h2`
  margin-top: 2rem;
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
  gap: 4rem 10vw;
  position: relative;
  justify-content: center;
  margin: 1rem 0 2rem 0;

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(2, 400px);
  }
`;
