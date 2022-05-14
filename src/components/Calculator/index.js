import React from "react";
import { Container } from "./styles";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";

export default class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      billValue: 0,
      tipValue: 0,
      peoplesValue: 1,
    };
  }

  handleBillValueChange = (newValue) => {
    this.setState({
      billValue: newValue,
    });
  };

  handleTipValueChange = (elTarget) => {
    const targetValue = elTarget?.dataset?.percentage || elTarget?.value;
    if (targetValue) {
      this.setState({
        tipValue: targetValue,
      });
    }
  };

  handlePeoplesValueChange = (newValue) => {
    this.setState({
      peoplesValue: newValue,
    });
  };

  handleGeneralReset = () => {
    this.setState({
      billValue: 0,
      tipValue: 0,
      peoplesValue: 1,
    });
  };

  componentDidUpdate() {}

  render() {
    const { billValue, tipValue, peoplesValue } = this.state;
    return (
      <Container>
        <CalculatorInput
          onBillValueChange={this.handleBillValueChange}
          onTipValueChange={this.handleTipValueChange}
          onPeoplesValueChange={this.handlePeoplesValueChange}
          peoplesValue={peoplesValue}
          billValue={billValue}
          tipValue={tipValue}
        />
        <CalculatorResult
          billValue={billValue}
          tipValue={tipValue}
          peoplesValue={peoplesValue}
          onGeneralReset={this.handleGeneralReset}
        />
      </Container>
    );
  }
}
