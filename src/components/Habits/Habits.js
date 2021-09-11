import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

import { getHabits, createNewHabit } from "../../services/trackit";
import { defaultWeekDays } from "../../services/habits";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Habit from "./Habit";

import Container from "../shared/Container";
import Input from "../shared/Input";

import Button from "../shared/Button";
import DayInput from "../shared/DayInput";

export default function Habits() {

    const { loggedUser } = useContext(UserContext);

    const [creatingHabit, setCreatingHabit] = useState(false);
    const [newHabit, setNewHabit] = useState({
        name: "",
        days: null
    })

    function newHabitBtn() {
        setCreatingHabit(true)
    }

    const [habits, setHabits] = useState([]);

    useEffect(() => {
        //criar uma func só pra atualizar os dados da lista
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

    const [isLoading, setLoading] = useState(false);

    function createHabit(event) {
        event.preventDefault();
        setLoading(true);
        if (!selectedDaysWeek.find((day) => day.isSelected))
            return alert("Escolha pelo menos um dia da semana");
        createNewHabit(loggedUser.token, newHabit).then(() => {  
            setLoading(false);
            setCreatingHabit(false);

            //criar uma func só pra atualizar os dados da lista
            getHabits(loggedUser.token)
                .then((resp) => {
                    setHabits(resp.data)
                })             
        })
        .catch((err)=>{
            setLoading(false);
            alert("Erro ao salvar hábito")
            console.log(err.response)
        });
        setSelectedDaysWeek(defaultWeekDays);
        setNewHabit({
            name: "",
            days: null
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

                    <Input disabled={isLoading} placeholder="nome do hábito" required
                        onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
                    />
                    <div>
                        {selectedDaysWeek.map((day, index) => (
                            <DayInput disabled={isLoading} type="button" value={day.value} selected={day.isSelected}
                                onClick={() => selectDay(day, index)} />
                        ))}

                    </div>
                    <Buttons>
                        <Button disabled={isLoading} width={84} height={35} type="cancel">Cancelar</Button>
                        <Button disabled={isLoading} width={84} height={35} type="submit">Salvar</Button>
                    </Buttons>

                </Form> : ""}


            <HabitsList>
                {habits.length > 0 ? habits.map((habit) => (
                    <Habit habit={habit} defaultWeekDays={defaultWeekDays} setHabits={setHabits} />
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