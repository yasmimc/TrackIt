import DayInput from "../shared/DayInput";
import styled from "styled-components";

export default function Habit({ habit,  defaultWeekDays}) {
    return (
        <Container>
            {habit.name}
            <div>
                {defaultWeekDays.map((day, index) => {
                    return (
                        <DayInput type="button" value={day.value} selected={habit.days.includes(index)}
                        />
                    )
                })}

            </div>
        </Container>
    );
}

const Container = styled.div`
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