'use client'
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Image from 'next/image';

interface CharacterCard {
  id:number;
  name: string;
  species:string;
  status	:string;
  LastLocation:string;
  First:string;
  image	:string;
}
const CharacterCard: React.FC<CharacterCard> = ({ id,name,species,status,LastLocation,First	,image	 }): JSX.Element => {

  const fetchingFirstLoc = async()=>{
    const res= await fetch(`${First}`);
    const data=res.json()
    return data;
  }
  const {data:FirstSeen,isLoading,error}=useQuery({
    queryKey:[id],
    queryFn:fetchingFirstLoc
  })

if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <article className="w-[600px] h-[220px] flex overflow-hidden bg-[#3c3e44] rounded-md m-3 shadow-lg shadow-black/10">
      <div className="flex-[2_1_0%] w-full">
      <Image src={image} width={500} height={500}alt="image" className="w-full h-full m-0 opacity-100 transition-opacity duration-500 object-center object-cover"/>
     </div>
     <div className="flex-[3_1_0%] relative p-3 text-white flex flex-col">
      <div className="flex-[1_1_0%] flex flex-col">
      <Link href={`/character/${id}`}>
              <h2 className="text-xl font-bold hover:underline">{name}</h2>
          </Link>
      <div className="flex items-center capitalize ">
        <span className="h-2 w-2 mr-1.5 rounded-full" style={{backgroundColor:status==="Alive"?'green':status==="Dead"?'red':"gray"}}></span>
        <div>        {status}-{species}</div>        
      </div>
      </div>
      <div className="flex-[1_1_0%] flex flex-col justify-center">
        <span className="text-gray-400 text-[16px] font-medium">Last known location:</span>
      <p className="text-gray-100">{LastLocation}</p>
      </div>
      <div className="flex-[1_1_0%] flex flex-col justify-center">
        <span className="text-gray-400 text-[16px] font-medium">First seen in:
        </span>
        {FirstSeen.name && (
          <p className="text-gray-100">{FirstSeen.name}</p>
        )}
      </div>
     </div>
     
    </article>
  );
};

export default CharacterCard;
