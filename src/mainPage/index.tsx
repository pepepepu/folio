import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Section01 } from "./sections/section01";
import { Section02 } from "./sections/section02";
import { Section03 } from "./sections/section03";
import { Section04 } from "./sections/section04";
import { Section05 } from "./sections/section05";

const HideNativeScrollbar = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

const ScrollbarTrack = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 16px;
  height: 100dvh;
  z-index: 9999;
  pointer-events: none;
`;

const ScrollbarThumb = styled.div`
  position: absolute;
  top: 0;
  right: 4px;
  width: 8px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  filter: url(#wiggle-scrollbar);
  will-change: transform, height;
`;

const SvgFilter = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
`;

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500dvh;
  overflow-x: hidden;
`;

export function MainPage() {
  const [scrollData, setScrollData] = useState({ height: 0, top: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const scrollPercentage = scrollTop / (documentHeight - windowHeight);
      const thumbHeight = Math.max(
        (windowHeight / documentHeight) * windowHeight,
        60,
      );
      const thumbTop = scrollPercentage * (windowHeight - thumbHeight);

      setScrollData({ height: thumbHeight, top: thumbTop });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <HideNativeScrollbar />

      <SvgFilter>
        <defs>
          <filter
            id="wiggle-scrollbar"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05 0.15"
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

      <ScrollbarTrack>
        <ScrollbarThumb
          style={{
            height: `${scrollData.height}px`,
            transform: `translateY(${scrollData.top}px)`,
          }}
        />
      </ScrollbarTrack>

      <PageContainer>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
      </PageContainer>
    </>
  );
}
