import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { removeItem } from "./myOrderSlice";

const MyWishlist = () => {
  let cartProduct = useSelector((state) => state.myOrder);

  let dispatch = useDispatch();

  let removeProduct = (productID) => {
    dispatch(removeItem(productID));
  };

  let wishlistProducts = cartProduct.map((product) => (
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
          removeProduct(product.id);
        }}
      >
        <MdOutlineRemoveShoppingCart />
      </Button>
    </Card>
  ));

  return (
    <div className="row">
      {cartProduct.length === 0 && <h1> Cart is Empty </h1>}
      {wishlistProducts}
    </div>
  );
};

export default MyWishlist;
