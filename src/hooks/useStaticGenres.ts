import { useEffect, useState } from "react";

import saticGenres from '../Data/Genres'

export interface Genre {
    id: number
    genre_name: string
    genre_image:string


}

const useStaticGenres = () => {

    const [genres, setGenres] = useState<Genre[]>([])
    const [isLoading , setLoading] = useState(false)
    useEffect(() => {
        
        const fetchData =  () => {
            
            setLoading(true)
            const response = {genres:saticGenres ,isLoading:false, error:null};
            
            setGenres(response.genres);
            
            setLoading(false)
            
        };
        
        fetchData();



    }, [])
    return { genres ,isLoading}


}
export default useStaticGenres
