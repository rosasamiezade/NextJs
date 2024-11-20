import Link from 'next/link'

interface ISelectButtonProps{    value:string,
}
const SelectButton :React.FC<ISelectButtonProps>= ({value})=>{
    return (
        <div className="">
            <Link href={`/${value}`}> <button className="text-white bg-[#272b33] px-4 py-2 rounded-md hover:bg-[#3c434c] transition duration-200">{value}</button>
            </Link>
        </div>
    )
}

export default SelectButton;