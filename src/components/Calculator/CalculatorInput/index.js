import React from "react";
import { Container, Label, Input, Percentages, Tip, TipInput } from "./styles";

export default class CalculatorInput extends React.Component {
  render() {
    return (
      <Container>
        <Label>Bill</Label>
        <Input />
        <Label mt={"48px"}>Select Tip %</Label>
        <Percentages>
          <Tip>5%</Tip>
          <Tip>10%</Tip>
          <Tip>15%</Tip>
          <Tip>25%</Tip>
          <Tip>50%</Tip>
          <TipInput as="input" placeholder="Custom"></TipInput>
        </Percentages>

        <Label mt={"48px"}>Number of People</Label>
        <Input />
      </Container>
    );
  }
}
