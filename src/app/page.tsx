import MainPage from "@/components/MainPage";
import InfiniteScroll from '../components/InfiniteScroll/index';
import SelectButton from '../components/SelectButton/index';
type SearchParams = { [key: string]: string | string[] | undefined }

export default async function Home({ searchParams }:SearchParams) {
const {page} =await searchParams;
  return (
    <div className="m-0">
      <SelectButton value="pagination"/>
      <SelectButton value="infinit scroll" />
    {/* <MainPage page={page}/> */}
    <InfiniteScroll/>
    </div>
  );
}
