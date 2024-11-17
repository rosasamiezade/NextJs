import axios from "axios";
import CharacterList from "../CharactersList";
import Controls from "../Pagination/Controls";

interface ImainPageProps{
    page:string;
}
const MainPage:React.FC<ImainPageProps>= async({page})=>{
    const pageNumber=page??"1";
const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
        const CharactesData=response.data;
        if(!response){
            return <div> error ... </div>
        }
        
return(
    <div className="bg-[#272b33]">
        <CharacterList results={CharactesData.results}/>
        <Controls info={CharactesData.info} pageNumberSt={pageNumber} />
    </div>
)
}
export default MainPage;