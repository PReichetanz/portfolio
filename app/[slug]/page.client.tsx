"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";
import { projects } from "@/lib/db";
import Contact from "@/components/Contact";
import Link from "next/link";
import type { ProjectType } from "../../lib/db";
import ProjectOverview from "@/components/ProjectOverview";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetailPageClient({
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

  const { name, descriptions, techDetails, texts, urls } = currentProject;

  return (
    <>
      <Header />
      <MainFlexbox>
        <StyledBackLink href="/"><ArrowLeft size={20} /> Zurück</StyledBackLink>
        <h2>{name}</h2>
        <p>{descriptions.long}</p>
        <StyledDescriptionList>
          <div>
            <StyledDescriptionTerm>Typ</StyledDescriptionTerm>
            <StyledDescriptionDetails>
              {techDetails.projectType}
            </StyledDescriptionDetails>
          </div>
          <div>
            <StyledDescriptionTerm>Stack</StyledDescriptionTerm>
            {techDetails.tools.map((tool) => (
              <StyledDescriptionDetails>{tool}</StyledDescriptionDetails>
            ))}
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
        <StyledTechStackExplanationWrapper>
          <ul role="list">
            {techDetails.previewTools.map(({ name, iconURL }, index) => (
              <StyledTechStackExplanationItem key={index}>
                <Image src={iconURL} alt={name} width={32} height={32} />
                <span>{name}</span>
              </StyledTechStackExplanationItem>
            ))}
          </ul>
          <div>
            <h3>Tech Stack und Erläuterung</h3>
            {texts.stackExplanation.map((stackExplanationText, index) => (
              <p key={index}>{stackExplanationText}</p>
            ))}
          </div>
        </StyledTechStackExplanationWrapper>
        <StyledProblemsWrapper>
          <h3>Probleme und Gedanken</h3>
          {texts.problems.map((problemText, index) => (
            <p key={index}>{problemText}</p>
          ))}
        </StyledProblemsWrapper>
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

const StyledBackLink = styled(Link)`
display: flex;
align-items: center;
margin-top: 1rem;
width: max-content;
`;

const StyledDescriptionDetails = styled.dd`
  margin: 0;
  padding-bottom: 1rem;
  a {
    font-weight: 600;
  }
`;

const StyledDescriptionList = styled.dl`
  display: flex;
  padding-left: 2rem;
  gap: 10%;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledDescriptionTerm = styled.dt`
  font-weight: bold;
  margin-bottom: 2rem;
`;

const StyledProblemsWrapper = styled.section`
  text-align: center;
`;

const StyledTechStackExplanationWrapper = styled.section`
  margin-left: 20%;
  display: flex;
  align-items: center;
  gap: 10%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-left: 0;
  }
`;

const StyledTechStackExplanationItem = styled.li`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: var(--shadow-elevation-medium);
`;
