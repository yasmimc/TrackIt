import styled from "styled-components";

export default function Footer() {
    return (
        <Container>
            <ul>
                <li>
                    Hábitos
                </li>
                <Today>
                    Hoje
                </Today>
                <li>
                    Histórico
                </li>
            </ul>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: #FFFFFF;
    padding: 0 36px;
    
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
    }
`
const Today = styled.li`
    background-color: #52B6FF;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    position: absolute;
    bottom: 10px;
    left: calc((100vw - 91px)/2);
`