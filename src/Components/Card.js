import React from "react";
import './Card.css'

const Card = ({ name, id, email }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}/?set=set4`} alt="" width="50%" height="50%" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;