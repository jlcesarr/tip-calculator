import React, { Component } from "react";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/global";

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Layout />
      </>
    );
  }
}
