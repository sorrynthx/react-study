import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Do Hyeon', sans-serif;
    color: ${(props) => props.theme.accentColor};
`;

function Coins() {
    return (
        <>
        <Title>코인</Title>
        </>
    );
}

export default Coins;