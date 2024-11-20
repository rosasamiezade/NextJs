import SelectButton from '../components/SelectButton/index';

export default async function Home() {
  return (
    <div className="m-0  bg-[#272b33] text-white w-full h-screen	flex flex-col justify-center ">
      <h1 className="">how do you want to see the characters ? </h1>
     <div className="flex w-1/2">
     <SelectButton value="pagination"/>
     <SelectButton value="infiniteScroll" />
     </div>
    </div>
  );
}
