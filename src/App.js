import React, { Component } from "react";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/common";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ ...theme }}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    );
  }
}
