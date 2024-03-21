import { useEffect, useState } from "react";
import callAPI from "../services/callAPi";

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
const useGames = () => {

    const [games, setGames] = useState<Game[]>([])
    const [isLoading , setLoading] = useState(false)
    useEffect(() => {
        
        const fetchData = async () => {
            
            setLoading(true)
            const response: FetchGamesResponse = await callAPI('getGames.php');
            
            setGames(response.records);
            
            setLoading(false)
            
        };
        
        fetchData();



    }, [])
    return { games ,isLoading}


}
export default useGames
