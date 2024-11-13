'use client' 
import Buttons from "@/components/Buttons";
import { useState } from "react";

interface IControlsProps{
pageId:string
}
const Controls:React.FC<IControlsProps> = ({pageId})=>{
const [pageNumber,setPageNumber] = useState(1);
return(
    <div className="flex justify-between items-center w-3/5 m-auto p-16">
        <Buttons value="<<" handleClick={()=>console.log("rosa")} isDisabled={false}/>
        <Buttons value="<" handleClick={()=>console.log("rosa")} isDisabled={false}/>
        <Buttons value={pageId} handleClick={()=>console.log("rosa")} isDisabled={false}/>
        <Buttons value="1" handleClick={()=>console.log("rosa")} isDisabled={false}/>
        <Buttons value="1" handleClick={()=>console.log("rosa")} isDisabled={false}/>
        <Buttons value="1" handleClick={()=>console.log("rosa")} isDisabled={false}/>
        <Buttons value=">" handleClick={()=>console.log("rosa")} isDisabled={false}/>
        <Buttons value=">>" handleClick={()=>console.log("rosa")} isDisabled={false}/>
        </div>
)
}

export default Controls ; 