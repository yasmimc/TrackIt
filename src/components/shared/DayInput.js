import styled from "styled-components"

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

export default DayInput;