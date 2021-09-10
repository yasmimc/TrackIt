import styled from "styled-components";

const Screen = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;    
`

const Logo = styled.div`
    img {
        width: 180px;
        margin-top: 68px;
        margin-bottom: 32px;
    }
`
const SubmitBtn = styled.button`
    width: 303px;
    height: 45px;
    font-size: 21px;
    color: #FFFFFF;

    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
`

const Redirect = styled.div`
    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
    margin-top: 25px;
`

export {
    Screen,
    Logo,
    SubmitBtn,
    Redirect
} 