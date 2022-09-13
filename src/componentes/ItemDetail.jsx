import React from "react";
import "../componentes/styles/ItemDetail.css";

const ItemDetail = ({ data }) => {


    return (
        <div className="container">
            <div className="detail">
                <img className='detail__image' src={data.img} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
