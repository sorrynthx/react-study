import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotaionAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotaionAnimation} 1s linear infinite;
  &:hover {
    background-color: yellow;
  }
  span {
    font-size: 36px;
    &:hover {
      font-size: 90px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🥝</span>
      </Box>
    </Wrapper>
  );
}

export default App;