import React, {useContext, useEffect, useState} from 'react';
import {SliderContext} from "./Sliders";
import Image from "next/image";
import style from "./Slide.module.scss";
import Arrow from "./Arrow";


const img_params = {
    width: 650,
    height: 500
}

const configAdaptive = {
    ifWidthMoreHeight: {
       width: '90vh',
       height: '90vh',
    },
    ifWidthLessHeight: {
        width: '90vw',
        height: '90vw',
    }

}


const Slide = () => {

    const {slide, list, setSlide} = useContext(SliderContext)

    const [position, setPosition] = useState(0)
    const [width, setWidth] = useState(img_params.width)
    const [currentPosition, setCurrentPosition] = useState(1)
    const [touchPosition, setTouchPosition] = useState(null)
    const [diff, setDiff] = useState<boolean | null>(null);

    const [widthAdaptive, setWidthAdaptive] = useState<number | null>(null)
    const [heightAdaptive, setHeightAdaptive] = useState<number | null>(null)


    const checkResizeWindow = () => {
        setWidthAdaptive(window.screen.width);
        setHeightAdaptive(window.screen.height);
        if(typeof widthAdaptive === "number" && typeof heightAdaptive === "number") {
            if(widthAdaptive > heightAdaptive) {
                setDiff(true)
            }
            if(widthAdaptive < heightAdaptive) {
                setDiff(false)
            }
        }
    }

    useEffect(() => {
        checkResizeWindow()
        window.addEventListener('resize', checkResizeWindow)
    })


    const handleTouchStart = (e:any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const close = () => {
        setPosition(0);
        setCurrentPosition(1)
        setTouchPosition(null);
        setSlide(null);
    }

    const handleTouchMove = (e: any) => {
        const touchDown = touchPosition
        if(touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            const lnList =  ((list.length - 1) * -100)
            const check = position == lnList

            if(!check) {
                nextPosition()
            }
        }

        if (diff < -5) {
            const check = position != 0
            if(check) {
                backPosition()
            }

        }

        setTouchPosition(null)
    }


    const nextPosition = () => {
        setCurrentPosition(currentPosition + 1);
        setPosition(position - 100);
    }


    const backPosition = () => {
        setCurrentPosition(currentPosition - 1);
        setPosition(position + 100);
    }



    if(slide == null) {
        return null
    }

    return (
        <div className={style.container}>
            <div style={ diff ? configAdaptive.ifWidthMoreHeight : configAdaptive.ifWidthLessHeight } className={style.wrapper}>
                <button className={style.close__btn} onClick={close}>
                    <svg className={style.close__btn__img} width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0318 2.14347L7.78917 6.38611L12.0318 10.6287L10.6176 12.043L6.37496 7.80032L2.13232 12.043L0.718104 10.6287L4.96075 6.38611L0.718104 2.14347L2.13232 0.729254L6.37496 4.97189L10.6176 0.729254L12.0318 2.14347Z" fill="#F1A738"/>
                    </svg>
                </button>
                <Arrow nextSlide={ nextPosition } backSlide={ backPosition } currentPosition={currentPosition}/>
                <ul style={ diff ? {...configAdaptive.ifWidthMoreHeight, transform: `translateX(${position}%)`, transition: '1s ease-in-out'} : {...configAdaptive.ifWidthLessHeight, transform: `translateX(${position}%)`, transition: '1s ease-in-out'} }  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} className={style.main} >
                    <li className={style.item__img}>
                        <Image style={ diff ? configAdaptive.ifWidthMoreHeight : configAdaptive.ifWidthLessHeight } quality={55} className={style.img} src={list[slide].src} alt="icon" width={img_params.width} height={img_params.height}/>
                    </li>
                    {
                        list.map((el, index) => {
                            if(index !== slide){
                                return <li className={style.item__img} key={index}>
                                    <Image
                                        quality={55}
                                        className={style.img}
                                        src={list[index].src}
                                        alt="icon"
                                        width={img_params.width}
                                        height={img_params.height}
                                        style={ diff ? configAdaptive.ifWidthMoreHeight : configAdaptive.ifWidthLessHeight }
                                    />
                                </li>

                            }
                        })
                    }
                </ul>
            </div>
        </div>

    );
};

export default Slide;