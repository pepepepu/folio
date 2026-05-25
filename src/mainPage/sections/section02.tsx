import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Box, GridItem, Text, Wrapper } from "../../components";

const GiantP = styled.div`
  position: absolute;
  top: 60%;
  left: 0%;
  transform: translateY(-50%);
  font-size: 80vh;
  font-family: ${({ theme }) => theme.fonts.ballet};
  color: ${({ theme }) => theme.colors.babyBlue};
  z-index: 0;
  filter: url(#wiggle-giant-p);
  pointer-events: none;
  line-height: 0;
`;

const SvgFilter = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
`;

export function Section02() {
  return (
    <Wrapper id="razoes">
      <SvgFilter>
        <defs>
          <filter
            id="wiggle-giant-p"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.3 0.02"
              numOctaves="110"
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

      <GiantP>Pp</GiantP>

      <Box>
        <GridItem row="2 / 5" col="4 / 6" justify="flex-end" align="center">
          <Text
            textwidth="100%"
            textAlign="right"
            color={theme.colors.black}
            fontWeight="500"
          >
            Todo processo criativo nasce de um ponto de origem. Para mim, esse
            ponto é o <strong>P</strong>. Mais do que a inicial do meu nome, ele
            dita o ritmo da minha execução:
            <strong>Propósito</strong>, <strong>Processo</strong> e{" "}
            <strong>Performance</strong>.
            <br />
            <br />O <strong>Propósito</strong> é o que ancora o design, a
            intenção por trás de cada pixel. O <strong>Processo</strong> é onde
            a mágica acontece: a iteração constante, o movimento, o ajuste fino.
            É esse "wiggle", esse estado de constante mutação, que permite que
            uma ideia respire e ganhe forma antes de se tornar rígida.
            <br />
            <br />
            Por fim, a <strong>Performance</strong>. Onde o código encontra a
            fluidez. Não basta criar algo que seja visualmente impactante; é
            preciso que seja construído com precisão para que a experiência seja
            impecável, do carregamento à interação final.
          </Text>
        </GridItem>

        <GridItem row="5" col="1/6" justify="center" align="center">
          <Text color={theme.colors.black} fontWeight="500">
            UX é sobre percepção. UI é sobre intenção. O meu código é a ponte
            que une o sentir ao ver.
          </Text>
        </GridItem>
      </Box>
    </Wrapper>
  );
}
