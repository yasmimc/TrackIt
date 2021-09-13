import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Container from "../shared/Container";
import { FaCheck } from "react-icons/fa"

import UserContext from "../../contexts/UserContext";
import HabitsContext from "../../contexts/HabitsContext";
import { useContext, useEffect } from "react";

import { getTodayHabits, markHabitAsDone, markHabitAsUndone } from "../../services/trackit";
import { useState } from "react/cjs/react.development";
import dayjs from "dayjs";

export default function Today() {
    const { loggedUser } = useContext(UserContext);

    const [todayHabits, setTodayHabits] = useState([]);

    const {habitCompletionProgress, setHabitCompletionProgress} = useContext(HabitsContext);

    useEffect(() => {
        //trecho q se repete 3x, refatorar
        updateTodayHabits();
    }, [])

    useEffect(() => {
        if (todayHabits.length > 0) {
            const todayHabitsDone = todayHabits.filter(habit => habit.done);
            setHabitCompletionProgress((todayHabitsDone.length / todayHabits.length * 100).toFixed(0));
        }
    },);

    function updateTodayHabits(){
        getTodayHabits(loggedUser.token)
        .then((resp) => {
            // console.log(resp)
            setTodayHabits(resp.data)
        })
    }

    require("dayjs/locale/pt-br")
    const today = dayjs().locale('pt-br');

    function clickHabit(habit, index) {
        const tmpTodayHabits = [...todayHabits];

        if (!habit.done) {
            markHabitAsDone(loggedUser.token, habit.id)
                .then(() => updateTodayHabits())
                .catch(()=> updateTodayHabits());
            tmpTodayHabits[index].done = true;
            setTodayHabits(tmpTodayHabits);
        } else {
            markHabitAsUndone(loggedUser.token, habit.id)
                .then(() => updateTodayHabits())
                .catch(()=> updateTodayHabits());
            tmpTodayHabits[index].done = false;
            setTodayHabits(tmpTodayHabits);
        }

        if (tmpTodayHabits.length > 0) {
            const todayHabitsDone = tmpTodayHabits.filter(habit => habit.done);
            setHabitCompletionProgress((todayHabitsDone.length / todayHabits.length * 100).toFixed(0));
        }
    }

    return (
        <>
            <Header></Header>
            <Container>
                <h1>{today.locale('pt-br').format("dddd[, ]DD/MM")}</h1>
                <h2>{habitCompletionProgress ? `${habitCompletionProgress}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</h2>
                <ul>
                    {todayHabits.length > 0 ? todayHabits.map((habit, index) => (
                        <TodayHabit isDone={habit.done}>
                            <Description>
                                <h1>{habit.name}</h1>
                                <p>Sequência atual: <CurrentSequence isDone={habit.done}>{habit.currentSequence} dias</CurrentSequence></p>
                                <p>Seu recorde: <HighestSequence brokeRecorde={habit.currentSequence >= habit.highestSequence && habit.highestSequence !== 0 ? true : false} >{habit.highestSequence}</HighestSequence> dias</p>
                            </Description>
                            <CheckButton
                                isDone={habit.done}
                                onClick={() => clickHabit(habit, index)}
                            // type="checkbox"
                            >
                                <FaCheck />
                            </CheckButton>
                        </TodayHabit>
                    )) : "Nenhum hábito pra hoje!"
                    }
                </ul>
            </Container>
            <Footer ></Footer>
        </>
    );
}

const TodayHabit = styled.li`
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

const CurrentSequence = styled.span`
    color: ${props => props.isDone ? "#8FC549" : "inherit"};
`
const HighestSequence = styled.span`
    color: ${props => props.brokeRecorde ? "#8FC549" : "inherit"}
`

const CheckButton = styled.button`
    width: 69px;
    height: 69px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.isDone ? "#8FC549" : "#EBEBEB"};

    font-size: 35px;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    /* [type="checkbox"]:checked {


        

    }

    #isexpanded:checked ~ * tr.expandable {
        background-color: #8FC549;
    } */

`