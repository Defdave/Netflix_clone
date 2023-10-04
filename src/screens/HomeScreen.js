import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests'
import Footer from '../Footer'

export default function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        
        <Banner />

        <Row title='NETFLIX ORIGINALS' url={requests.fetchNetflixOriginals} isLargeRow />
        <Row title='Trending Movies' url={requests.fetchTrending}/>
        <Row title='Top Rated' url={requests.fetchTopRated}/>
        <Row title='Action Movies' url={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' url={requests.fetchComdeyMovies}/>
        <Row title='Romance Movies' url={requests.fetchRomanceMovies}/>
        <Row title='Horror Movies' url={requests.fetchHorrorMovies}/>
        <Row title='Documentaries' url={requests.fetchDocumentaries}/>

        <Footer />
    </div>
  )
}
