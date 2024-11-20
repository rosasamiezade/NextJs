import MainPage from "@/components/MainPage";
import InfiniteScroll from '../components/InfiniteScroll/index';
import SelectButton from '../components/SelectButton/index';

export default async function Home() {
  return (
    <div className="m-0">
      <div>how do you want to see the characters ? </div>
      <SelectButton value="pagination"/>
      <SelectButton value="infiniteScroll" />
    {/* <MainPage page={page}/> */}
    {/* <InfiniteScroll/> */}
    </div>
  );
}
