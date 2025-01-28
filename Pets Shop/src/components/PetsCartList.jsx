import React from "react";
import { Badge, Table, Button } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import SliderStyle from "../Css/MainView.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


export function PetsCartList({ products, setProducts }) {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <div className='container'>
      <div className="d-flex justify-content-start p-5">
        <div className="column justify-content-start"></div>
        <div className="col-md-6 col-sm-12">
        <h2 className={`text-start mb-3 ${SliderStyle.textspacing}`}>
          Cart
        </h2>
        <Table
          striped
          bordered
          hover
          responsive="sm"
          variant={theme === 'dark' ? 'dark' : 'light'}
        >
          <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Free Shipping</th>
            <th>Remove</th>
          </tr>
          </thead>
          <tbody>
          {products.map((product, index) => {
            return (
            <tr key={index}>
              <td className="py-0">{index + 1}</td>
              <td className="py-0">{product.name}</td>
              <td className="py-0">${product.price}</td>
              <td className="py-0">
              {product.isFreeShipping ? (
                <Badge bg="success">Free Shipping</Badge>
              ) : (
                <Badge bg="danger">No Free Shipping</Badge>
              )}
              </td>
              <td className="py-0">
              <MdDeleteForever
                onClick={() => {
                const newProducts = products.filter(
                  (product, i) => i !== index
                );
                setProducts(newProducts);
                }}
                className="fs-1 text-danger cursor-pointer"
              />
              </td>
            </tr>
            );
          })}
          </tbody>
        </Table>
        <Button
          style={{
          backgroundColor: "#3D2F26",
          borderColor: "#3D2F26",
          color: "white",
          paddingLeft: "30px",
          paddingRight: "30px",
          }}
          className="mt-2"
        >
          Purchase
        </Button>
        </div>
      </div>
      <div />
      </div>
    );
}
