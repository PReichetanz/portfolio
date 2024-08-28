import Image from "next/image";
import styled from "styled-components";
import FadeIn from "../utils/FadeIn";

export default function Introduction() {
  return (
    <section>
      <ImageWrapper>
        <StyledHeading>
          Hallo, ich bin Paul. <br />
          Frontend-Entwickler <StyledSpan>mit Sinn</StyledSpan> <br />
          für&apos;s Team.
        </StyledHeading>
        <FadeIn delay={1400} duration={1600}>
          <StyledImage
            src="/Reichetanz.jpeg"
            alt="Profilfoto"
            width="200"
            height="200"
          />
        </FadeIn>
      </ImageWrapper>
      <FadeIn delay={1900} duration={1100}>
        <TextWrapper>
          <div>
            <p>
              Ich bin Frontend-Entwickler mit kommunikationswissenschaftlichem
              Hintergrund.
            </p>
            <p>
              Während ich als Entwickler gewachsen bin, habe ich mit erfahrenen
              Produktmenschen und Entwickler:innen zusammengearbeitet, die meine
              Ansprüche an eine Webanwendung erhöht haben.
            </p>
          </div>
          <p>
            Durch diese Erfahrungen hatte ich die Möglichkeit, ansprechende
            Produkte zu entwickeln, die nicht nur Spaß machen, sondern auch in
            einem Code geschrieben sind, der wartbar und leicht zu verstehen
            ist.
          </p>
        </TextWrapper>
      </FadeIn>
    </section>
  );
}
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeading = styled.h2`
  padding: 5vw;
  animation-duration: 3s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      translate: -150vw;
    }
    to {
      translate: 0;
    }
  }
`;

const StyledImage = styled(Image)`
  align-self: center;
  border-radius: 50%;
`;

const StyledSpan = styled.span`
  color: var(--color-tertiary);
`;

const TextWrapper = styled.div`
  @media screen and (min-width: 720px) {
    display: flex;
    gap: 2rem;
  }
`;
