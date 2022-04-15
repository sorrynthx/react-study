import styled from "styled-components";

// Container의 props의 타입을 설명, 어떻게 보일지 정의
interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

// Container의 props를 styled-components에 전달
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
`;

// Circle의 props의 타입을 설명, 어떻게 보일지 정의 (? 물음표 붙이면 optional이 된다.)
interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({ bgColor, borderColor, text = "plz input text" }: CircleProps) {
    return (
        // ?? borderColor undefined이면 bgColor 대체  
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} >  
            {text}
        </Container>
    );
}

export default Circle;