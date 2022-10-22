import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, Stack , createTheme} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import {useState} from "react";
function App() {
const [mode,setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode: mode,

    }
  })


  return (
    <ThemeProvider theme= {darkTheme}>
    <Box bgcolor = {"background.default" } color = {"text.primary"}>
      < Navbar />
      <Stack direction = "row" justifyContent = "space-evenly">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
    </ThemeProvider>

  );
}

export default App;
