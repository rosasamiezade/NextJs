import MainPage from '../../components/MainPage/index';
type SearchParams = { [key: string]: string | string[] | undefined }

const pagination = async ({ searchParams }:SearchParams)=>{
    const {page} =await searchParams;
return (
        <MainPage page={page} />
)
}

export default pagination ;