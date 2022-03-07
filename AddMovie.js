import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();

  return (
    <div className="movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
      />

      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="outlined"
      />
      {/* <input placeholder="" /> */}

      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined"
      />

      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="outlined"
      />

      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="outlined"
      />

      {/* onClick={() => setColorList([...colorList, color])} */}
      {/* create Copy of movieList & add new movie to it */}
      {/* <button></button> */}

      <Button
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
          };

          // 1. method - POST
          // 2. body - data & JSON.strinfy (JSON data)
          // 3. headers - JSON data

          fetch("https://620c806db5736325938fae2a.mockapi.io/movie", {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => history.push("/movies"));

          // setMovieList([...movieList, newMovie]);
        }}
        variant="contained"
      >
        Add Movie
      </Button>
    </div>
  );
}
