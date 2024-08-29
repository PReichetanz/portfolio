"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";
import { projects } from "@/lib/db";
import Contact from "@/components/Contact";
import Link from "next/link";
import type { ProjectType } from "../../lib/db";
import ProjectOverview from "@/components/ProjectOverview";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const currentProject = projects.find(
    (project: ProjectType) => project.slug === params.slug
  );

  if (!currentProject) {
    return null;
  }

  const otherProjects = projects.filter(
    (project: ProjectType) => project.slug !== params.slug
  );

  const { name, descriptions, texts, urls } = currentProject;

  return (
    <>
      <Header />
      <MainFlexbox>
        <Link href="/">Zurück</Link>
        <h2>{name}</h2>
        <p>{descriptions.long}</p>
        <StyledDescriptionList>
          <div>
            <StyledDescriptionTerm>Typ</StyledDescriptionTerm>
            <StyledDescriptionDetails>Privates Projekt</StyledDescriptionDetails>
          </div>
          <div>
            <StyledDescriptionTerm>Stack</StyledDescriptionTerm>
            <StyledDescriptionDetails>React / Next</StyledDescriptionDetails>
            <StyledDescriptionDetails>Styled-Components</StyledDescriptionDetails>
          </div>
          <div>
            <StyledDescriptionTerm>Live</StyledDescriptionTerm>
            <StyledDescriptionDetails>
              <a href={urls.deployment}>Projekt ansehen</a>
            </StyledDescriptionDetails>
          </div>
        </StyledDescriptionList>
        <h3>Zweck und Ziele</h3>

        {texts.purpose.map((purposeText, index) => (
          <p key={index}>{purposeText}</p>
        ))}

        <h3>Tech Stack und Erläuterung</h3>
        {texts.stackExplanation.map((stackExplanationText, index) => (
          <p key={index}>{stackExplanationText}</p>
        ))}
        <h3>Probleme und Gedanken</h3>
        {texts.problems.map((problemText, index) => (
          <p key={index}>{problemText}</p>
        ))}
        <h3>Lessons Learned</h3>
        {texts.lessonsLearned.map((lessonLearnedText, index) => (
          <p key={index}>{lessonLearnedText}</p>
        ))}

        <ProjectOverview title="Andere Projekte" projects={otherProjects} />
        <Contact />
      </MainFlexbox>
      <Footer />
    </>
  );
}

const MainFlexbox = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 5vw;
`;

const StyledDescriptionDetails = styled.dd`
margin: 0;
`;

const StyledDescriptionList = styled.dl`
  display: flex;
  padding-left: 2rem;
  gap: 5rem;
`;

const StyledDescriptionTerm = styled.dt`
  font-weight: bold;
  margin-bottom: 2rem;
`;
