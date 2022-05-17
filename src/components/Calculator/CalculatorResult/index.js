import React from "react";
import { Container, Result, ResultLabel, Value, Button } from "./styles";

export default class CalculatorResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enableButton: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.enableButton == false) {
      this.setState({ enableButton: true });
    }
  }

  getValues({ billValue, tipValue, peoplesValue }) {
    let totalByPercentage = billValue * (tipValue / 100);
    let totalTipPerPerson = totalByPercentage / peoplesValue;

    const isValidValues =
      !totalByPercentage ||
      !totalTipPerPerson ||
      totalByPercentage < 0 ||
      totalTipPerPerson < 0 ||
      totalTipPerPerson === Infinity;

    if (isValidValues) {
      return {
        totalByPercentage: 0,
        totalTipPerPerson: 0,
      };
    }

    return {
      totalByPercentage: totalByPercentage.toFixed(2),
      totalTipPerPerson: totalTipPerPerson.toFixed(2),
    };
  }

  render() {
    const { billValue, tipValue, peoplesValue, onGeneralReset } = this.props;
    const { totalByPercentage, totalTipPerPerson } = this.getValues({
      billValue,
      tipValue,
      peoplesValue,
    });

    const { enableButton } = this.state;

    return (
      <Container>
        <Result>
          <ResultLabel>
            Tip Amount
            <span>/person</span>
          </ResultLabel>
          <Value>${totalTipPerPerson}</Value>
        </Result>

        <Result>
          <ResultLabel>
            Total
            <span>/person</span>
          </ResultLabel>
          <Value>${totalByPercentage}</Value>
        </Result>

        <Button allowed={enableButton} onClick={onGeneralReset}>
          Reset
        </Button>
      </Container>
    );
  }
}
