import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { Box, GridItem, Wrapper, Text } from "../../components";
import StretchedLink from "../../components/StretchedLink";
import { theme } from "../../styles/theme";
import projectData from "../../data/projectData";

const BlurredCircle = styled.div<{ $bgColor: string; $circleSize: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ $circleSize }) => $circleSize};
  height: ${({ $circleSize }) => $circleSize};
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor};
  filter: blur(100px);
  z-index: 0;
  will-change: transform, opacity, width, height, background-color;
  transition:
    background-color 0.8s ease,
    width 0.8s ease,
    height 0.8s ease;
`;

const CenterStretchedTextWrapper = styled.div`
  display: inline-block;
  transform: scale(0.5, 2);
  transform-origin: center;
  will-change: filter, opacity;
  transition: opacity 0.3s ease;
`;

const AnimWrapper = styled.div`
  will-change: filter, opacity, transform;
  display: inline-block;
`;

type ProjectKey = "default" | "aura" | "portal" | "zine" | "sistema";

export function Section04() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<ProjectKey>("default");

  const currentProject = projectData[hoveredProject];

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      gsap.to(circleRef.current, {
        scale: 1.15,
        opacity: 0.8,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      const fogElements = gsap.utils.toArray(".gsap-fog");

      gsap.fromTo(
        fogElements,
        {
          opacity: 0,
          filter: "blur(25px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 2,
          stagger: 0.15,
          ease: "power2.out",
        },
      );

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const xPos = (clientX - centerX) / centerX;
        const yPos = (clientY - centerY) / centerY;

        gsap.to(".parallax-item", {
          x: (_i, el) => xPos * parseFloat(el.dataset.speed || "30"),
          y: (_i, el) => yPos * parseFloat(el.dataset.speed || "30"),
          duration: 0.6,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper ref={sectionRef} id="projetos">
      <BlurredCircle
        ref={circleRef}
        $bgColor={currentProject.color}
        $circleSize={currentProject.size}
      />

      <Box>
        <GridItem row="2" col="2" justify="start" align="flex-start">
          <AnimWrapper className="gsap-fog parallax-item" data-speed="40">
            <StretchedLink
              text="aura"
              weight={"400"}
              href="https://musical-aura.vercel.app/"
              onMouseEnter={() => setHoveredProject("aura")}
              onMouseLeave={() => setHoveredProject("default")}
            />
          </AnimWrapper>
        </GridItem>

        <GridItem row="3/5" col="1/2" justify="center" align="center">
          <AnimWrapper className="gsap-fog parallax-item" data-speed="-30">
            <StretchedLink
              text="portal do servidor"
              weight={"200"}
              href="https://musical-aura.vercel.app/"
              size="3rem"
              textAlign="left"
              onMouseEnter={() => setHoveredProject("portal")}
              onMouseLeave={() => setHoveredProject("default")}
            />
          </AnimWrapper>
        </GridItem>

        <GridItem row="4" col="4" justify="flex-end" align="flex-start">
          <AnimWrapper className="gsap-fog parallax-item" data-speed="60">
            <StretchedLink
              text="zine"
              weight={"900"}
              href="https://make-my-zine.vercel.app/"
              size="5rem"
              textAlign="left"
              onMouseEnter={() => setHoveredProject("zine")}
              onMouseLeave={() => setHoveredProject("default")}
            />
          </AnimWrapper>
        </GridItem>

        <GridItem row="1/3" col="5" justify="flex-end" align="center">
          <AnimWrapper className="gsap-fog parallax-item" data-speed="-45">
            <StretchedLink
              text="sistema de gestão de demandas"
              weight={"400"}
              href="https://musical-aura.vercel.app/"
              size="2rem"
              textAlign="right"
              onMouseEnter={() => setHoveredProject("sistema")}
              onMouseLeave={() => setHoveredProject("default")}
            />
          </AnimWrapper>
        </GridItem>

        <GridItem row="1/3" col="3" justify="center" align="center">
          <AnimWrapper className="gsap-fog">
            <Text
              textwidth="50%"
              textAlign="justify"
              fontWeight="900"
              fontSize="12px"
            >
              A robustez técnica é o que sustenta a visão. Utilizo React.js,
              Next.js e TypeScript para arquitetar soluções escaláveis, focadas
              em performance e código limpo. Do back-end em Node.js à camada de
              interface, cada linha é pensada para garantir precisão e uma
              experiência digital sem atritos.
            </Text>
          </AnimWrapper>
        </GridItem>

        <GridItem row="3" col="2/5" justify="center" align="center">
          <CenterStretchedTextWrapper className="gsap-fog">
            <Text
              textwidth="100%"
              textAlign="center"
              fontFamily={theme.fonts.stackSansText}
              fontWeight="100"
              fontSize="3rem"
              letterSpacing="-3px"
              textTransform="lowercase"
            >
              {currentProject.text}
            </Text>
          </CenterStretchedTextWrapper>
        </GridItem>

        <GridItem row="4/6" col="3" justify="center" align="center">
          <AnimWrapper className="gsap-fog">
            <Text
              textwidth="50%"
              textAlign="justify"
              fontWeight="900"
              fontSize="12px"
            >
              O design é minha linguagem de conexão. Através do Figma e Adobe
              Creative Cloud, prototipo experiências que ganham vida com motion
              e gráficos vetoriais. Transformo interfaces em produtos orgânicos,
              unindo a sensibilidade visual à fluidez técnica, do conceito
              estático até a interação final que o usuário sente.
            </Text>
          </AnimWrapper>
        </GridItem>
      </Box>
    </Wrapper>
  );
}
