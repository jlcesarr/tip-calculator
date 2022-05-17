import React from "react";
import {
  Container,
  Label,
  Input,
  Percentages,
  Tip,
  TipInput,
  Icon,
  ErrorMessage,
} from "./styles";

import dollarIcon from "../../../../images/icon-dollar.svg";
import personIcon from "../../../../images/icon-person.svg";

export default class CalculatorInput extends React.Component {
  constructor(props) {
    super(props);

    this.defaultTips = [5, 10, 15, 25, 50];
  }

  componentDidMount(prevProps) {
    // se o value == 0
    // const { billValue, tipValue }
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
    const isValidPeoplesValue = peoplesValue && peoplesValue > 0;
    const defaultTips = this.defaultTips;

    return (
      <Container>
        <Label>
          Bill
          <Icon src={dollarIcon}></Icon>
          <Input
            type="number"
            border
            placeholder={0}
            value={billValue || ""}
            onChange={({ target }) => {
              onBillValueChange(target.value);
            }}
            // value={billValue}
          />
        </Label>
        <Label mt={48}>
          Select Tip %
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
                  aria-label="Select a tip"
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
              onChange={({ target }) => {
                onTipValueChange(target);
              }}
            ></TipInput>
          </Percentages>
        </Label>

        <Label mt={48}>
          Number of People
          {!isValidPeoplesValue && <ErrorMessage>Can't be zero</ErrorMessage>}
          <Icon src={personIcon}></Icon>
          <Input
            placeholder={0}
            value={peoplesValue || 0}
            onChange={({ target }) => onPeoplesValueChange(target.value)}
            valid={isValidPeoplesValue}
            type="number"
          />
        </Label>
      </Container>
    );
  }
}
