import axios from "axios";
import InfiniteQuery from "../InfiniteQuery";

const InfiniteScroll = async({pageNumber}:string)=>{
const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
<InfiniteQuery Fn={res}/>
}

export default InfiniteScroll;