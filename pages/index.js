import Main from "../components/Main";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Images from "../components/Images";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#11cb5f",
      },
    },
    neutral: {
      main: "#64748B",
      contrastText: "#000",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Main />
      <Images />
    </ThemeProvider>
  );
}
