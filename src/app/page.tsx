import MainPage from "@/components/MainPage";
import InfiniteScroll from '../components/InfiniteScroll/index';
type SearchParams = { [key: string]: string | string[] | undefined }

export default async function Home({ searchParams }:SearchParams) {
const {page} =await searchParams;
  return (
    <>
    {/* <MainPage page={page}/> */}
    <InfiniteScroll/>
    </>
  );
}
