import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Banner.css'
import banner from './imgs/Netflix-Banner.png'
import requests from './Requests'

export default function Banner() {

    const [movie, setMovie] = useState()

    const truncate = (string, n=150) => {
        return string?.length > n ? string.substring(0, n-1) + ' ...' : string
    }

    useEffect(() => {
        axios.get(requests.fetchNetflixOriginals)
        .then(response => {
        const results = response.data.results
        const movie = results[Math.floor(Math.random() * results.length - 1)]
        setMovie(movie)
        })
        .catch(error => console.log(error))
    }, [])

    console.log(movie)
  return (
    <header 
    className='banner'
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        // backgroundImage: `url('${banner}')`,
        backgroundPosition: 'center center'
    }}
    >
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie?.name}
                {/* movie name */}
            </h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My list</button>
            </div>
            <h2 className='banner_description'>
                {truncate(`${movie?.overview}`)}
            </h2>
        </div>

        <div className='banner_fadeBottom' />
    </header>
  )
}
