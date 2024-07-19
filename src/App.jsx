import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyleApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyleApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in & out</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyleApp>
    </>
  );
}

export default App;
