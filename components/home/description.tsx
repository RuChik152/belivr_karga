import style from "./description.module.scss";
import {useEffect, useRef, useState} from "react";
import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
// @ts-ignore
import bg from "../../public/images/sky.png";
import {bulletText} from '../../lib/mock_data';
import Bullet from "./bullet/bullet";
import bg_logo from "../../public/images/BG_BOX_TITTLE_DESCRIPTION_2.webp";

import elements from "../../public/images/bullet/mini/elements.png";
import hero from "../../public/images/bullet/webp/dragon.webp";
import width from "../../public//images/bullet/webp/witch-transformed.webp";
import skeleton from "../../public/images/bullet/webp/skeleton-transformed.webp";


const styleConfig = {
    width: 554,
    height: 554,
    color: '#8B2062',
}


const Description = () => {
    const styled = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const configStyle = {
        backgroundImage: `url(${bg_logo.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }

    useEffect(() => {
        const list = document.querySelector(`${style.present__item}`);
    },[])


    return (
        <div className={style.main}>
            <div style={styled} className={style.bg}></div>
            <div  id="about" className={style.wrapper__text}>
                <div style={configStyle} className={style.box__tittle}>
                    <h2 className={style.tittle}>Just start playing and find out my secret</h2>
                    <p className={style.desc}>We are &apos;BELIVR&apos; - a young game&apos;s developer. We present our first project and enter the gaming industry with the fantasy VR shooter &apos;Karga&apos;</p>
                </div>
                <div className={style.bullet__container}>
                    <Bullet src={elements} name={bulletText[0].name} text={bulletText[0].text} width={styleConfig.width} height={styleConfig.height} color={styleConfig.color}/>
                    <Bullet src={hero} name={bulletText[1].name} text={bulletText[1].text} width={styleConfig.width} height={styleConfig.height}/>
                    <Bullet src={width} name={bulletText[2].name} text={bulletText[2].text} width={styleConfig.width} height={styleConfig.height} color={styleConfig.color}/>
                    <Bullet src={skeleton} name={bulletText[3].name} text={bulletText[3].text} width={styleConfig.width} height={styleConfig.height} color={styleConfig.color}/>
                </div>
            </div>

        </div>
    );
};


export default Description;