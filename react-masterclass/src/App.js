import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

const Input2 = styled.input`

`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input2 />
    </Father>
  );
}

export default App;