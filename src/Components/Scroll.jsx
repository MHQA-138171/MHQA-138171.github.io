import React from "react";
import "./scroll.css"

const scroll = (props) => {
    return (
        <div className="main" style={{ overflowY: 'scroll', height: '500px' }}>
            {props.children}
        </div>
    )
};

export default scroll