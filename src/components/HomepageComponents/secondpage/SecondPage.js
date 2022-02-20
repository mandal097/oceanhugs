import React, { useState, useEffect } from 'react'
import './secondpage.scss'
import Aos from "aos";
import "aos/dist/aos.css";
import ReactPlayer from 'react-player'
const SecondPage = () => {
    // const [d, setD] = useState(false)
    // const [trans, setTrans] = useState('-100rem')
    // const [opacity, setOpacity] = useState(0)
    // const url = 'https://youtu.be/x2VR8k6F2w0'

    const [isPlaying, setIsPlaying] = useState(true)
    const [translate, setTranslate] = useState('-10rem')


    useEffect(() => {
        Aos.init({ duration: 2000 });
        setIsPlaying(true)
        setTranslate('-100rem')
    }, [])
    return (
        <div className='home_secondpage' id='secondpage'>
            <div className="home_secondpage_wrapper">
                <div className="main">
                    <div className="oceanhug"
                    // style={{ transform: `translateY(${translate})` }}
                    >
                        <h1>ocean hugs</h1>
                    </div>
                    <div className="video">
                        <div className="videoPlayer"

                        // style={{ opacity: `(${opacity})` }}
                        >
                            <ReactPlayer
                                url='videos/player.mp4'
                                // className={trans===false ? 'scrolled':'react-player'}
                                className='react-player'
                                width='100%'
                                height='100%'
                                playing={isPlaying}
                                controls={true}
                            />
                            {/* <video className='react-player' autoPlay controls loop >
                                <source src='videos/player.mp4' />
                            </video> */}
                        </div>
                    </div>
                    <div className="trip_types" >
                        <div data-aos="fade-up-right"  data-aos-delay="1000">
                            <p>private trips custom designed for you</p>
                        </div>
                        <div className='right' data-aos="fade-up-left"  data-aos-delay="1000">
                            <span>+91 9890699991</span>
                            <span>a@oceanhugs.com</span>
                            <span>Start planning Your Next Trip</span>
                        </div>
                    </div>
                    <div className="scroll_down">

                        <span>   <a
                            className="scrollText"
                            href="/"
                            onClick={e => {
                                let thirdPage = document.getElementById("thirdPage");
                                e.preventDefault();  // Stop Page Reloading
                                thirdPage && thirdPage.scrollIntoView({ behavior: "smooth", block: "start" })
                            }}
                        >Scroll Down</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage