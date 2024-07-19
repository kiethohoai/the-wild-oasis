import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
    font-size: 60px;
    font-weight: 600;
    background-color: yellow;
`;

const Button = styled.button`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    border: none;
    border-radius: 7px;
    background-color: purple;
    color: white;
    cursor: pointer;
    margin: 20px;
`

const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0.8rem 1.2rem;

`

const StyleApp = styled.div`
    background-color: orangered;
    padding: 20px;
`

function App() {
    return (
        <StyleApp>
            <H1>Hello World</H1>
            <Button onClick={() => alert("Check in")}>Check in</Button>
            <Button onClick={() => alert("Check out")}>Check out</Button>
            <br />
            <Input type="number" placeholder="Number of guests"></Input>
        </StyleApp>
    );
}

export default App;
