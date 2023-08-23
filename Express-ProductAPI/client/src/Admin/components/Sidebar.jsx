import React, { useEffect, useContext } from 'react'
import { FaHome } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import {BsCart4} from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom';
// import { GlobalContext } from '../../Context/context'
import { GlobalContext } from '../../Context/context';




export default function Sidebar() {

    const location = useLocation()
    const { state, dispatch } = useContext(GlobalContext)


    const NavItems = [
        {
            tab: "Home",
            url: "/",
            icon: <FaHome />
        },
        {
            tab: "Categories",
            url: "/category",
            icon: <BiCategoryAlt />
        },
        {
            tab: "Products",
            url: "/products",
            icon: <BsCart4 />
        }

    ]



    return (

        <>
            <div className="p-3 d-flex text-white justify-content-between align-items-center" style={{ backgroundColor: "rgb(42, 222, 174)", left: "0%" }}>
                <span>Zohaib</span>
                <button className="btn" style={{ backgroundColor: "rgb(16, 135, 103)" }}
                    onClick={() => dispatch({ type: "USER_LOGOUT" })}>Logout</button>
            </div>
            <ul className="nav flex-column pt-3">
                {
                    NavItems.map((val, key) =>
                        <li key={key} className={`nav-item m-2 ${location.pathname == val.url ? 'bg-white rounded' : null}`}>
                            <Link className="nav-link d-flex align-items-center justify-content-between" to={val.url}>
                                <span>{val.icon}</span>
                                <span>{val.tab}</span>
                            </Link>
                        </li>)
                }
            </ul>

        </>
    )
}

