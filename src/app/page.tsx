'use client'

import CharacterCard from "../components/CharacterCard";
import { useQuery } from "@tanstack/react-query";
import Buttons from "@/components/Buttons";
interface ICharacterCard {
  id:number;
  name: string;
  species:string;
  status	:string;
  LastLocation:string;
  gender:string;
  image	:string;
  location:{
    name:string;
  };
  episode:string[];
}
export default function Home() {
  const fetchCharacter = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
  };

  const { data, isLoading, error } = useQuery({
    queryFn: fetchCharacter,
    queryKey: ["Character"],
  });
  if(isLoading){
    return <div>Loading ...</div>
  }
  if(error){
    return <div>Error : {error.message}</div>
  }
  return (
    <div className="bg-[#272b33]">
     <div className="flex flex-wrap bg-[#272b33] min-h-[calc(-60px + 50vh)]">
     {data&&data.map((dataa:ICharacterCard) => {
        return <CharacterCard key={dataa.id} {...dataa} LastLocation={dataa.location.name} First={dataa.episode[0]}/>;
      })}
     </div>
      <div className="text-red-600">
        <Buttons value="1" handleClick={()=>console.log("rosa")} />
      </div>
    </div>
  );
}
