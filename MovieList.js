import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Movie } from "./Movie";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch("https://60c98aa8772a760017203b57.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  // Delete -> Refresh the list
  const deleteMovie = (id) => {
    fetch("https://60c98aa8772a760017203b57.mockapi.io/movies/" + id, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  useEffect(getMovies, []);

  const history = useHistory();
  return (
    <div className="movie-list">
      {movieList.map(({ name, rating, poster, summary, id }, index) => (
        <Movie
          key={index}
          name={name}
          rating={rating}
          poster={poster}
          summary={summary}
          deleteButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => deleteMovie(id)}
              aria-label="delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          // /movies/edit/:id
          editButton={
            <IconButton
              onClick={() => history.push(`/movies/edit/${index}`)}
              aria-label="delete"
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
          id={id}
        />
      ))}
    </div>
  );
}

// Multi page in a App
// 1. Organized - ease of access
// 2. Performance - First Time to load - low
// 3. Authentication - Add to cart
// 4. Sharing

// Disadvantages
// 1. Refresh
// 2. More data consumption
// 3. Battery life affected

// React router dom
// 1. Big conditional rendering
