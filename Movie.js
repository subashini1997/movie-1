import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Counter } from "./Counter";

//props - properties
// 1. It should start with a capital letter
// 2. It should return only one JSX element
// more than 8.5 green
// less than 8.5 red
export function Movie({
  name,
  rating,
  poster,
  summary,
  deleteButton,
  id,
  editButton,
}) {
  // Conditional styling
  const styles = { color: rating >= 8.5 ? "teal" : "crimson" };
  const [show, setShow] = useState(true);
  // const styles = { color: rating>8.5 ? "teal" :"crimson"};
  // Conditional styling
  const paraStyles = { display: show ? "block" : "none" };
  const history = useHistory();
  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">
            {name}
            <IconButton onClick={() => setShow(!show)} color="primary">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => history.push(`/movies/${id}`)}
              color="primary"
            >
              <InfoIcon />
            </IconButton>
          </h3>
          <p style={styles} className="movie-rating">
            ⭐ {rating}
          </p>
        </div>
        {/* show -> true -> !show -> false  */}
        {/* show -> false -> !show -> true  */}
        {/* setShow(!show) */}
        {/* onClick -> setShow -> Informing react that show is updated */}
        {/* <button></button> */}
        {/* <p style={paraStyles} className="movie-summary">
              {summary}
            </p> */}
        {/* Conditional rendering */}
        {show ? <p className="movie-summary">{summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}


