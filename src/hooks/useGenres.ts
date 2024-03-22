import { useEffect, useState } from "react";
import callAPI from "../services/callAPi";

export interface Genre {
    id: number
    genre_name: string
    genre_image:string


}
interface FetchGenresResponse {
    result: number
    message: string
    records: Genre[]
}
const useGames = () => {

    const [genres, setGenres] = useState<Genre[]>([])
    const [isLoading , setLoading] = useState(false)
    useEffect(() => {
        
        const fetchData = async () => {
            
            setLoading(true)
            const response: FetchGenresResponse = await callAPI('getGenres.php');
            
            setGenres(response.records);
            
            setLoading(false)
            
        };
        
        fetchData();



    }, [])
    return { genres ,isLoading}


}
export default useGames
