import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default ({ movieSelected, userlog, addToFavs, bulean }) => {

  console.log("userlog", userlog)
  return (
    <Container style={{ margin: "20px auto" }}>
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={movieSelected.Poster} className="thumbnail" alt="Poster" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-4" style={{ color: "white", textAlign: "center" }}>{movieSelected.Title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong> {movieSelected.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {movieSelected.Released}
            </li>
            <li className="list-group-item">
              <strong>Rated:</strong> {movieSelected.Rated}
            </li>
            <li className="list-group-item">
              <strong>IMDB Rating:</strong> {movieSelected.imdbRating}
            </li>
            <li className="list-group-item">
              <strong>Director:</strong> {movieSelected.Director}
            </li>
            <li className="list-group-item">
              <strong>Writer:</strong> {movieSelected.Writer}
            </li>
            <li className="list-group-item">
              <strong>Actors:</strong> {movieSelected.Actors}
            </li>
            <li className="list-group-item">
              {userlog && !bulean ? <Card.Link href="#" onClick={() => addToFavs(movieSelected.Title, movieSelected.Poster)}><b>Add to Favs </b><i className="fas fa-heart"></i></Card.Link> : null}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
          <div className="col-md-12">
            <h3>About </h3>
            {movieSelected.Plot}
            <hr />
            <a
              href={'https://www.imdb.com/title/' + movieSelected.imdbID}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on IMDB
              </a>
            <Link to="/movies" className="btn btn-default text-light">
              Go Back To Search
              </Link>
          </div>
        </div>
      </div>
    </Container >
  )

}


