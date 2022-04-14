import styled, {keyframes} from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
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

const Emoji = styled.span`
  font-size: 36px;
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
  ${Emoji}:hover {
    font-size: 85px;
  }
  
`;

function App() {
  return (
    <Wrapper>
      <Title>Hoooo</Title>
      <Box>
        <Emoji>🥝</Emoji>
      </Box>
      <Emoji>🍦</Emoji>
    </Wrapper>
  );
}

export default App;