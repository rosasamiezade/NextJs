'use client'
interface IButtonsProps{
value:string;
isDisabled:boolean;
handleClick:()=>void;
}
const Buttons:React.FC<IButtonsProps> = ({value,isDisabled=false,handleClick}):JSX.Element=>{

    return(
        <div onClick={handleClick} className="mx-1 my-0">
        <button className="w-[35px] h-[35px] flex p-0 items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700 text-white" disabled={isDisabled}>{value}</button>
        </div>
    )
}

export default Buttons ; 