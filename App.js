import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import { AddMovie } from "./AddMovie";
import "./App.css";
import { EditMovie } from "./EditMovie";
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import { MovieDetails } from "./MovieDetails";
import { MovieList } from "./MovieList";
import { NotFound } from "./NotFound";


export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

//   const users = [
//     {
//       name: "Preethi",
//       pic: "https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg",
//     },
//     { name: "Guru", pic: "https://wallpaperaccess.com/full/2213424.jpg" },
//     {
//       name: "Deepika",
//       pic: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/google_pay__7__1200x768.jpeg?WJeXdcrm_vaY0K7AWpMp5bXZ65NH_4dg&size=770:433",
//     },
//   ];
  const history = useHistory();
  const [movieList, setMovieList] = useState(INITIAL_MOVIES);
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button onClick={() => history.push("/")} color="inherit">
                Home
              </Button>
              <Button onClick={() => history.push("/movies")} color="inherit">
                Movies
              </Button>
              <Button
                onClick={() => history.push("/movies/add")}
                color="inherit"
              >
                Add Movies
              </Button>
              {/* <Button
                onClick={() => history.push("/color-game")}
                color="inherit"
              >
                Color game
              </Button> */}
              <Button
                sx={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                color="inherit"
              >
                {mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>

          <section className="route-content">
            <Switch>
              <Route exact path="/">
                <Msg />
              </Route>
              <Route path="/films">
                <Redirect to="/movies" />
              </Route>

              {/* /movies/add */}
              {/* AddMovie */}

              <Route path="/movies/add">
                <AddMovie />
              </Route>

              {/* Task - Edit movie - 15mins */}
              {/* /movies/edit/:id */}

              <Route path="/movies/edit/:id">
                <EditMovie movieList={movieList} setMovieList={setMovieList} />
              </Route>

              {/* Route with parmater */}
              <Route path="/movies/:id">
                <MovieDetails />
              </Route>

              <Route path="/movies">
                <MovieList />
              </Route>
              {/* <Route path="/color-game">
                <AddColor />
              </Route> */}

              <Route path="**">
                <NotFound />
              </Route>
            </Switch>
          </section>
          {/* old  -> /films  -> /movies */}
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Msg() {
  return <h1>Welcome to the Movie app 😊🎇🎇✨🎉🎉</h1>;
}