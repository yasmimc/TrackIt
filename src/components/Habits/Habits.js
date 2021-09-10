import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Habits() {
    return (
        <Container>
            <Header></Header>
            <Title>
                <h1>Meus hábitos</h1>
                <Button>+</Button>
            </Title>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            <Footer></Footer>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    height: calc(100vh - 70px);
    width: 100vw;
    background-color: #E5E5E5;
    padding: 28px 17px;
    
    color: #666666;
    font-size: 18px;

    h1 {
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 28px;
    }
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
    border: none;
    height: 35px;
    width: 40px;
    font-size: larger;
    color: #FFFFFF;

    background-color: #52B6FF;
    border-radius: 4.63636px;
`