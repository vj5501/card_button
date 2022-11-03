import React from "react";
import "./Card.css";

export default function Card(props) {
  return (

<div className="card" >
  <img className="image-container" src={props.img} alt={props.name}/>
  <div className="card-body">
    <h1 className="card-title">{props.name}</h1>
    <p className="card-text">{props.position}</p>
    <a href={props.linkedin} rel="noreferrer" target="_blank" className="btn btn-primary">LinkedIn</a>
  </div>
</div>

    // <div className="card">
    //   <div className=" card-container">
    //     <div className="image-container">
    //       <img src={props.img} alt={props.name} />
    //     </div>
    //     <div className="card-content">
    //       <div className="card-title">
    //         <h3>{props.name}</h3>
    //       </div>
    //       <div className="card-body">
    //         <h5>{props.position}</h5>
    //       </div>
    //     </div>
    //     <div className="btn">
    //       <button>
    //         <a href={props.linkedin} target="_blank">View LinkedIn</a>
    //       </button>
    //     </div>
    //   </div>
    // </div>

  );
}
