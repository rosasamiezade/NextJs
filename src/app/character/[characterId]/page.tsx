'use client'
import CharacterCard from "@/components/CharacterCard";
import { useQuery } from "@tanstack/react-query";


// interface CharacterCardProps {
//     id:number;
//     name: string;
//     species:string;
//     status	:string;
//     LastLocation:string;
//     gender:string;
//     image	:string;
//   }


const CharacterId : React.FC = ({ params }): JSX.Element => {
    
    const fetchCharacterById = async ()=>{
        const res = await fetch (`https://rickandmortyapi.com/api/character/${params.characterId}`);
        const data=res.json();
        return data
    }
const {data,isLoading,error}=useQuery({
    queryKey:[CharacterId],
    queryFn:fetchCharacterById
})
console.log(data)
if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
    return(
        <div className="flex justify-center items-center min-h-screen bg-[#272b33]">
       <CharacterCard {...data} />
    </div>
    )
}
export default CharacterId ; 