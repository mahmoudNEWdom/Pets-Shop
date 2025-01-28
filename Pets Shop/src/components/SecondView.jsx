
import { Card } from "react-bootstrap";
import SecondViewStyle from "../Css/SecondView.module.css";

import { Counter } from "./Counter";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useFetch } from "../MyFetchHook/FetchHook";

export default function SecondView() {

    const { theme } = useContext(ThemeContext);
    const [showMore, setShowMore] = useState({});
    const { data } = useFetch("http://localhost:3009/animalList");
  return (
    <div
      className="container p-5 d-flex flex-wrap justify-content-around
      col-12 col-md-10 mt-5"
    >
      {data.map((animal) => {

        return (
          <Card
            key={animal.id}
            style={{ width: "18rem" }}
            className={`${SecondViewStyle.img} m-2 ${
              theme === "dark" ? "bg-dark" : "bg-light"
            } ${SecondViewStyle.element}`}
          >
            {/*img style شغال منغير ما احط الكلاس */}
            <Card.Img
              variant="top"
              src={`http://localhost:3009/${animal.img}`}
            />
            <Card.Body className={`${theme === "dark" ? "text-white" : ""}`}>
              <Card.Title>{animal.kind}</Card.Title>
              <Card.Text className="text-left ">
                <strong>Species:</strong> {animal.species}
                <br />
                <strong>Age:</strong> {animal.age} months
                <br />
                <strong>Price:</strong> {animal.price}$
                <br />
                <strong>Description: </strong>
                {showMore[animal.id]
                  ? animal.description
                  : `${animal.description.substring(0, 20)}...`}
                <br />
                <span
                  onClick={() =>
                    setShowMore((prev) => ({
                      ...prev,
                      [animal.id]: !prev[animal.id],
                    }))
                  }
                  className={`${theme === "dark" ? "text-warning" : "text-primary"}`}
                  style={{ cursor: "pointer" }}
                >
                  {showMore[animal.id] ? "Show Less" : "Show More"}
                </span>
                <br />
              </Card.Text>
              <Counter />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
