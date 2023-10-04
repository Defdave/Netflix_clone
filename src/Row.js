import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'

export default function Row({title, url, isLargeRow = false}) {

    const [movies, setMovies] = useState()
    
    const baseUrl = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        const fetachData = async() => {
            const req = await axios.get(url)
            const response = req.data.results
            setMovies(response)
            return response
        }

        fetachData()
    }, [url])


  return (
    <>
    <p style={{border: '1px solid rgb(143, 140, 140)'}}></p>
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters' >
            {movies?.map(movie => (
                ((isLargeRow &&  movie.poster_path) || 
                (!isLargeRow && movie.backdrop_path)) && (
                <div className={`row_poster ${isLargeRow && 'row_poster_large'}`} key={movie.id} >
                <img src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                <h3 className='movie_title' style={{textAlign: 'center',}}>{movie.name} {movie.title}</h3>
                </div>
            ))
            )}
        </div>
    </div>
    </>
  )
}
