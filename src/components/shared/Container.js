import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: 70px;
    left: 0;
    height: calc(100vh - 70px);
    width: 100vw;
    background-color: #E5E5E5;
    padding: 28px 17px;
    
    color: #666666;
    font-size: 18px;

    h1 {
        font-size: 23px;
        color: #126BA5;
    }

    h2 {
        color: #8FC549;
        margin-top: 5px;
        margin-bottom: 25px;

    }

    p {
        margin-top: 18px;
    }
`

export default Container;