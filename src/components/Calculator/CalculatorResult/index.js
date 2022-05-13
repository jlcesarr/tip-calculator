import React from "react";
import { Container, Result, ResultLabel, Value, Button } from "./styles";

export default class CalculatorResult extends React.Component {
  render() {
    return (
      <Container>
        <Result>
          <ResultLabel>
            Tip Amount
            <span>/person</span>
          </ResultLabel>
          <Value>$4.27</Value>
        </Result>

        <Result>
          <ResultLabel>
            Total
            <span>/person</span>
          </ResultLabel>
          <Value>$32.79</Value>
        </Result>

        <Button>Reset</Button>
      </Container>
    );
  }
}
