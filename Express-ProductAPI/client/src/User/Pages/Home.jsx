import React from 'react'
import "./Home.css"
import Footer from '../Components/Footer'

export default function Home() {
    return (
      <>
        <div className="container-fluid p-0 m-0">
        <div
        className="px-lg-5 tns-item tns-slide-cloned tns-slide-active tns-fadeIn"
        style={{ backgroundColor: "rgb(42, 222, 174)", left: "0%" }}
      >
        <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
          <img
            className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
            src="https://images.ctfassets.net/ajjw8wywicb3/2kjA7yvX0SOSOaNAnQZDlV/d8b73d34c0c467912414a3d78e129256/Tide_HP_Product_by_type_Dec09.png"
            alt="Summer Collection"
          />
          <div
            className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
            style={{ maxWidth: "42rem", zIndex: 10 }}
          >
            <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
              <h3 className="h2 text-bold fw-light pb-1 from-start">
                Has just arrived!
              </h3>
              <h2 className="text-bold display-5 from-start delay-1">
                Huge Summer Collection
              </h2>
              <p className="fs-lg text-bold pb-3 from-start delay-2">
                Swimwear, Tops, Shorts, Sunglasses &amp; much more...
              </p>
              <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                <a className="btn btn-danger" href="#">
                  Shop Now
                  <i className="ci-arrow-right ms-2 me-n1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      </>
    )
}