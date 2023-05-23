import React from "react";
import Textlimit from "./Textlimit";
import HandleCardClick from "./Cardclick";

const Newscard = props => {
    console.log("props", props)
    const{val}=props


return(
    
    <div className="col" >
    <div className="card"  onClick={() => HandleCardClick(val.url)}>
      <img src={val.urlToImage  }  className="card-img-top image" alt={"loading...."} />
      <div className="card-body">
        <h5 className="card-title">{Textlimit(val.title, 10)}</h5>
        <p className="card-text">{Textlimit(val.description, 50)}</p>
        <p className="card-text  font"><span>Date</span> :{val.publishedAt}</p>
        <p className="card-text font" ><span>Source</span> :{val.source.name}</p>
        
      </div>
    </div>
  </div>
);
};

export default Newscard;

