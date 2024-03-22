import React, { useEffect, useState } from 'react'
import callAPI from '../services/callAPi'
import useGenres from '../hooks/useGenres'



const Genres = () => {
    const{genres , isLoading} = useGenres()

  return (

    <>
    {genres && genres.map(genre => <h1 className='text-primary' key={genre.id}>{genre.genre_name}</h1>)}
    <h1 className='text-primary'>hello there</h1>
    
    </>


  )
}

export default Genres