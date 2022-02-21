import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import './firstpage.scss'
// import ReactPlayer from 'react-player'
import Aos from "aos";
import "aos/dist/aos.css";


const Firstpage = () => {

    const [d, setD] = useState(false)
    const [mute, setMute] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 3000 });
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                setD(true)
                    setMute(true)
            }
            else {
                setD(false)
                setMute(false)
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })
    }, [])
    // const url = 'https://youtu.be/x2VR8k6F2w0'
    return (
        <>
            <Header />
            <div className='home_firstpage' id='firstpage'>
                <div className="home_firstpage_wrapper">
                    <div className="first_top">
                        <div className={d === true ? 'top' : 'top'}>
                            <div className="video" id='ha'>
                                <video className={d === true ? 'scrolled react-player' : 'react-player'} autoPlay
                                    // muted={mute === true ? false : true}
                                    muted
                                    controls
                                    loop >
                                    <source src='videos/player.mp4'  />
                                </video>
                                {/* <ReactPlayer
                                            url={url}
                                            // url='videos/player.mp4'
                                            className={d === true ? 'scrolled react-player' : 'react-player'}
                                            width='100%'
                                            height='100%'
                                            playing={true}
                                            // muted={d === true ? false : true}
                                            controls={true}
                                        /> */}
                                <span id='oceanhug' className={d === true ? 'fadeUP' : ''}>ocean <br /> hugs</span>

                                <div className='animated_div'>
                                    {/* <div className={d === true ? 'animated_div' : 'hide_animated_div'}> */}
                                    <div className="trip_types" >
                                        <div data-aos="fade-up-right" data-aos-delay="500">
                                            <p>private trips custom designed for you</p>
                                        </div>
                                        <div className='right' data-aos="fade-up-left" data-aos-delay="500">
                                            <p>+91 9890699991</p>
                                            <p>a@oceanhugs.com</p>
                                            <p>Start planning Your Next Trip</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <p className={d === true ? 'right' : ''}>Luxury Honeymoons , Family Vacations , Wellness Escapes</p>
                        </div>
                    </div>
                    <div className={d === true ? 'hide' : 'scroll_down'}>
                        <a
                            className="scrollText"
                            href="/"
                            onClick={e => {
                                let thirdPage = document.getElementById("ha");
                                e.preventDefault();  // Stop Page Reloading
                                thirdPage && thirdPage.scrollIntoView({ behavior: "smooth", block: "start" })
                            }}
                        >Scroll Down</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Firstpage
{/* <div className={d === true ? 'fadeUp' : 'top_circle'} >
                                        <div className={d === true ? 'fadeUP top_circle_img_div' : 'top_circle_img_div'} >

                                        </div>
                                        <div className={d === true ? 'fadeUPText' : 'top_circle_text'}>Trips Of Joy</div>
                                    </div> */}