import axios from "axios";
import CharacterCard from "../CharacterCard";
import React from "react";
type ICharacterCard ={
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
  interface ICharacterListProps{
    results:[];
  }
const CharacterList :React.FC<ICharacterListProps>= async({results})=>{
// const response =await axios.get(`https://rickandmortyapi.com/api/character`);
// const data=response.data.results;
return (
    <div className="flex flex-wrap bg-[#272b33] min-h-[calc(-60px + 50vh)]">
{
    results?.map((CharacterData:ICharacterCard)=>
         (<CharacterCard {...CharacterData} key={CharacterData.id} LastLocation={CharacterData.location.name} First={CharacterData.episode[0]}/>)
    )
}
    </div>
)
}

export default CharacterList;