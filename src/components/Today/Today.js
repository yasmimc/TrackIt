import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Container from "../shared/Container";
import { IoCheckmarkOutline } from "react-icons/io5";


export default function Today() {
    return (
        <>
            <Header></Header>
            <Container>
                <h1>Segunda, 17/05 </h1>
                <h2>67% dos hábitos concluídos</h2>
                <ul>
                    <Habit>
                        <Description>
                            <h1>Ler 1 capítulo de livro</h1>
                            <p>Sequência atual: <Green>4 dias</Green></p>
                            <p>Seu recorde: 5 dias</p>
                        </Description>
                        <CheckButton>
                            <IoCheckmarkOutline/>
                        </CheckButton>
                    </Habit>
                    <Habit>
                        <Description>
                            <h1>Ler 1 capítulo de livro</h1>
                            <p>Sequência atual: <Green>4 dias</Green></p>
                            <p>Seu recorde: 5 dias</p>
                        </Description>
                        <CheckButton>
                            <IoCheckmarkOutline/>
                        </CheckButton>
                    </Habit>
                    <Habit>
                        <Description>
                            <h1>Ler 1 capítulo de livro</h1>
                            <p>Sequência atual: <Green>4 dias</Green></p>
                            <p>Seu recorde: 5 dias</p>
                        </Description>
                        <CheckButton>
                            <IoCheckmarkOutline/>
                        </CheckButton>
                    </Habit>
                </ul>
            </Container>
            <Footer></Footer>
        </>
    );
}

const Habit = styled.li`
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    height: 94px;
    margin-bottom: 10px;
    padding: 13px 15px;

    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 20px;
        color: #666666;
        margin-bottom: 7px;
    }

    h2 {
        margin: 0;
    }

    p {
        font-size: 13px;
        margin: 0;
    }
`

const Description = styled.div`
`

const Green = styled.span`
    color: #8FC549;
`

const CheckButton = styled.button`
    width: 69px;
    height: 69px;
    background-color: #8FC549;
    border: none;
    border-radius: 5px;

    font-size: 35px;
    color: #FFFFFF;
`