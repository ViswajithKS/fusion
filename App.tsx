import React from "react";
import { createTheme, darkColors, lightColors, ThemeProvider } from "@rneui/themed";
import ModeSwitch from "./components/ModeSwitch";
import { Platform } from "react-native";

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: darkColors.platform.ios,
    }),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModeSwitch />
    </ThemeProvider>
  );
}
