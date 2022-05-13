import React from "react";
import { Container } from "./styles";
import CalculatorInput from "./CalculatorInput";

export default class Calculator extends React.Component {
  render() {
    return (
      <Container>
        <CalculatorInput></CalculatorInput>
      </Container>
    );
  }
}
