import Link from 'next/link'

interface ISelectButtonProps{    value:string,
}
const SelectButton :React.FC<ISelectButtonProps>= ({value})=>{
    return (
        <div className="">
            <Link href={`/${value}`}> <button >{value}</button>
            </Link>
        </div>
    )
}

export default SelectButton;