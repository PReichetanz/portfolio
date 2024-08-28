import Image from "next/image";
import styled from "styled-components";

export default function Introduction() {
  return (
    <section>
      <ImageWrapper>
        <StyledHeading>
          Hallo, ich bin Paul. <br />
          Frontend-Entwickler <StyledSpan>mit Sinn</StyledSpan> <br />
          für&apos;s Team.
        </StyledHeading>
        <StyledImage
          src="/Reichetanz.jpeg"
          alt="Profilfoto"
          width="200"
          height="200"
        />
      </ImageWrapper>
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
          einem Code geschrieben sind, der wartbar und leicht zu verstehen ist.
        </p>
      </TextWrapper>
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
`;

const StyledImage = styled(Image)`
  align-self: center;
  border-radius: 50%;
`;

const StyledSpan = styled.span`
  color: var(--color-tertiary);
`;

const TextWrapper = styled.div`
  padding-inline: 1rem;
  @media screen and (min-width: 720px) {
    display: flex;
    /* display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    gap: 2rem;
    padding: 0 2rem;
  }
`;
