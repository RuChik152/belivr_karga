import React, {useState} from 'react';
import style from "../styles/idea.module.scss";
import cn from "classnames";
import { send } from 'emailjs-com';
import Link from "next/link";

const Idea = () => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [msg, setMsg] = useState('');

    const [check, setCheck] = useState(false);

    const [toSend, setToSend] = useState({
        msg,
        name,
        mail
    })

    const handleChange = (e: any) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    //TODO TypeScript
    const onSubmit = (e:any) => {
        e.preventDefault();
        send(
            'service_c4fjcgb',
            'template_6pyqn3m',
            toSend,
            'vEIbt93WbmNJOInXY'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        setToSend({
            msg: '',
            name: '',
            mail: ''

        })
    };

    const handelCheckBox = (e: any) => {
        e.preventDefault()
        setCheck(!check);
    }

    return (
        <>
            <div className={style.main}>
                <div className={style.logo__block}>
                    <h1 className={style.logo__block__text}>Tell</h1>
                    <h1 className={style.logo__block__text}>us about</h1>
                    <h1 className={style.logo__block__text}>your idea</h1>
                </div>
                <div className={style.form__wrapper}>\
                    <div className={style.tittle}>
                        <p className={style.tittle__text}>Fill out the form or email <Link className={style.mail} href="mailto:info@belivr.tech?subject=To suggest an idea">info@belivr.tech</Link></p>
                    </div>
                    <form className={style.form} onSubmit={onSubmit}>
                        <input className={cn([`${style.input}`])} type = "text" name="name" placeholder="NAME" value={toSend.name} onChange={handleChange}/>
                        <input className={cn([`${style.input}`])} type = "email"  name="mail" placeholder="EMAIL ADDRESS" value={toSend.mail} onChange={handleChange}/>
                        <input className={cn([`${style.input}`])} type = "text" name="msg" placeholder="MESSAGE" value={toSend.msg} onChange={handleChange}/>
                        <div className={style.box__send}>
                            <div className={style.check__container}>
                                <label className={style.label} onClick={handelCheckBox}>
                                    <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.41235" width="24.9313" height="24.9313" transform="matrix(0.706175 -0.708037 0.706175 0.708037 1.35908 20.5093)" stroke="#F1A738" strokeWidth="2"/>
                                        <path className={cn({
                                            [style.check_item] : check === false,
                                            [style.check_item__active] : check === true,
                                        })} d="M11 16.3637L19.75 25L39 6" stroke="#F1A738" strokeWidth="2" strokeLinecap="square"/>
                                    </svg>
                                    <input onClick={handleChange} onChange={() => setCheck(!check)} checked={check} className={style.container__checkbox} type="checkbox" />
                                    <p className={style.container__title}>I have read and agree to the Privacy policy</p>
                                </label>
                            </div>


                            <button className={style.btn} disabled={!toSend.name || !toSend.mail || !toSend.msg || check === false}>
                                <svg className={cn({
                                    [style.arrow__btn] : (!toSend.name || !toSend.mail || !toSend.msg || check === false) === false,
                                    [style.arrow__btn__check] : (!toSend.name || !toSend.mail || !toSend.msg || check === false) === true
                                })} width="117" height="119" viewBox="0 0 117 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M57.0936 1.44097L115 59.5M115 59.5L57.0936 117.559M115 59.5H3.51713e-08" strokeWidth="2"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default Idea;