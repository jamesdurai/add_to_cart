import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add } from "./myOrderSlice";

const Product = () => {
  let [products, setProducts] = useState([
    { id: 1, name: "Kesavan" },
    { id: 2, name: "Muruga" },
  ]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let dispatch = useDispatch();

  let addToWishlist = (product) => {
    dispatch(add(product));
  };

  let newProducts = products.map((product) => (
    <Card
      key={product.id}
      style={{ width: "18rem" }}
      className="col-md-3 text-center my-2 mx-1"
    >
      <center>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100px", height: "150px" }}
        />
      </center>
      <Card.Body
        style={{
          height: "30%",
          display: "grid",
          alignContent: "space-between",
        }}
      >
        <div style={{ height: "90%" }}>
          <Card.Title> {product.title} </Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text style={{ height: "40%" }}>{product.description}</Card.Text>
        </div>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Button
        variant="primary"
        onClick={() => {
          addToWishlist(product);
        }}
      >
        {" "}
        {/* <FaCartShopping /> */}
        <MdAddShoppingCart />{" "}
      </Button>
    </Card>
  ));

  return (
    <div>
      <h1> Product details </h1>
      <section className=" row justify-content-center">{newProducts}</section>
    </div>
  );
};

export default Product;
