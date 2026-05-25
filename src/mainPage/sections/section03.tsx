import styled, { keyframes } from "styled-components";
import { Box, GridItem, Text, Wrapper } from "../../components";

const breathe1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
  50% { transform: translate(8%, 12%) scale(1.15); opacity: 1; }
`;

const breathe2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
  50% { transform: translate(-10%, -10%) scale(1.2); opacity: 0.9; }
`;

const breathe3 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
  50% { transform: translate(12%, -8%) scale(1.1); opacity: 0.8; }
`;

const breathe4 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
  50% { transform: translate(-12%, 12%) scale(1.25); opacity: 0.9; }
`;

const SectionWrapper = styled(Wrapper)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const ContentBox = styled(Box)`
  position: relative;
  z-index: 2;
`;

const MediaContainer = styled.div`
  grid-row: 1 / 5;
  grid-column: 1 / 6;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Blob1 = styled.div`
  position: absolute;
  top: -15%;
  left: -10%;
  width: 60%;
  height: 60%;
  background-color: ${({ theme }) => theme.colors.babyBlue};
  border-radius: 50%;
  filter: blur(80px);
  animation: ${breathe1} 14s ease-in-out infinite;
`;

const Blob2 = styled.div`
  position: absolute;
  bottom: -15%;
  right: -10%;
  width: 65%;
  height: 65%;
  background-color: ${({ theme }) => theme.colors.babyRed};
  border-radius: 50%;
  filter: blur(90px);
  animation: ${breathe2} 16s ease-in-out infinite;
`;

const Blob3 = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  width: 50%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.neonGreen};
  border-radius: 50%;
  filter: blur(70px);
  animation: ${breathe3} 18s ease-in-out infinite;
`;

const Blob4 = styled.div`
  position: absolute;
  top: -10%;
  right: 20%;
  width: 55%;
  height: 55%;
  background-color: ${({ theme }) => theme.colors.babyYellow};
  border-radius: 50%;
  filter: blur(85px);
  animation: ${breathe4} 15s ease-in-out infinite;
`;

const CenteredText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${({ theme }) => theme.fonts.dmSans};
  font-size: 0.9rem;
  font-weight: 900;
  font-style: italic;
  color: ${({ theme }) => theme.colors.black};
  z-index: 10;
  text-align: center;
  pointer-events: none;
  letter-spacing: -2px;
`;

export function Section03() {
  return (
    <SectionWrapper id="pedro">
      <ContentBox>
        <MediaContainer>
          <Blob1 />
          <Blob2 />
          <Blob3 />
          <Blob4 />
          <CenteredText>pedro</CenteredText>
        </MediaContainer>

        <GridItem row="5" col="1 /4" justify="flex-start" align="center">
          <Text textwidth="80%" textAlign="left" fontSize="12px">
            Tudo começou com a curiosidade de entender como as coisas funcionam
            sob o capô. O que era um interesse por computadores transformou-se
            numa obsessão por construir interfaces que respirem. A minha
            trajetória foi moldada pela união entre a precisão do front-end e a
            sensibilidade do design. Domino o ecossistema React, Next.js e
            TypeScript, mas é o pensamento de UX que dita o tom: se não for
            útil, se não trouxer clareza, não deve estar no produto.
          </Text>
        </GridItem>

        <GridItem row="5" col="4 / 6" justify="flex-end" align="center">
          <Text textwidth="80%" textAlign="left" fontSize="12px">
            Acredito que a tecnologia deve ser invisível. O meu objetivo é criar
            produtos digitais onde o utilizador não percebe o código, apenas
            sente a eficiência. Não sou apenas um desenvolvedor; sou alguém que
            questiona o porquê de cada interação. Estou em constante evolução,
            procurando o equilíbrio entre arquiteturas escaláveis e experiências
            que toquem as pessoas de forma real. Adiante, sempre.
          </Text>
        </GridItem>
      </ContentBox>
    </SectionWrapper>
  );
}
