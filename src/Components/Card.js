import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className=" card-container">
        <div className="image-container">
          <img src={props.img} alt={props.name} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{props.name}</h3>
          </div>
          <div className="card-body">
            <p>{props.position}</p>
          </div>
        </div>
        <div className="btn">
          <button>
            <a href={props.linkedin}>View LinkedIn</a>
          </button>
        </div>
      </div>
    </div>

    // <div class="container text-center">
    //   <div class="row">
    //       <div class="card">
    //         <img class="card-img-top" src={props.img} alt={props.name} />
    //         <div class="card-body">
    //           <h5 class="card-title">{props.name}</h5>
    //           <p class="card-text">
    //             {props.position}
    //           </p>
    //           <a class="btn btn-primary" href={props.linkedin}>
    //             linkedin logo
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    // </div>
  );
}
