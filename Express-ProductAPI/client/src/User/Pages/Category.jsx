import React from 'react'
import UserCards from '../Components/UserCards'
import Footer from '../Components/Footer'
import Home from './Home'

export default function Category() {
    const data = [
        {
            "_id": "64d63cd890b9b70fbbaef7a1",
            "CategoryName": "Rice",
            "CategoryImage": "https://thewanderlustkitchen.com/wp-content/uploads/2013/12/Perfect-White-Rice-Recipe-Redo-17-2.jpg",
            "__v": 0
        },
        {
            "_id": "64db963596d9b2ff825d6307",
            "CategoryName": "Pants",
            "CategoryImage": "https://www.postie.co.nz/content/products/womens-wide-leg-cargo-pants-khaki-a-outfit-818783.jpg",
            "__v": 0
        },
        {
            "_id": "64db967096d9b2ff825d630c",
            "CategoryName": "T Shirts",
            "CategoryImage": "https://img.freepik.com/free-psd/isolated-regular-plain-black-tshirt_125540-2942.jpg",
            "__v": 0
        },
        {
            "_id": "64dbd0834f7c0ee40cf76669",
            "CategoryName": "Glacess",
            "CategoryImage": "https://i.pinimg.com/236x/6f/f2/f7/6ff2f7d0f25e4683391b66dc423e09f4.jpg",
            "__v": 0
        },
        {
            "_id": "64e1083b8f84466db23e79d9",
            "CategoryName": "Tai",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2F91PYhMvkWDL._AC_UY1100_.jpg?alt=media&token=3b892adf-6798-4ff9-b748-a2db5b0db582",
            "__v": 0
        },
        {
            "_id": "64e108498f84466db23e79e0",
            "CategoryName": "tai",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2F91PYhMvkWDL._AC_UY1100_.jpg?alt=media&token=3d585cb6-b220-4810-b3d2-f8331e7c732f",
            "__v": 0
        },
        {
            "_id": "64e10e6daebe7e25a15108cc",
            "CategoryName": "Car sticker",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2Ffree-car-icon-2901-thumb.png?alt=media&token=ecb97bb3-4338-4185-985e-981654b87f11",
            "__v": 0
        },
        {
            "_id": "64e115f1aebe7e25a15108d0",
            "CategoryName": "brown jacket",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2FOIP.jfif?alt=media&token=598cf922-c8e2-46f5-a966-1e4da48b1e08",
            "__v": 0
        },
        {
            "_id": "64e12597aebe7e25a1510945",
            "CategoryName": "blue shoes",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2FNice-New-Mens-Shoes-Spring-Pu-Leather-Shoes-Men-Fashion-Breathable-Casual-Shoes-British-Invisible-Within.jpg?alt=media&token=45b8be4b-b6ae-4c84-9757-0065773622d0",
            "__v": 0
        },
        {
            "_id": "64e12c3ba2e40f38170b91b6",
            "CategoryName": "I phone 12 ",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2FOIP%20(5).jfif?alt=media&token=07151a1f-ce02-4de5-93d9-9337fbdc508c",
            "__v": 0
        },
        {
            "_id": "64e12ed7a2e40f38170b91c8",
            "CategoryName": "HP Pavelion Laptop",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2FOIP%20(7).jfif?alt=media&token=7b9f71b2-2bc8-43e8-95dd-31d160ebd280",
            "__v": 0
        },
        {
            "_id": "64e12f30a2e40f38170b91d0",
            "CategoryName": "Apple Watch",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2Fdownload.jfif?alt=media&token=38caf485-3f61-4dac-bff8-adb1af6be957",
            "__v": 0
        },
        {
            "_id": "64e13029a2e40f38170b91e0",
            "CategoryName": "Black Watch",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2FOIP%20(3).jfif?alt=media&token=ac7c9fe4-43d7-4104-9f75-66fc4a72a512",
            "__v": 0
        },
        {
            "_id": "64e13119a2e40f38170b91e6",
            "CategoryName": "Paper Bags",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2Fth.jfif?alt=media&token=8c1f2387-91fb-4c22-8739-13c52fa8d550",
            "__v": 0
        },
        {
            "_id": "64e1336de724fd6327b893c1",
            "CategoryName": "Brown Lather Bag",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2FOIP%20(2).jfif?alt=media&token=d448acb0-67f4-4ad6-b15c-580a5dcbccbc",
            "__v": 0
        },
        {
            "_id": "64e13499e724fd6327b893ca",
            "CategoryName": "Red Bag",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2FOIP%20(1).jfif?alt=media&token=60afb78b-07cc-402b-bce3-a77470df97b1",
            "__v": 0
        },
        {
            "_id": "64e13562e724fd6327b893d1",
            "CategoryName": "Nike Shoes",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2FNice-New-Mens-Shoes-Spring-Pu-Leather-Shoes-Men-Fashion-Breathable-Casual-Shoes-British-Invisible-Within.jpg?alt=media&token=f62c7859-5736-4aa3-9503-af48e7e6e045",
            "__v": 0
        },
        {
            "_id": "64e13671c0d122fad3bb8e88",
            "CategoryName": "I Phone XS",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2FOIP%20(6).jfif?alt=media&token=3a57db83-1d52-4248-ac60-11ef63a12bc1",
            "__v": 0
        },
        {
            "_id": "64e13774c0d122fad3bb8e92",
            "CategoryName": "Lather Jacket",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2FOIP.jfif?alt=media&token=98805778-4ec3-4b8a-9179-b489ed4c9e94",
            "__v": 0
        },
        {
            "_id": "64e137bac0d122fad3bb8e98",
            "CategoryName": "Chip LED",
            "CategoryImage": "https://firebasestorage.googleapis.com/v0/b/bq-express-api.appspot.com/o/images%2Fcategory%2Fdownload%20(1).jfif?alt=media&token=7fa44540-b07c-4b42-80de-b7a51b340251",
            "__v": 0
        }
    ]
    

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
            src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1677486229058/f6867cdb4c2f73805b3fe7f1ff24495c.png"
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
    
       
       
        <div className="container-fluid">
        
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>
    
           

            <div className="row">
                {
                    data.map((val, key) => <UserCards key={key} image={val.CategoryImage} name={val.CategoryName} />)
                }

            </div>
        </div>
        

        <Footer/>
        </>
    )
}