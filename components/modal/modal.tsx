import React, {useEffect, useState} from 'react';
import style from './modal.module.scss';
import Image from "next/image";
import close from "@/images/close.svg";
import ugol from "@/images/modal/ugol.svg";
import ugol2 from "@/images/modal/ugol_2.svg";
import bg_img from "@/images/modal/bg_fon.svg";


const initText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi consequatur dicta dolores ducimus eos esse, eveniet ipsum labore magni molestiae nam natus officia pariatur perspiciatis placeat unde vel voluptatibus."
const Modal = (props: any) => {

    const [text, setText] = useState("");

    useEffect(() => {
        setText(props.text ? props.text : initText);
    },[]);

    if(!props.show) {
        return null
    }


    return (
        <div className={style.main}>
            <div className={style.wrapper}>
                <Image className={style.decor__left} src={ugol} alt={"ugol_icon"} width={30} height={30}/>
                <Image className={style.decor__right} src={ugol2} alt={"ugol_icon"} width={30} height={30}/>
                <button className={style.wrapper__btn} onClick={props.showHandell}>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={style.wrapper__svg} fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000"/>
                    </svg>
                </button>
                <Image className={style.decor__bg} src={bg_img} alt={"bg_icon"} width={300} height={300}/>
                <p className={style.wrapper__text}>{text}</p>
            </div>
        </div>
    );
};

export default Modal;