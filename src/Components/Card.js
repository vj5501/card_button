import React from "react";
import './Card.css'

export default function Card() {
  return (
    <div>
      <h1 className="text-center text-danger text-capitalize my-5">
        Course Cards Are Here !!!
      </h1>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="card">
              <img class="card-img-top" src="https://picsum.photos/200/301" alt="Image_over_here" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a class="btn btn-primary" href="#">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          
          <div class="col">
            <div class="card">
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="ime" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
