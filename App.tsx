import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import ModeSwitch from "./components/ModeSwitch";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModeSwitch />
    </ThemeProvider>
  );
}
