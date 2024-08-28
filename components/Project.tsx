import Image from "next/image";
import { ReactElement } from "react";
import styled from "styled-components";

type ProjectType = {
  name: string;
  description: string;
  imageURL: string;
  deploymentURL: string;
  alt?: string;
};

export default function Project({
  name,
  description,
  imageURL,
  deploymentURL,
  alt,
}: ProjectType): ReactElement {
  return (
    <ProjectWrapper>
      <StyledImage
        src={imageURL}
        alt={alt || ""}
        fill
        sizes="(min-width: 80px) 50vw, 100vw"
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={deploymentURL} target="blank">
        Projekt ansehen &gt;
      </a>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.article`
  position: relative;
  img {
    box-shadow: var(--shadow-elevation-medium);
  }
`;

const StyledImage = styled(Image)`
  position: relative !important;
  display: block;
  object-fit: contain;
  border-radius: 8px;
`;
