import { CDN_URL } from "../Utils/constants";

const Restcard=(props)=>{ 
    const {resData}=props
    const{name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info;
    const{deliveryTime}=resData?.info.sla;
    return(
      <div className="res-card">
        <img src= {CDN_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
           
      </div>  
    )
  }
  export default Restcard;