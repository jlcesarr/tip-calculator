import React from "react";
import { Container, SaveResultsLabel } from "./styles";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";

export default class Calculator extends React.Component {
  constructor() {
    super();

    let values = {};

    try {
      let valuesFromStorage = JSON.parse(localStorage.getItem("values"));
      values = valuesFromStorage;

      values = {
        ...valuesFromStorage,
      };
    } catch (_) {}

    this.state = {
      billValue: 0,
      tipValue: 0,
      peoplesValue: 1,
      saveChanges: false,
      ...values,
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

  handleToggleSaveChanges = () => {
    this.setState(({ saveChanges }) => {
      return { saveChanges: !saveChanges };
    });
  };

  componentDidUpdate(_, prevState) {
    const { saveChanges } = this.state;

    if (saveChanges) {
      localStorage.setItem("values", JSON.stringify(this.state));
    } else {
      localStorage.clear();
    }
  }

  render() {
    const { billValue, tipValue, peoplesValue, saveChanges } = this.state;
    console.log(this.state);

    return (
      <Container>
        <SaveResultsLabel>
          Save results
          <input
            type="checkbox"
            defaultChecked={saveChanges}
            onChange={this.handleToggleSaveChanges}
          />
        </SaveResultsLabel>
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
