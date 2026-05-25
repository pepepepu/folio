import styled from "styled-components";
import { theme } from "../../styles/theme";

const Text = styled.p<{
  textAlign?: string;
  textwidth?: string;
  fontFamily?: string;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  letterSpacing?: string;
  textTransform?: string;
}>`
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  font-family: ${({ fontFamily }) => fontFamily || theme.fonts.inter};
  font-size: ${({ fontSize }) => fontSize || "15px"};
  color: ${({ color }) => color || theme.colors.black};
  text-transform: ${({ textTransform }) => textTransform || "uppercase"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "-1px"};

  width: ${({ textwidth }) => textwidth || "auto"};
  text-align: ${({ textAlign }) => textAlign || "center"};
`;

export default Text;
