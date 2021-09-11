import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../shared/Container";
import Input from "../shared/Input";
import { useContext, useEffect, useState } from "react";

import Button from "../shared/Button";

import { getHabits, createNewHabit } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";
import { useHistory } from "react-router";

export default function Habits() {

    const { loggedUser } = useContext(UserContext);

    const [creatingHabit, setCreatingHabit] = useState(false);
    const [newHabit, setNewHabit] = useState({
        name: "",
        days: []
    })

    function newHabitBtn() {
        setCreatingHabit(true)
    }

    const [habits, setHabits] = useState([]);
    console.log(habits)

    useEffect(() => {
        getHabits(loggedUser.token)
            .then((resp) => {
                setHabits(resp.data)
                // console.log(resp)
            })
    }, []);

    function selectDays() {
        setNewHabit({ ...newHabit, days: (selectedDaysWeek.filter((day) => day.isSelected)).map((dayFiltered, index) => (index)) })
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

    const history = useHistory();

    function createHabit(event) {
        event.preventDefault();
        if (!selectedDaysWeek.find((day) => day.isSelected))
            return alert("Escolha pelo menos um dia da semana");
        createNewHabit(loggedUser.token, newHabit);
        history.push("/hoje")
        history.push("/habitos");
    }

    return (
        <Container>
            <Header></Header>
            <Title>
                <h1>Meus hábitos</h1>
                <Button width={40} height={35} onClick={newHabitBtn}>
                    +
                </Button>
            </Title>

            {creatingHabit ?
                <Form visible onSubmit={createHabit}>
                    <Input placeholder="nome do hábito" required
                        onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
                    />

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
                                    selectDays();
                                }} />
                        ))}

                    </div>
                    <Buttons>
                        <Button width={84} height={35} type="cancel">Cancelar</Button>
                        <Button width={84} height={35} type="submit">Salvar</Button>
                    </Buttons>

                </Form> : ""}


            <div>
                {habits.length > 0 ? habits.map((habit) => (

                    <Habit >
                        {habit.name}
                        <div>
                            {selectedDaysWeek.map((day, index) => {                                
                                return (
                                    <DayInput type="button" value={day.value} selected={habit.days.includes(index)}
                                    />
                                )
                            })}

                        </div>

                    </Habit>
                )) : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}

            </div>


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
    margin-top: 5px;

    button {
        margin-top: 29px;
        margin-right: 4px;
        font-size: 16px;
    }
`

const Habit = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 5px;

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