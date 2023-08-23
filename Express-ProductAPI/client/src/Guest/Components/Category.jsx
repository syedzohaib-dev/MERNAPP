import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'

export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('/api/get-all-categories')
            .then(json => setCategory(json.data.categories))
            .catch(err => alert(err.message))

    }, [])

    return (

       <>
       <div className="container-fluid m-0 p-0">
       <div
        className="px-lg-5 tns-item tns-slide-cloned tns-slide-active tns-fadeIn"
        style={{ backgroundColor: "rgb(42, 222, 174)", left: "0%" }}
      >
        <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
          <img
            className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
            src="https://eadn-wc01-6313565.nxedge.io/wp-content/uploads/2021/04/defy-damage-group-2021.png"
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
                Huge Product Collection
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
        
        <div className="container-fluid">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Explore our extensive range of products across various categories, including fashion, electronics, home appliances, beauty, lifestyle, and much more. Discover the latest fashion trends, high-quality electronics, and lifestyle essentials all in one place.</small>
            </div>

            <div className="row my-5">
                {
                    category.map((val, key) => <GuestCards key={key} image={val.CategoryImage} name={val.CategoryName} />)
                }

            </div>
        </div>
        </>
    )
}