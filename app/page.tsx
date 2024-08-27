"use client";
import styled from "styled-components";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={montserrat.className}>
      <header>
        
      </header>
    </main>
  );
}

const Paragraph = styled.p`
  text-transform: uppercase;
`;
