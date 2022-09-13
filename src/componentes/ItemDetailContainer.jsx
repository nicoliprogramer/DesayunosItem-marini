import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";


const items = [
    {
        id: 1,
        title: "Box Premium",
        img: "./img/producto1.jpg",
    }
]


const ItemDetailContainer = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(items)
            }, 3000);
        });

        getData.then(res => setData(res))

    }), [];

    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer;
