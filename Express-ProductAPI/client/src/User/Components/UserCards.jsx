import React from 'react'
import { Link } from 'react-router-dom'


export default function UserCards({ name, image, url }) {
    return (
        <div className="col-md-3 py-3">
            <Link to={url} className='text-decoration-none'>
                <div className="card">
                    <img src={image} className="card-img-top" alt={name} style={{ height: '30vh', objectFit: 'contain' }} />
                    <div className="card-body" style={{ backgroundColor: "rgb(42, 222, 174)", left: "0%" }}>
                        <h5 className="card-title text-center">{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}