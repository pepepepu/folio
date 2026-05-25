import styled from "styled-components";
const GridItem = styled.div<{
  row: string;
  col: string;
  justify?: string;
  align?: string;
  $mobileRow?: string;
  $mobileCol?: string;
}>`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};

  grid-row: ${({ row }) => row};
  grid-column: ${({ col }) => col};

  @media (max-width: 768px) {
    grid-row: ${({ $mobileRow, row }) => $mobileRow || row};
    grid-column: ${({ $mobileCol, col }) => $mobileCol || col};
  }
`;

export default GridItem;
