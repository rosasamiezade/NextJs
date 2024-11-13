import axios from "axios";
interface IPaginationRequestProps {
    pageId:string;
}
const PaginationRequest= async({pageId}:IPaginationRequestProps)=>{
const respone = await axios.get(`https://rickandmortyapi.com/api/character/?page${pageId}`);
return respone?.data ; 

}

export default PaginationRequest;