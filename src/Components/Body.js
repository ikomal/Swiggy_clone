import Restcard from "./Restcard";
// import { resObj } from "../Utils/data";
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer";

// For git setup 2
const Body=()=>
{ 
    let [resList,setList]=useState([]);
    const [search,setSearch]=useState("");
    const [filteredrest,setfilteredrest]=useState([])
    useEffect(() =>{
      fetchdata()},[]);

    const fetchdata = async() =>{
      const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7979769&lng=75.8192578&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json=await data.json();
      console.log(json);
      setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
      setfilteredrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
      

      }
      // if(resList.length===0)
      // {
      //   return <h1><Shimmer/></h1>
      // }
return (resList.length===0)?(<Shimmer/>):(
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input type="text" name="" id="" value={search} onChange={(e)=>{
            setSearch(e.target.value);
          }} />
          <button className="searchbtn" onClick={()=>{
            const filteredSearch=resList.filter(
              (res)=>res.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setfilteredrest(filteredSearch);
          }}>Search</button>
        </div>
        <button className="filter-btn"onClick={()=>{
            const filteredList=resList.filter(
                (res)=>res.info.avgRating>4
            );
            
            setList(filteredList)
        }} >Top rated restaurents</button>
      </div>
      <div className="rest-cont ">
      {
        filteredrest.map((rest)=>
          <Restcard key={rest.info.id }resData={rest}/>
        )

      }
       </div>
    </div>
  )
}
export default Body;