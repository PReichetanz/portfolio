"use client";
import GlobalStyle from "../styles";
import StyledComponentsRegistry from "@/lib/registry";
import styled from "styled-components";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalStyle />
      <html lang="en">
        <body className={montserrat.className}>
          <PageGrid>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </PageGrid>
        </body>
      </html>
    </>
  );
}

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
`;
