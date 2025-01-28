import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SliderStyle from "../Css/MainView.module.css";
import { HiMiniShoppingBag } from "react-icons/hi2";



export function PetsCartForm({ products, setProducts }) {
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    isFreeShipping: false,
  });

  const formInputsHandler = (e) => {
    if (e.target.name === "isFreeShipping") {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    setProducts([...products, formValues]);
    setFormValues({
      name: "",
      price: "",
      isFreeShipping: false,
    });
  };

return (
  <div className="container">
    <div className="d-flex justify-content-strat p-5">
      <div className="column justify-content-start">
        <h2 className={`text-center ${SliderStyle.textspacing}`}>
          Pets shop products &nbsp; <HiMiniShoppingBag />
        </h2>
        <Form className="mt-5" onSubmit={addNewProduct}>
          <div className="column">
            <Form.Group className="mb-3 col-12" controlId="productName">
              <Form.Label className="fw-bold text-muted fs-5">
                Pet Product Name
              </Form.Label>
              <Form.Control
                onChange={formInputsHandler}
                type="text"
                value={formValues.name}
                placeholder="Enter Pet Product Name (e.g., Dog Toy)"
                name="name"
                style={{
                  width: "100%",
                  backgroundColor: "gainsboro",
                  color: "black",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-12" controlId="productPrice">
              <Form.Label className="fw-bold text-muted fs-5">
                Quantity
              </Form.Label>
              <Form.Control
                onChange={formInputsHandler}
                value={formValues.price}
                type="number"
                placeholder="Enter Product Quantity"
                name="price"
                style={{
                  width: "100%",
                  backgroundColor: "gainsboro",
                  color: "black",
                }}
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="freeShippingCheckbox">
            <Form.Check
              onChange={formInputsHandler}
              type="checkbox"
              checked={formValues.isFreeShipping}
              label="Free Shipping"
              name="isFreeShipping"
              className="black"
            />
          </Form.Group>

          {formValues.name && formValues.price ? (
            <Button
              style={{
                backgroundColor: "#3D2F26",
                borderColor: "#3D2F26",
                color: "white",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
              className="mt-5"
              type="submit"
            >
              Add to cart
            </Button>
          ) : (
            <Button
            disabled
              style={{
                backgroundColor: "#3D2F26",
                borderColor: "#3D2F26",
                color: "white",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
              className="mt-5"
              type="submit"
            >
              Add to cart
            </Button>
          )}
        </Form>
      </div>
    </div>
  </div>
);
}
