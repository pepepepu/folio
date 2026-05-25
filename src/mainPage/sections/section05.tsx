import styled from "styled-components";
import pepeImg from "../../assets/pepe.png";
import { Box, GridItem, Text, Wrapper } from "../../components";
import { theme } from "../../styles/theme";

const GiantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: url(#wiggle-giant-img);
  pointer-events: none;
`;

const ContentBox = styled(Box)`
  position: relative;
  z-index: 1;
`;

const SvgFilter = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export function Section05() {
  return (
    <Wrapper id="contato">
      <SvgFilter>
        <defs>
          <filter
            id="wiggle-giant-img"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03 0.02"
              numOctaves="3"
              result="noise"
            >
              <animate
                attributeName="seed"
                values="0;1;2;3;4;5"
                dur="0.9s"
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

      <ContentBox>
        <GridItem
          row="2"
          col="3"
          $mobileRow="3"
          $mobileCol="1/4"
          justify="center"
          align="flex-end"
        >
          <Text
            textwidth="100%"
            textAlign="center"
            textTransform="lowercase"
            fontFamily={theme.fonts.inter}
            letterSpacing="-1px"
            fontSize="1rem"
            fontWeight="900"
          >
            pedro paulo oliveira barros souza
          </Text>
        </GridItem>

        <GridItem
          row="3"
          col="3"
          $mobileRow="4"
          $mobileCol="1/4"
          justify="center"
          align="center"
        >
          <GiantImage src={pepeImg} alt="" />
        </GridItem>

        <GridItem
          row="4"
          col="3"
          $mobileRow="5"
          $mobileCol="1/4"
          justify="center"
          align="flex-start"
        >
          <Text
            textwidth="100%"
            textAlign="center"
            textTransform="lowercase"
            fontFamily={theme.fonts.inter}
            letterSpacing="-1px"
            fontSize="1rem"
            fontWeight="900"
          >
            front end developer • ui&ux designer
          </Text>
        </GridItem>
        <GridItem
          row="1"
          col="1"
          $mobileRow="1"
          $mobileCol="1"
          justify="flex-start"
          align="flex-start"
        >
          <SocialLink
            href="https://www.linkedin.com/in/pp-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text textTransform="lowercase">[linkedin]</Text>
          </SocialLink>
        </GridItem>

        <GridItem
          row="1"
          col="5"
          $mobileRow="1"
          $mobileCol="3"
          justify="flex-end"
          align="flex-start"
        >
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            <Text textTransform="lowercase">[lattes]</Text>
          </SocialLink>
        </GridItem>

        <GridItem
          row="5"
          col="1"
          $mobileRow="7"
          $mobileCol="1"
          justify="flex-start"
          align="flex-end"
        >
          <SocialLink
            href="https://www.behance.net/pupupepp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text textTransform="lowercase">[behance]</Text>
          </SocialLink>
        </GridItem>

        <GridItem
          row="5"
          col="5"
          $mobileRow="7"
          $mobileCol="3"
          justify="flex-end"
          align="flex-end"
        >
          <SocialLink
            href="https://github.com/pepepepu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text textTransform="lowercase">[github]</Text>
          </SocialLink>
        </GridItem>
      </ContentBox>
    </Wrapper>
  );
}
