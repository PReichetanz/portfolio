import Image from "next/image";
import { ReactElement } from "react";
import styled from "styled-components";
import Link from "next/link"

type ProjectType = {
  name: string;
  description: string;
  imageURL: string;
  alt?: string;
  slug: string
};

export default function Project({
  name,
  description,
  imageURL,
  alt,
  slug
}: ProjectType): ReactElement {
  return (
    <ProjectWrapper>
      <StyledImage
        src={imageURL}
        alt={alt || ""}
        fill
        sizes="(min-width: 80px) 50%, 100%"
      />
      <h3>{name}</h3>
      <StyledDescription>{description}</StyledDescription>
      <Link href={slug}>
        Projekt ansehen &gt;
      </Link>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.article`
  position: relative;
  img {
    box-shadow: var(--shadow-elevation-medium);
  }
`;

const StyledDescription = styled.p`
  padding: 0;
`;

const StyledImage = styled(Image)`
  position: relative !important;
  display: block;
  object-fit: contain;
  border-radius: 8px;
`;
