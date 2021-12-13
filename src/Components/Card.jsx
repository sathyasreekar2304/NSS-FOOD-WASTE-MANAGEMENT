import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ 
    imgsrc,
    title
}) => {

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card h-100">
                    <img src={imgsrc} height='300' className="card-img-top" id="coverImg" alt="card" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <NavLink to="/login" className="btn btn-primary">Donate</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
