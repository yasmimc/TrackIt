import styled from "styled-components";

const Button = styled.button`
    
    font-size: 21px;
    color: #FFFFFF;

    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;

    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
`

export default Button