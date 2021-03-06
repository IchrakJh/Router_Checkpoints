import React from 'react'
import { Container } from 'react-bootstrap';
import MovieCard from './MovieCard'



const MovieList = ({movies, searchCondition, selectRating}) => {
    return (
        <Container style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly",marginTop:"50px"}}>
            {movies.filter((movie)=>movie.title.toLowerCase().includes(searchCondition) && movie.rating >=selectRating )
            .map((movie)=> (
                <MovieCard movie={movie} />
            ))}
        </Container>
        
    )
}

export default MovieList
