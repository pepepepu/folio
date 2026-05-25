import styled from "styled-components";

const GridItem = styled.div<{
  row: string;
  col: string;
  justify?: string;
  align?: string;
}>`
  grid-row: ${({ row }) => row};
  grid-column: ${({ col }) => col};

  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
`;

export default GridItem;
