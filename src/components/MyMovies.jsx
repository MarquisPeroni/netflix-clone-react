import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import MySingleMovie from "./MySingleMovie";
import "../styles.css";
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

class MyMovies extends React.Component {
  state = {
    movies: [],
    isLoading: true, // Aggiunto stato isLoading e inizializzato a true
    isError: false // Inizializzato a false
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const apiLink = "http://www.omdbapi.com/?apikey=c43bce28";
    try {
      let response = await fetch(`${apiLink}&s="${this.props.title.toLowerCase()}"`);
      let moviesRequest = await response.json();
      this.setState({ movies: moviesRequest.Search || [], isLoading: false });
    } catch (error) {
      console.error("Error fetching movies:", error);
      this.setState({ isError: true, isLoading: false }); 
    }
  };

  render() {
    return (
      <>
        <h2 className="text-white">{this.props.category}</h2>
        <Col className="mx-5">
          {this.state.isLoading && (
            <div>
              <Spinner animation="border" variant="success" />
            </div>
          )}

          {this.state.isError && (
            <div>
              <Alert variant="dark">Something went wrong 🙁</Alert>
            </div>
          )}

          {!this.state.isLoading && !this.state.isError && this.state.movies.length === 0 && (
            <>
              No Netflix shows avaible at the moment 🙁
            </>
          )}

          {this.state.movies.slice(0, 6).map((movie) => (
            <MySingleMovie key={movie.imdbID} img={movie.Poster} />
          ))}
        </Col>
      </>
    );
  }
}

export default MyMovies;
