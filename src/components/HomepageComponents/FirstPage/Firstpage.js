import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import './firstpage.scss'
import Aos from "aos";
import "aos/dist/aos.css";


const Firstpage = () => {

    const [d, setD] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 3000 });
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setD(true)
                // document.body.style.overflow = "scroll"
            }
            else if (window.scrollY === 0) {
                // document.body.style.overflow = 'hidden'
            }
            else {
                setD(false)
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
                    <div className="first_top" id='ha'>
                        <div className={d === true ? 'top' : 'top'}>
                            <div className="video">
                                <video className={d === true ? 'scrolled react-player' : 'react-player'} autoPlay
                                    muted
                                    controls
                                    loop >
                                    <source src='videos/player.mp4' />
                                </video>
                                <span id='oceanhug' className={d === true ? 'fadeUP' : ''}>ocean hugs</span>
                                {/* <div className={d === true ? 'animated_div' : 'hide_animated_div'}> */}
                                <div className='animated_div'>
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
                        <span
                            className="scrollText"
                            href="/"
                            onClick={e => {
                                // let thirdPage = document.getElementById("thirdPage");
                                // e.preventDefault();  // Stop Page Reloading
                                // thirdPage && thirdPage.scrollIntoView({ behavior: "smooth", block: "start" })
                                window.scroll({
                                    top: '120',
                                    behavior: 'smooth'
                                })

                            }}
                        >
                            {/* Scroll Down */}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Firstpage;