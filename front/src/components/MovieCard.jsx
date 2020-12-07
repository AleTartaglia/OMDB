import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button, Card, Alert } from 'react-bootstrap'
export default ({ movies }) => {
  return (

    <Container >
      <Row style={{ display: 'flex', flexDirection: "row", flexWrap: 'wrap', margin: '18px' }}>
        {movies ? movies.map((movie) => (
          <Col xs={3} className="mb-5" key={movie.imdbID}>
            <Card className="h-100 shadow-sm bg-white rounded">
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                  <Card.Title className="mb-0 font-weight-bold">
                    {movie.Title}
                  </Card.Title>
                </div>

                <Link to={`/movies/${movie.imdbID}`}>
                  <Button
                    className="mt-auto font-weight-bold" block>
                    Mas Info +
               </Button>
                </Link>

              </Card.Body>
            </Card>
          </Col>
        )) : (<Alert variant="warning">
          <Alert.Heading>Error, movie not found</Alert.Heading></Alert>)

        }
      </Row>
    </Container>

  )
}



