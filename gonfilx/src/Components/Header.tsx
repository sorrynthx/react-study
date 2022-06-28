import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: rgba(255, 255, 255, 0.5);
    height: 80px;
    font-size: 12px;
`;

const Col = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.svg`
    margin-right: 50px;
`;

const Items = styled.ul`
    display: flex;
    align-items: center;    
`;

const Item = styled.li`
    margin-right: 20px;
`;

function Header() {
    return (
        <Nav>
            <Col>
                <Logo />
                <Items>
                    <Item>홈</Item>
                    <Item>Tv쑈</Item>
                </Items>
            </Col>
            <Col>
                <button>search</button>
            </Col>
        </Nav>
    )
}

export default Header;