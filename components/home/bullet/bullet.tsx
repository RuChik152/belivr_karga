import React, {useState} from 'react';
import Image from "next/image";
import style from "./bullet.module.scss";
import Modal from "../../modal/modal";

interface BulletProps {
    src: any,
    text: string,
    width: number,
    height: number,
    name: string,
    color?: string
}



const Bullet = (props: BulletProps) : JSX.Element => {

    const [active, setActive] = useState(false);

    const [config, setConfig] = useState({
        src: props.src,
        width: props.width,
        height: props.height,
        name: props.name,
        text: props.text,
        styleText: {
            color: props.color ? props.color : '#FFFFFF'
        }
    })

    const showModalText = () => {
        setActive(!active);
    }

    return (
        <div className={style.main}>
            <Modal show={active} showHandell={showModalText} text={config.text}/>
            <Image onClick={showModalText}  unoptimized={true} className={style.main__img} src={config.src} width={config.width} height={config.height} alt="image_bullet" quality={1}/>
            <p style={config.styleText} className={style.main__name}>{config.name}</p>
            <p className={style.main__text}>{config.text}</p>
        </div>
    );
};

export default Bullet;