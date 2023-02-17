import React from 'react';
import style from "./videoBanner.module.scss"

const VideoBanner = () => {
    return (
        <div className={style.main}>
            <div className={style.wrapper}>
                <video className={style.video} preload={'auto'} loop={true} autoPlay={true} muted={true} >
                    <source src="/video/bg_blurs_video.webm" type='video/webm; codecs="vp8, vorbis"' />
                    {/*<source src="/video/bg_blur_video.mp4" type="video/mp4"/>*/}
                    <source src="/video/bg_blurs_video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                </video>
            </div>
        </div>
    );
};

export default VideoBanner;