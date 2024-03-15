import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import MySingleMovie from "./MySingleMovie";
import "../styles.css";

class MyMovies extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = async () => {
    const apiLink = "http://www.omdbapi.com/?apikey=c43bce28";
    let response = await fetch(`${apiLink}&s="${this.props.title.toLowerCase()}"`);
    let moviesRequest = await response.json();
    this.setState({ movies: moviesRequest }, () => console.log(this.state.movies.Search));
  };
  render() {
    return (
      <>
        <h2 className="text-white">{this.props.category}</h2>
        <Col className="mx-5">
          {this.state.movies.Search &&
            this.state.movies.Search.slice(0, 6).map((movie) => <MySingleMovie key={movie.imdbID} img={movie.Poster} />)}
        </Col>
      </>
    );
  }
}
export default MyMovies;
