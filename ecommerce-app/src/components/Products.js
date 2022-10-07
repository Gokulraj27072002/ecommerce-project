import React from "react";
import { useState, useEffect } from "react";
function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <></>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons  d-flex justify-content-center mb-5 pb-5">
          <a href="" className="btn btn-outline-dark ms-2">
            All
          </a>
          <a href="" className="btn btn-outline-dark ms-2">
            Men's Clothing
          </a>
          <a href="" className="btn btn-outline-dark ms-2">
            Women's Clothing
          </a>

          <a href="" className="btn btn-outline-dark ms-2">
            Jewelery
          </a>

          <a href="" className="btn btn-outline-dark ms-2">
            Electronics
          </a>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12  mb-5">
              <h1 className="display-6 text-center fw-bolder ">
                Latest Products
              </h1>
            </div>
            <hr></hr>
          </div>

          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>

          <div className="row justify-content-center ">
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4" key={product.id}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                  <p class="card-text lead fw-bold">RS.{product.price}</p>
                  <a href="#" class="btn btn-outline-dark">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        </div>
      </div>

      
      
    </>
  );
}

export default Products;
