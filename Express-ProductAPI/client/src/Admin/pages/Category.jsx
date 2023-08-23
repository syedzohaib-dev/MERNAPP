// import React, { useEffect, useState } from 'react'
// import CategoryModal from '../components/CategoryModal'
// import axios from 'axios'

// export default function Category() {


//   const [category, setCategory] = useState([])

//   useEffect(() => {
//     axios.get('/api/get-all-categories')
//       .then((json) => setCategory(json.data.allCategories))
//       .catch((err) => console.log(err))
//   }, [])

//   return (
//     <div className="container">
//       <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-3 rounded">
//         <span className='fs-bold fw-bold text-white'>Categories</span>
//         <CategoryModal recallData={setCategory} />
//       </div>
//       <div className="container">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">ID</th>
//               <th scope="col">Category Name</th>
//               <th scope="col">Category Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               category.map((val, key) =>
//                 <tr key={key}>
//                   <th scope="row">{val._id}</th>
//                   <td>{val.CategoryName}</td>
//                   <td><img src={val.CategoryImage} className='img-fluid' style={{ height: '5vh', objectFit: 'contain' }} alt="img" srcSet="" /></td>

//                 </tr>)
//             }
//           </tbody>
//         </table>

//       </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
export default function Category() {

  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get('/api/get-all-categories')
      .then((json) => setCategory(json.data.categories))
      .catch((err) => console.log(err))

  }, [])



  const deleteProduct = (CategoryName) => { console.log(CategoryName) }

  const dummy =(params) => console.log("called", params)



  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{ backgroundColor: "rgb(42, 222, 174)", left: "0%" }}>
        <span className='fs-4 fw-bold text-white'>Categories</span>
        <CategoryModal recallData={setCategory} />
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Image</th>
              <th scope="col">Actions</th>


            </tr>
          </thead>
          <tbody>
            {
              category?.map((val, key) =>
                <tr key={key}>
                  <th scope="row">{val._id}</th>
                  <td>{val.CategoryName}</td>
                  <td><img src={val.CategoryImage} className='img-fluid' style={{ height: '8vh' , width:'8vh', objectFit: 'contain' }} alt="" srcSet="" /></td>
                  <td>
                    <button className="btn mx-2 p-3" style={{ backgroundColor: "rgb(16, 135, 103)" }}><BsFillPencilFill /></button>
                    <button className="btn mx-2 p-3" style={{ backgroundColor: "rgb(16, 135, 103)" }} onClick={() => deleteProduct(val.CategoryName)}><AiFillDelete /></button>
                  </td>
                </tr>)
            }




          </tbody>
        </table>

      </div>
    </div>
  )
}