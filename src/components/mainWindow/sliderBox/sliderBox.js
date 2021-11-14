import React, { useEffect, useState } from 'react';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from './sliderBox.module.css';

function SliderBox () {

    const [data, setData] = useState();

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    async function getDatabase() {
        let response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
        let dataBase = await response.json();
        console.log(dataBase);

        let filteredData = [];

        for(let i = 0; i < dataBase.length; i++) {
            if(dataBase[i].price < 5) {
                console.log(dataBase[i]);
                filteredData.push(dataBase[i]);
            }
        }

        console.log(filteredData);
        setData(filteredData);
    }

    useEffect(()=>{
        getDatabase();
    },[]);


    return (
        <Slider {...settings} className={classes['wrap']}>
            {!!data&&data.map(item=><div className={classes['slide']}>
                <div className={classes['quotes']}>“</div>
                <div className={classes['main-text']}>{item.name}</div>
                <div className={classes['author']}>{item.price}</div>
            </div>)}
        </Slider>
    );
};

export default SliderBox;