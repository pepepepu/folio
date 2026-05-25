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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
        <GridItem row="1" col="3" justify="center" align="flex-start">
          <Text className="gsap-text" fontWeight="900">
            front end / ui&ux designer
          </Text>
        </GridItem>

        <GridItem row="1" col="1" justify="center" align="center">
          <TextCenter
            className="gsap-text"
            onClick={() => scrollToSection("razoes")}
          >
            [razões]
          </TextCenter>
        </GridItem>

        <GridItem row="2" col="1 / 3" justify="flex-start" align="center">
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
        </GridItem>

        <GridItem row="3" col="4" justify="center" align="center">
          <TextCenter
            className="gsap-text"
            onClick={() => scrollToSection("pedro")}
          >
            [pedro]
          </TextCenter>
        </GridItem>

        <GridItem row="4" col="4 / 6" justify="flex-end" align="center">
          <Text
            className="gsap-text"
            textwidth="100%"
            textAlign="right"
            fontWeight="900"
          >
            Minha curiosidade dita a técnica, meu repertório dita o visual.
            Transformo o que está na tela em algo que respira, funciona e,
            principalmente, comunica. Vamos construir algo novo?
          </Text>
        </GridItem>

        <GridItem row="4" col="1" justify="center" align="center">
          <TextCenter
            className="gsap-text"
            onClick={() => scrollToSection("projetos")}
          >
            [projetos]
          </TextCenter>
        </GridItem>

        <GridItem row="5" col="5" justify="center" align="center">
          <TextCenter
            className="gsap-text"
            onClick={() => scrollToSection("contato")}
          >
            [contato]
          </TextCenter>
        </GridItem>
      </Box>
    </Wrapper>
  );
}
