import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Habits() {
    return (
        <Container>
            <Header></Header>
            <h1>Meus hábitos</h1>
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