'use client'
interface IButtonsProps{
value:string;
handleClick:()=>void;
}
const Buttons:React.FC<IButtonsProps> = ({value,handleClick}):JSX.Element=>{
    return(
        <div onClick={handleClick} className="mx-1 my-0">
        <button className="w-[35px] h-[35px] flex p-0 items-center justify-center rounded-full bg-gray-600 text-white">{value}</button>
        </div>
    )
}

export default Buttons ; 