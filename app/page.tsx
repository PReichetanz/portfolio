"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SkillsList from "@/components/SkillsList";
import Introduction from "@/components/Introduction";
import styled from "styled-components";
import ProjectOverview from "@/components/ProjectOverview";
import { projects } from "../lib/db";

export default function Home() {
  return (
    <>
      <Header />
      <MainFlexbox>
        <Introduction />
        <hr />
        <SkillsList />
        <hr />
        <ProjectOverview title="Woran ich gearbeitet habe" projects={projects} />
        <hr />
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
