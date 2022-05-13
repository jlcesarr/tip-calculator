import React from "react";
import { Container } from "./styles";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";

export default class Calculator extends React.Component {
  render() {
    return (
      <Container>
        <CalculatorInput />
        <CalculatorResult />
      </Container>
    );
  }
}
