import React from "react";
import { Container, Result, ResultLabel, Value, Button } from "./styles";

export default class CalculatorResult extends React.Component {
  constructor(props) {
    super(props);
  }

  getValues({ billValue, tipValue, peoplesValue }) {
    let totalByPercentage = Number(billValue * (tipValue / 100)) || 0;
    let totalTipPerPerson = totalByPercentage / peoplesValue || 0;

    return {
      totalByPercentage: totalByPercentage.toFixed(2),
      totalTipPerPerson: totalTipPerPerson.toFixed(2),
    };
  }

  shouldComponentUpdate(nextProps, _) {
    let { billValue, tipValue, peoplesValue } = nextProps;
    return billValue > 0 && tipValue > 0 && peoplesValue > 0 ? true : false;
  }

  render() {
    let { billValue, tipValue, peoplesValue, onGeneralReset } = this.props;
    let total = this.getValues({ billValue, tipValue, peoplesValue });

    return (
      <Container>
        <Result>
          <ResultLabel>
            Tip Amount
            <span>/person</span>
          </ResultLabel>
          <Value>${total.totalTipPerPerson}</Value>
        </Result>

        <Result>
          <ResultLabel>
            Total
            <span>/person</span>
          </ResultLabel>
          <Value>${total.totalByPercentage}</Value>
        </Result>

        <Button onClick={onGeneralReset}>Reset</Button>
      </Container>
    );
  }
}
