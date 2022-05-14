import React from "react";
import {
  Container,
  Label,
  Input,
  Percentages,
  Tip,
  TipInput,
  ErrorMessage,
} from "./styles";

export default class CalculatorInput extends React.Component {
  constructor(props) {
    super(props);

    this.defaultTips = [5, 10, 15, 25, 50];
  }

  render() {
    let {
      onBillValueChange,
      onTipValueChange,
      peoplesValue,
      onPeoplesValueChange,
      billValue,
      tipValue,
    } = this.props;
    const isValidPeoplesValue = peoplesValue > 0;
    const defaultTips = this.defaultTips;

    return (
      <Container>
        <Label>Bill</Label>
        <Input
          type="number"
          border
          onChange={({ target }) => {
            onBillValueChange(target.value);
          }}
          value={billValue}
        />
        <Label mt={"48px"}>Select Tip %</Label>
        <Percentages
          onClick={({ target }) => {
            onTipValueChange(target);
          }}
        >
          {defaultTips.map((tipPercentage) => {
            let isActive = Number(tipValue) == tipPercentage;
            return (
              <Tip
                key={tipPercentage}
                selected={isActive}
                data-percentage={tipPercentage}
              >
                {tipPercentage}%
              </Tip>
            );
          })}
          <TipInput
            as="input"
            placeholder="Custom"
            onChange={({ target }) => onTipValueChange(target)}
          ></TipInput>
        </Percentages>

        <Label mt={"48px"}>Number of People</Label>
        {!isValidPeoplesValue && <ErrorMessage>Can't be zero</ErrorMessage>}
        <Input
          value={peoplesValue}
          onChange={({ target }) => onPeoplesValueChange(target.value)}
          valid={isValidPeoplesValue}
          type="number"
        />
      </Container>
    );
  }
}
