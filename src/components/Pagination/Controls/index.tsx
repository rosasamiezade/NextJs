'use client' 
import Buttons from "@/components/Buttons";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface IControlsProps{
    info:{
        next:string,
        pages:number,
        prev:string,
    },
    pageNumberSt:string;
}
const Controls:React.FC <IControlsProps>= ({info,pageNumberSt})=>{

const router = useRouter();
const pageNumber = Number(pageNumberSt) || 1;
const handleRouts=(pageNumber:number)=>{
    router.push(`?page=${pageNumber}`);
}

return(
    <div className="flex justify-between items-center w-3/5 m-auto p-16">
        <Buttons value="<<" handleClick={()=>{handleRouts(1)}} isDisabled={pageNumber===1} isActive={false}/>
        <Buttons value="<" handleClick={()=>handleRouts(pageNumber-1)} isDisabled={pageNumber===1} isActive={false}/>
        <Buttons value={`${pageNumber===1?"-" : pageNumber-1}`} handleClick={()=>handleRouts(pageNumber-1)} isDisabled={pageNumber===1} isActive={false}/>
        <Buttons value={pageNumber} handleClick={()=>handleRouts(pageNumber)} isDisabled={false} isActive={true}/>
      <Buttons value={`${pageNumber===42?"-":pageNumber+1}`} handleClick={()=>handleRouts(+pageNumber+1)} isDisabled={pageNumber===42} isActive={false}/>
        <Buttons value=">" handleClick={()=>handleRouts(pageNumber+1)} isDisabled={pageNumber===42} isActive={false}/>
        <Buttons value=">>" handleClick={()=>{handleRouts(info.pages)}} isDisabled={pageNumber===info.pages} isActive={false}/>
        </div>
)
}

export default Controls ; 