import React from "react";
import Calculator from "../Calculator";
import { Container } from "./styles";
import logo from "../../../images/logo.svg";

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <img src={logo} alt="Logo" />
        <Calculator />
      </Container>
    );
  }
}
