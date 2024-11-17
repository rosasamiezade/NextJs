'use client'
interface IButtonsProps{
value:string|number;
isDisabled:boolean;
isActive:boolean;
handleClick:()=>void;
}
const Buttons:React.FC<IButtonsProps> = ({value,isDisabled,handleClick,isActive=false}):JSX.Element=>{
    return(
        <div onClick={handleClick} className="mx-1 my-0" >
            <button className={`w-[35px] h-[35px] flex p-0 items-center justify-center rounded-full ${isDisabled?'bg-gray-600 cursor-not-allowed': "bg-gray-400 hover:bg-gray-500"} text-white ${isActive ? "bg-gray-950 text-white":"" }`} disabled={isDisabled}>{value}</button>
   
   </div> )
}

export default Buttons ; 