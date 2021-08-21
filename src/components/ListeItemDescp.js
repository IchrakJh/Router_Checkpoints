import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {useParams} from "react-router-dom";

const ListeItemDescp = (props) => {

    const params=useParams();
    let movie=props.movies.find((el)=> el.id == params.xd);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                       <img width="400px" src={movie.poster} />
                    </Col>
                    <Col>
                        <h1>{movie.title}</h1>
                        <h3>{movie.description}</h3>
                        <a href={movie.url}>{movie.url}</a>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ListeItemDescp
