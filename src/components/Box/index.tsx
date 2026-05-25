import styled from "styled-components";

const Box = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 20px;
  height: calc(100dvh - 120px);
  margin: 60px 100px;
`;

export default Box;
