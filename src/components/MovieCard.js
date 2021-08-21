import { Button } from 'bootstrap'
import React from 'react'
import {Card} from "react-bootstrap"
import { Link } from 'react-router-dom'
import {RatingView } from 'react-simple-star-rating'

const MovieCard = ({movie}) => {
    return (
              
            <Card style={{width:"22.5%", marginLeft:"1rem"}}>
                <Link to={`/${movie.id}`}>
                    <Card.Img height="175px" variant="top" src={movie.poster} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>{movie.description}</Card.Text>
                        <RatingView ratingValue={movie.rating}/>
                    </Card.Body>
                </Link>
                <a href={movie.url} class="btn btn-primary">See YouTube video</a>
        </Card>
       
    )
}

export default MovieCard
