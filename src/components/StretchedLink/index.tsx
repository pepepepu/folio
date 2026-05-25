import styled from "styled-components";

const LinkContainer = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  padding-right: 15px;
  will-change: filter, opacity;
`;

const StretchedText = styled.span<{
  $weight: string | number;
  $size: string;
  $color: string;
  $textAlign: string;
}>`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ $weight }) => $weight};
  font-size: ${({ $size }) => $size};
  color: ${({ $color }) => $color};
  text-align: ${({ $textAlign }) => $textAlign};
  text-transform: lowercase;
  letter-spacing: -0.06em;
  transform-origin: center;
  line-height: 0.8;
`;

interface StretchedLinkProps {
  text: string;
  href: string;
  weight?: string | number;
  size?: string;
  color?: string;
  textAlign?: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function StretchedLink({
  text,
  href,
  weight = 300,
  size = "5rem",
  color = "#232122",
  textAlign = "center",
  className,
  onMouseEnter,
  onMouseLeave,
}: StretchedLinkProps) {
  return (
    <LinkContainer
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <StretchedText
        $weight={weight}
        $size={size}
        $color={color}
        $textAlign={textAlign}
      >
        {text}
      </StretchedText>
    </LinkContainer>
  );
}

export default StretchedLink;
