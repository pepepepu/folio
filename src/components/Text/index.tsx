import styled from "styled-components";
import { theme } from "../../styles/theme";

const Text = styled.p<{
  textAlign?: string;
  $mobileTextAlign?: string;
  textwidth?: string;
  $mobileTextWidth?: string;
  fontFamily?: string;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  $mobileFontSize?: string;
  letterSpacing?: string;
  textTransform?: string;
  $hideOnMobile?: boolean;
  $hideOnDesktop?: boolean;
}>`
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  font-family: ${({ fontFamily }) => fontFamily || theme.fonts.inter};
  font-size: ${({ fontSize }) => fontSize || "15px"};
  color: ${({ color }) => color || theme.colors.black};
  text-transform: ${({ textTransform }) => textTransform || "uppercase"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "-1px"};
  width: ${({ textwidth }) => textwidth || "auto"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  display: ${({ $hideOnDesktop }) => ($hideOnDesktop ? "none" : "block")};

  @media (max-width: 768px) {
    font-size: ${({ $mobileFontSize, fontSize }) =>
      $mobileFontSize || fontSize || "15px"};
    width: ${({ $mobileTextWidth, textwidth }) =>
      $mobileTextWidth || textwidth || "auto"};
    text-align: ${({ $mobileTextAlign, textAlign }) =>
      $mobileTextAlign || textAlign || "center"};
    display: ${({ $hideOnMobile, $hideOnDesktop }) =>
      $hideOnMobile ? "none" : $hideOnDesktop ? "block" : "block"};
  }
`;

export default Text;
