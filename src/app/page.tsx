'use client'

import CharacterCard from "../components/CharacterCard";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const fetchCharacer = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
    return data.results;
  };

  const { data, isLoading, isError } = useQuery({
    queryFn: fetchCharacer,
    queryKey: ["Character"],
  });
  console.log(data);
  return (
    <div className="flex justify-center items-center py-[4.5rem] bg-[#272b33] min-h-[calc(-60px + 50vh)]">
      {data?.map((dataa) => {
        return <CharacterCard {...dataa} />;
      })}
    </div>
  );
}
