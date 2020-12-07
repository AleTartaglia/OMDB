import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button, Card } from 'react-bootstrap'

export default ({ favoritos, deletedMovie }) => {
  return (

    <Container >
      <Row style={{ display: 'flex', flexDirection: "row", flexWrap: 'wrap', margin: '18px' }}>
        {favoritos ? favoritos.map((fav) => (
          <Col xs={3} className="mb-5" key={fav.id}>
            <Card className="h-100 shadow-sm bg-white rounded">
              <Card.Img variant="top" src={fav.Poster} />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                  <Card.Title className="mb-0 font-weight-bold">
                    {fav.Title}
                  </Card.Title>
                </div>

                <Button
                  className="mt-auto font-weight-bold" block onClick={() => deletedMovie(fav.id)}>
                  Delete
                </Button>


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