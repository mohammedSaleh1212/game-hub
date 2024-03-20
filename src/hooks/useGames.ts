import { useEffect, useState } from "react";
import callAPI from "../services/callAPi";

interface Game{
    id:number
    game_name:string
}
interface FetchGamesResponse{
    result:number
    message:string
    records:Game[]
}
   const useGames = () => {
       
   const [games,setGames] = useState<Game[]>([])
   useEffect(()=>{
       const fetchData = async () => {
           
               const response: FetchGamesResponse= await callAPI('getGames.php');

               setGames(response.records);
           

         };
     
         fetchData();

   },[])
   return{games}


   }
   export default useGames