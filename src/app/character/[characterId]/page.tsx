'use client'
import CharacterCard from "@/components/CharacterCard";
import { useQuery } from "@tanstack/react-query";
import * as React from 'react'


// interface CharacterCardProps {
//     id:number;
//     name: string;
//     species:string;
//     status	:string;
//     LastLocation:string;
//     gender:string;
//     image	:string;
//   }

type CharacterIdProps = {
    params: Promise< {characterId: string }>
}

const getstaticparams =

const CharacterId : React.FC<CharacterIdProps> = ({ params}): JSX.Element => {
    const {characterId} =React.use(params) ;
    // const { characterId } = params;
    console.log('url:', `https://rickandmortyapi.com/api/character/${characterId}`)
    console.log('id', characterId)
    const fetchCharacterById = async ()=>{
        const res = await fetch (`https://rickandmortyapi.com/api/character/${characterId}`, { cache: });
        const data=await res.json();
        return data
    }
    
const {data,isLoading,error,isFetched}=useQuery({
    queryKey:[characterId],
    queryFn:fetchCharacterById
})
if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
    return(
        <div className="flex justify-center items-center min-h-screen bg-[#272b33]">
            {
                isFetched&&data&&<CharacterCard {...data} LastLocation={data.location?.name|| "Unknown"} First={data.episode?.[0]|| "Unknown"} />

            }
    </div>
    )
}
export default CharacterId ; 