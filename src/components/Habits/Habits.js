import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../shared/Container";
import Input from "../shared/Input";
import { useState } from "react";

import Button from "../shared/Button";

export default function Habits() {

    function newHabit() {

    }

    const [selectedDaysWeek, setSelectedDaysWeek] = useState([
        {
            value: "D",
            isSelected: false
        },
        {
            value: "S",
            isSelected: false
        },
        {
            value: "T",
            isSelected: false
        },
        {
            value: "Q",
            isSelected: false
        },
        {
            value: "Q",
            isSelected: false
        },
        {
            value: "S",
            isSelected: false
        },
        {
            value: "S",
            isSelected: false
        }
    ]);

    return (
        <Container>
            <Header></Header>
            <Title>
                <h1>Meus hábitos</h1>
                <Button width={40} height={35} onClick={newHabit}>+</Button>
            </Title>
            <Form>
                <Input placeholder="nome do hábito" />

                <div>
                    {selectedDaysWeek.map((day, index) => (

                        <DayInput type="button" value={day.value} selected={day.isSelected}
                            onClick={() => {

                                const tmpSelectedDaysWeek = [...selectedDaysWeek];
                                if (day.isSelected) {
                                    tmpSelectedDaysWeek[index].isSelected = false;
                                    setSelectedDaysWeek(tmpSelectedDaysWeek);
                                }
                                else {
                                    tmpSelectedDaysWeek[index].isSelected = true;
                                    setSelectedDaysWeek(tmpSelectedDaysWeek);
                                }
                            }} />
                    ))}

                </div>
                <Buttons>
                    <Button width={84} height={35} type="cancel">Cancelar</Button>
                    <Button width={84} height={35}>Salvar</Button>
                </Buttons>

            </Form>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Footer></Footer>
        </Container>
    );
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Form = styled.form`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
    height: 180px;
    position: relative;
    display: flex;
    flex-direction: column;

    button {
        margin-top: 29px;
        margin-right: 4px;
        font-size: 16px;
    }
`

const DayInput = styled.input`
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 20px;

    margin: 2px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background-color: ${props => props.selected ? '#CFCFCF' : '#FFFFFF'};
    
    color: ${props => props.selected ? '#FFFFFF' : '#DBDBDB'};    
`

const Buttons = styled.div`
    padding-left: 130px;
`