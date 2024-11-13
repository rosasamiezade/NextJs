import CharacterCard from "@/components/CharacterCard";
import axios from "axios";
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
  type Params = {
    params:Promise<{characterId:string}>
  }

  const CharacterId  = async({
    params,}:Params) => {
   const {characterId}=await params;
const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
 const CharacterData=response.data;
    return(
        <div className="flex justify-center items-center min-h-screen bg-[#272b33]">
    <CharacterCard {...CharacterData} key={CharacterData.id} LastLocation={CharacterData.location.name} First={CharacterData.episode[0]}/>
    </div>
    )
}
export default CharacterId ; 


