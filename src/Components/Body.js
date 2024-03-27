import Restcard from "./Restcard";
import { resObj } from "../Utils/data";
import {useState} from "react"


// let resList=[
//

// ];
const Body=()=>
{ 
    let [resList,setList]=useState(resObj);
return(
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn"onClick={()=>{
            const filteredList=resList.filter(
                (res)=>res.info.avgRating>4
            );
            
            setList(filteredList)
        }} >Top rated restaurents</button>
      </div>
      <div className="rest-cont">
      {
        resList.map((rest)=>
          <Restcard key={rest.info.id }resData={rest}/>
        )

      }
       </div>
    </div>
  )
}
export default Body;