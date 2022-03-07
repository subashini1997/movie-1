import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const getMovie = () => {
    fetch("https://60c98aa8772a760017203b57.mockapi.io/movies/" + id)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };
  useEffect(getMovie, []);

  const history = useHistory();
  return (
    <div>
      <iframe
        width="100%"
        height="750"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          onClick={() => history.goBack()}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
