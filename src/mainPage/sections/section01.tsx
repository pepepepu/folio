import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Box, GridItem, Wrapper, Text } from "../../components";
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
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  will-change: opacity, filter;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
  filter: url(#wiggle-pepe-bg);

  @media (max-width: 768px) {
    object-position: center;
  }
`;

const SvgFilter = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
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
      <SvgFilter>
        <defs>
          <filter
            id="wiggle-pepe-bg"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03 0.04"
              numOctaves="3"
              result="noise"
            >
              <animate
                attributeName="seed"
                values="0;1;2;3"
                dur="0.4s"
                calcMode="discrete"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </SvgFilter>

      <BackgroundWrapper>
        <ImageWrapper className="pepe-bg-img">
          <StyledImg src={pepeImg} alt="" />
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
          <Text
            className="gsap-text"
            fontWeight="900"
            textAlign="center"
            $mobileTextAlign="center"
          >
            front end / ui&ux designer
          </Text>
        </ResponsiveGridItem>

        <ResponsiveGridItem
          row="2"
          col="1 / 3"
          $mobileRow="2 / 4"
          $mobileCol="1 / 4"
          justify="center"
          align="center"
        >
          <Text
            className="gsap-text"
            textwidth="100%"
            textAlign="left"
            $mobileTextAlign="center"
            fontWeight="900"
          >
            Transformo complexidade em interfaces fluidas. Meu trabalho une a
            precisão do código à sensibilidade do design, criando sistemas que
            não apenas funcionam, mas se conectam.
          </Text>
        </ResponsiveGridItem>

        <ResponsiveGridItem
          row="4"
          col="4 / 6"
          $mobileRow="4 / 6"
          $mobileCol="1 / 4"
          justify="center"
          align="center"
        >
          <Text
            $hideOnMobile
            className="gsap-text"
            textwidth="100%"
            textAlign="right"
            $mobileTextAlign="center"
            fontWeight="900"
          >
            Mais do que criar interfaces, construo pontes entre a intenção do
            produto e a experiência do usuário. Do pixel perfeito à performance
            técnica, foco em transformar visão em realidade digital de alto
            impacto. Adiante.
          </Text>
        </ResponsiveGridItem>

        <ResponsiveGridItem
          row="2"
          col="5"
          $mobileRow="6"
          $mobileCol="1"
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
          row="1"
          col="1"
          $mobileRow="6"
          $mobileCol="2"
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
          col="1"
          $mobileRow="6"
          $mobileCol="3"
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
          $mobileCol="1 / 4"
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
