import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../shared/Container";

export default function Habits() {
    return (
        <Container>
            <Header></Header>
            <Title>
                <h1>Meus hábitos</h1>
                <Button>+</Button>
            </Title>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Footer></Footer>
        </Container>
    );
}

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