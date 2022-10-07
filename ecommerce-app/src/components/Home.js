import React, { useState ,useEffect} from "react";
import Products from "./Products";
function Home() {

    
    
  return (

    <>
    <div className="hero">
      <div className="card bg-dark text-white">
        <img
          className="card-img"
          src="/assets/images/bg.jpg"
          alt="Background"
          height={"740px"}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
           
          </div>
        </div>
      </div>
    </div>

    <Products/>
    </>
  );
}

export default Home;
