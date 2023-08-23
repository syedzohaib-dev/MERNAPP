import React from 'react';
import { Link } from 'react-router-dom';

export default function GuestCards({ name, image }) {
    return (
        <div className="col-md-3">
            <Link to={`/${name.split(' ').join('-')}`} className='text-decoration-none'>
                <div className="card">
                    <img src={image} className="card-img-top p-5" alt={name} style={{ height: '40vh', objectFit: 'contain' }} />
                    <div className="card-body" style={{ backgroundColor: "rgb(42, 222, 174)", left: "0%" }}>
                        <h3 className="card-title text-center">{name}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}