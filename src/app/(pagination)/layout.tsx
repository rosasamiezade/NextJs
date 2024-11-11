import Buttons from "@/components/Buttons";
interface IPaginationLayoutProps extends React.PropsWithChildren {

}
const PaginationLayout:React.FC <IPaginationLayoutProps>= ({children}):JSX.Element=>{
return(
    <>
    <Buttons value="<<" handleClick={} />
    {children}
    <Buttons value=">>" handleClick={} />
    </>
)
}

export default PaginationLayout;