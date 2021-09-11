import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../shared/Container";
import Input from "../shared/Input";
import { useContext, useEffect, useState } from "react";

import Button from "../shared/Button";
import DayInput from "../shared/DayInput";

import Habit from "./Habit";

import { getHabits, createNewHabit } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";

import { defaultWeekDays } from "../../services/habits";

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

    useEffect(() => {
        getHabits(loggedUser.token)
            .then((resp) => {
                setHabits(resp.data)
            })
    }, []);

    const [selectedDaysWeek, setSelectedDaysWeek] = useState(defaultWeekDays);


    function selectDay(day, index) {
    const tmpSelectedDaysWeek = [...selectedDaysWeek];

        if (day.isSelected) {
            tmpSelectedDaysWeek[index].isSelected = false;
            setSelectedDaysWeek(tmpSelectedDaysWeek);
        }
        else {
            tmpSelectedDaysWeek[index].isSelected = true;
            setSelectedDaysWeek(tmpSelectedDaysWeek);
        }      
        setNewHabit({ ...newHabit, days: (selectedDaysWeek.filter((day) => day.isSelected)).map((dayFiltered, index) => (index)) })
    }

    function createHabit(event) {
        event.preventDefault();
        if (!selectedDaysWeek.find((day) => day.isSelected))
            return alert("Escolha pelo menos um dia da semana");
        createNewHabit(loggedUser.token, newHabit).then(()=>{
            getHabits(loggedUser.token)
            .then((resp) => {
                setHabits(resp.data)
            })
        })
        setSelectedDaysWeek(defaultWeekDays);
        setCreatingHabit(false);
        setNewHabit({
            name: "",
            days: []
        })
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
                <Form onSubmit={createHabit}>

                    <Input placeholder="nome do hábito" required
                        onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
                    />
                    <div>
                        {selectedDaysWeek.map((day, index) => (
                            <DayInput type="button" value={day.value} selected={day.isSelected}
                                onClick={()=>selectDay(day, index)} />
                        ))}

                    </div>
                    <Buttons>
                        <Button width={84} height={35} type="cancel">Cancelar</Button>
                        <Button width={84} height={35} type="submit">Salvar</Button>
                    </Buttons>

                </Form> : ""}


            <HabitsList>
                {habits.length > 0 ? habits.map((habit) => (
                    <Habit habit={habit} defaultWeekDays={defaultWeekDays}/>
                )) : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}

            </HabitsList>


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

const Buttons = styled.div`
    padding-left: 120px;
`

const HabitsList = styled.div`
`