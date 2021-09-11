import styled from "styled-components";

const Form = styled.form`
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

const Redirect = styled.div`
    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
    margin-top: 25px;
`

export {
    Form,
    Logo,
    Redirect
} 