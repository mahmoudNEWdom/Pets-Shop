import React, { useContext } from 'react'
import SliderStyle from '../Css/MainView.module.css'
import { Button, Container } from 'react-bootstrap';
import Slider from './Slider';

export default function MainView() {

return (
  <>
    <Container>
      <section className=" col-12 row gx-0">
        <div
          className={`col-12 col-lg-7 ${SliderStyle.bgimage} justify-content-center align-items-center d-flex flex-column`}
        >
          <h3 className={`fs-4 text-center ${SliderStyle.textspacing}`}>
            <i className="fa fa-paw" aria-hidden="true"></i>
            &nbsp; Made with love
          </h3>
          <h3 className={`fs-4 text-center ${SliderStyle.textspacing}`}>
            for pets
          </h3>
          <Button
            style={{
              backgroundColor: "#3D2F26",
              borderColor: "#3D2F26",
              color: "white",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
            className="mt-5"
          >
            Shop now
          </Button>
        </div>
        <div className="col-12 col-lg-3">
          <Slider />
        </div>
      </section>
    </Container>
  </>
);
}
