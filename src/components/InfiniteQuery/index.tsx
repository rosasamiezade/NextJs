'use client'
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import CharacterCard from '../CharacterCard/index';
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

const InfiniteQuery = ()=>{
const fetchCharactersPages=async(pageParams=1)=>{
const res= await axios.get(`https://rickandmortyapi.com/api/character?page=${pageParams}`);
return res.data;
}


const {
    data:fetchedData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['infiniteCharacters'],
    queryFn:fetchCharactersPages,
    initialPageParam: 1,
    getNextPageParam: (lastPage)=>{
        return lastPage.info.next ? lastPage.info.next.split('=')[1] : undefined;
    },
  })
console.log(fetchedData);

return(
    <>
        {
        fetchedData?.pages?.map((page)=>{
            return (
                page?.results?.map((CharacterData:ICharacterCard)=>
                    (<CharacterCard {...CharacterData} key={CharacterData.id} LastLocation={CharacterData.location.name} First={CharacterData.episode[0]}/>)
               )
            )
        })
        }
    </>
)
}

export default InfiniteQuery ; 