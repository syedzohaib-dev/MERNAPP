import React, { useEffect, useState } from 'react'
import ProductModal from '../components/ProductModal'
import axios from 'axios'
import {AppRoute} from '../../App'

// import {AppRoute} from '../../App'
export default function Products() {


  const [Product, setProduct] = useState([])

    axios.get(`${AppRoute}api/get-all-products`).then(json=> setProduct(json.data.Products))
    .catch(err => console.log(err.message))



  return (

    <div className="container">
      <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{ backgroundColor: "rgb(42, 222, 174)"}}>
        <span className='fs-4 fw-bold text-white'>Products</span>
        <ProductModal />
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">thumbnail</th>
              <th scope="col">imageArray</th>
              <th scope="col">Name</th>
              <th scope="col">Product</th>
              <th scope="col">Brands</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>



            </tr>
          </thead>
          <tbody>
            {
              Product.map((val, key) =>
                <tr key={key}>
                  <th scope="row">{val._id}</th>
                  <td>{val.productName}</td>
                  <td>{val.category}</td>
                  <td>{val.brand}</td>
                  <td>{val.price}</td>
                  <td>{val.description}</td>

                  <td><img src={val.thumbnail} className='img-fluid' style={{ height: '15vh', objectFit: 'contain' }} alt="" srcSet="" /></td>

                </tr>)
            }




          </tbody>
        </table>

      </div>
    </div>
  )
}