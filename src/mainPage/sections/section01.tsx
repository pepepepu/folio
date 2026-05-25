import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Box, GridItem, WigglyEffect, Wrapper, Text } from "../../components";
import pepeImg from "../../assets/pepe-vector.svg";

const BackgroundWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 65%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1;

  @media (max-width: 768px) {
    width: 100dvw;
    height: 100dvh;
    left: 0;
    transform: none;
    bottom: auto;
    top: 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  will-change: opacity, filter;
`;

const TextCenter = styled.p`
  font-family: ${({ theme }) => theme.fonts.dmSans};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -2px;
  will-change: filter, opacity, transform;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ResponsiveGridItem = styled(GridItem)`
  @media (max-width: 768px) {
    grid-column: ${(props) => props.$mobileCol || props.col};
    grid-row: ${(props) => props.$mobileRow || props.row};
  }
`;

export function Section01() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const texts = gsap.utils.toArray(".gsap-text");
      tl.fromTo(
        ".pepe-bg-img",
        { opacity: 0, filter: "blur(20px)", scale: 0.95 },
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        },
      ).fromTo(
        texts,
        { opacity: 0, filter: "blur(20px)", scale: 1.05 },
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.8,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.8",
      );
    }, containerRef.current);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper ref={containerRef}>
      <BackgroundWrapper>
        <ImageWrapper className="pepe-bg-img">
          <WigglyEffect id="pepe-bg">
            <image
              href={pepeImg}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMax meet"
            />
          </WigglyEffect>
        </ImageWrapper>
      </BackgroundWrapper>

      <Box>
        <ResponsiveGridItem
          row="1"
          col="3"
          $mobileRow="1"
          $mobileCol="1 / 4"
          justify="center"
          align="flex-start"
        >
          <Text className="gsap-text" fontWeight="900" textAlign="center">
            front end / ui&ux designer
          </Text>
        </ResponsiveGridItem>

        <ResponsiveGridItem
          row="2"
          col="5"
          $mobileRow="3"
          $mobileCol="3"
          justify="center"
          align="center"
        >
          <TextCenter
            className="gsap-text"
            onClick={() => scrollToSection("pedro")}
          >
            [pedro]
          </TextCenter>
        </ResponsiveGridItem>

        <ResponsiveGridItem
          row="2"
          col="1 / 3"
          $mobileRow="1 / 5"
          $mobileCol="1 / 3"
          justify="flex-start"
          align="center"
        >
          <Text
            className="gsap-text"
            textwidth="100%"
            textAlign="left"
            fontWeight="900"
          >
            Transformo complexidade em interfaces fluidas. Meu trabalho une a
            precisão do código à sensibilidade do design, criando sistemas que
            não apenas funcionam, mas se conectam.
          </Text>
        </ResponsiveGridItem>

        <ResponsiveGridItem
          row="1"
          col="1"
          $mobileRow="1"
          $mobileCol="3"
          justify="center"
          align="center"
        >
          <TextCenter
            className="gsap-text"
            onClick={() => scrollToSection("razoes")}
          >
            [razões]
          </TextCenter>
        </ResponsiveGridItem>

        <ResponsiveGridItem
          row="4"
          col="4 / 6"
          $mobileRow="5 / 8"
          $mobileCol="2 / 4"
          justify="flex-end"
          align="center"
        >
          <Text
            className="gsap-text"
            textwidth="100%"
            textAlign="right"
            fontWeight="900"
          >
            Mais do que criar interfaces, construo pontes entre a intenção do
            produto e a experiência do usuário. Do pixel perfeito à performance
            técnica, foco em transformar visão em realidade digital de alto
            impacto. Adiante.
          </Text>
        </ResponsiveGridItem>

        <ResponsiveGridItem
          row="4"
          col="1"
          $mobileRow="5"
          $mobileCol="1"
          justify="center"
          align="center"
        >
          <TextCenter
            className="gsap-text"
            onClick={() => scrollToSection("projetos")}
          >
            [projetos]
          </TextCenter>
        </ResponsiveGridItem>

        <ResponsiveGridItem
          row="5"
          col="5"
          $mobileRow="7"
          $mobileCol="1"
          justify="center"
          align="center"
        >
          <TextCenter
            className="gsap-text"
            onClick={() => scrollToSection("contato")}
          >
            [contato]
          </TextCenter>
        </ResponsiveGridItem>
      </Box>
    </Wrapper>
  );
}
