import type { ReactNode } from "react";

interface WigglySvgProps {
  children: ReactNode;
  id: string;
  viewBox?: string;
  baseFrequency?: string;
  scale?: string;
  dur?: string;
  preserveAspectRatio?: string;
}

const WigglyEffect = ({
  children,
  id,
  viewBox,
  baseFrequency = "0.03 0.04",
  scale = "5",
  dur = "0.4s",
  preserveAspectRatio = "xMidYMid meet",
}: WigglySvgProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox={viewBox}
    preserveAspectRatio={preserveAspectRatio}
    style={{ overflow: "visible" }}
  >
    <defs>
      <filter
        id={`wiggle-${id}`}
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency={baseFrequency}
          numOctaves="3"
          result="noise"
        >
          <animate
            attributeName="seed"
            values="0;1;2;3"
            dur={dur}
            calcMode="discrete"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale={scale}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
    <g filter={`url(#wiggle-${id})`}>{children}</g>
  </svg>
);

export default WigglyEffect;
