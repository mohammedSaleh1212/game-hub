import { useEffect, useState } from "react";
import callAPI from "../services/callAPi";
import { Genre } from "./useGenres";








export interface Game {
    id: number
    game_name: string
    game_image:string
    score:number


}
interface FetchGamesResponse {
    result: number
    message: string
    records: Game[]
}

const useGames = (genre:Genre | null,sorter:string | null) => {

    const [games, setGames] = useState<Game[]>([])
    const [isLoading , setLoading] = useState(false)
    useEffect(() => {
        
        const fetchData = async () => {
            
            setLoading(true)
            const response: FetchGamesResponse = await callAPI('getGames.php',{
                'genre':genre ? genre.id:null,
                'sorter':sorter ? sorter:null
            });
            
            setGames(response.records);
            
            setLoading(false)
            
        };
        
        fetchData();



    }, [genre,sorter])
    return { games ,isLoading}


}
export default useGames
