import styled from "styled-components";

const Box = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 20px;
  height: calc(100dvh - 120px);
  margin: 60px 100px;

  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 10px;
    margin: 40px 20px;
    height: calc(100dvh - 80px);
  }
`;

export default Box;
