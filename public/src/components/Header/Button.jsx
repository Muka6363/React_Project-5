import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";

const ButtonAdd = ({ handleClick, btnChange }) => {
  return (
    <Container>
      <Button className="" onClick={handleClick}>
        {btnChange ? " Closed Add Task Bar" : "Show Add Task Bar"}
      </Button>
    </Container>
  );
};

export default ButtonAdd;
