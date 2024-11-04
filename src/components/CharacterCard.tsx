import React from "react";
interface CharacterCard {
  id:number;
  name: string;
  species:string;
  status	:string;
  LastLocation:string;
  gender:string;
  image	:string;
}
const CharacterCard: React.FC<CharacterCard> = ({ id,name,species,status,LastLocation,gender	,image	 }): JSX.Element => {
  return (
    <article className="w-[600px] h-[220px] flex overflow-hidden bg-[#3c3e44] rounded-md m-3 shadow-lg shadow-black/10">
      <div className="flex-[2_1_0%] w-full">
      <img src={image} alt="image" className="w-full h-full m-0 opacity-100 transition-opacity duration-500 object-center object-cover"/>
     </div>
     <div className="flex-[3_1_0%] relative p-3 text-white flex flex-col">
      <div className="flex-[1_1_0%] flex flex-col">
      <h2>{name}</h2>
      <span className="flex items-center capitalize">
        <span className="h-2 w-2 mr-1.5 bg-[#55cc44] rounded-full">
        {status}-{species}
        </span>
      </span>
      </div>
      <div className="flex-[1_1_0%] flex flex-col justify-center">
        <span className="text-gray-400 text-[16px] font-medium">Last known location:</span>
      <p className="text-gray-100">{LastLocation}</p>
      </div>
      <div className="flex-[1_1_0%] flex flex-col justify-center">
        <span className="text-gray-400 text-[16px] font-medium">Gender	:</span>
        <p className="text-gray-100">{gender}</p>
      </div>
     </div>
     
    </article>
  );
};

export default CharacterCard;
