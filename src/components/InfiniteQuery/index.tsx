'use client'
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import CharacterCard from '../CharacterCard/index';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';


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
const { ref, inView } = useInView({
    triggerOnce: false, 
  });
  useEffect(()=>{
if(inView){
    fetchNextPage();
}
  },[inView])
return(
    <div  className="flex flex-wrap bg-[#272b33] min-h-[calc(-60px + 50vh)]"> 
        {
        fetchedData?.pages?.map((page)=>{
            return (
                page?.results?.map((CharacterData:ICharacterCard)=>
                    (<CharacterCard {...CharacterData} key={CharacterData.id} LastLocation={CharacterData.location.name} First={CharacterData.episode[0]}/>)
               )
            )
        })

        }
        <div ref={ref}></div>
        {isFetchingNextPage && <p>Loading more characters...</p>}
         {hasNextPage && !isFetchingNextPage && (
        <button onClick={() => fetchNextPage()}>Load More</button>
      )}
    </div>
       

)
}

export default InfiniteQuery ; 