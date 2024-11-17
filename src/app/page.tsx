import MainPage from "@/components/MainPage";
type SearchParams = { [key: string]: string | string[] | undefined }

export default async function Home({ searchParams }:SearchParams) {
const {page} =await searchParams;
  return (
    <div >
    <MainPage page={page}/>
    </div>
  );
}
