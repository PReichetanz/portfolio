import styled from "styled-components";
import Project from "./Project";

export default function ProjectOverview() {
  const projects = [
    {
      id: 1,
      name: "Flachwitzgenerator",
      description:
        "Eine App, die einen zufällig ausgewählten Flachwitz anzeigt.",
      imageURL: "/joke.png",
      deploymentURL: "https://wordplay-nu.vercel.app",
      githubURL: "https://github.com/PReichetanz/joke-of-the-day",
      alt: "Startbildschirm der Flachwitz-App",
    },
    {
      id: 2,
      name: "Beurteilungsbuddy",
      description:
        "Eine App, die Lehrer:innen die Bewertung ihrer Schüler:innen erleichtert..",
      imageURL: "/beurteilungsbuddy-home.png",
      deploymentURL: "https://beurteilungsbuddy.vercel.app",
      githubURL: "https://github.com/PReichetanz/beurteilungsbuddy",
      alt: "Startbildschirm der Beurteilungsbuddy-App",
    },
    {
      id: 3,
      name: "Star Wars Battle Counter",
      description: "Diese App hilft dabei, den Spielstand zu tracken.",
      imageURL: "/swbc-home.png",
      deploymentURL: "https://star-wars-battles-counter.vercel.app",
      githubURL: "https://github.com/PReichetanz/star-wars-battles-counter",
      alt: "Startbildschirm der Flachwitz-App",
    },
  ];

  return (
    <>
      <StyledHeading>Woran ich gearbeitet habe</StyledHeading>
      <p>
        Ich mag es, produktiv zu sein und habe immer ein Projekt (oder mehrere?)
        in Arbeit. Schau Dich gern bei denjenigen Applikationen um, in die ich
        Zeit investiert habe.
      </p>
      <StyledList role="list">
        {projects.map(
          ({ id, name, description, imageURL, alt, deploymentURL }) => (
            <li key={id}>
              <Project
                name={name}
                description={description}
                imageURL={imageURL}
                deploymentURL={deploymentURL}
                alt={alt}
              />
            </li>
          )
        )}
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
