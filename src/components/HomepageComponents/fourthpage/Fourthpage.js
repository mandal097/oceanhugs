import React, { useState } from 'react'
import './fouthpage.scss'
import Cards from './Cards'

import FirstCard from '../fourthpageCardView/FirstCardView/FirstCard'
import SecondCard from '../fourthpageCardView/SecondCardView/SecondCard'
import ThirdCard from '../fourthpageCardView/ThirdCardView/ThirdCard'
const Fourthpage = () => {

    const [show, setShow] = useState(true)
    const [showCard, setShowCard] = useState(false)

    const [firstView, setFirstView] = useState(false)
    const [secondView, setSecondView] = useState(false)
    const [thirdView, setThirdView] = useState(false)

    const firstCardFunc = () => {
        switch (show) {
            case true:
                setShow(false)
                setFirstView(true);
                setShowCard(true)
                // setId(0)
                break;
            case false:
                setShow(true)
                setFirstView(false);
                setShowCard(false)
                break;
            default:
                setShow(true)
                setFirstView(false)
                setShowCard(false)
        }
    }
    const secondCardFunc = () => {
        switch (show) {
            case true:
                setShow(false)
                setSecondView(true);
                setShowCard(true)
                // setId(1)
                break;
            case false:
                setShow(true)
                setSecondView(false);
                setShowCard(false)
                break;
            default:
                setShow(true)
                setSecondView(false)
                setShowCard(false)
        }
    }
    const thirdCardFunc = () => {
        switch (show) {
            case true:
                setShow(false)
                setThirdView(true);
                setShowCard(true);
                // setId(2)
                break;
            case false:
                setShow(true)
                setThirdView(false);
                setShowCard(false);
                break;
            default:
                setShow(true)
                setThirdView(false)
                setShowCard(false)
        }
    }
    const openFirst = () => {
        setFirstView(true)
        setSecondView(false)
        setThirdView(false)
        window.scrollBy(0, -1020)
    }
    const openSecond = () => {
        setSecondView(true)
        setFirstView(false)
        setThirdView(false)
        window.scrollBy(0, -1020)
    }
    const openThird = () => {
        setThirdView(true)
        setSecondView(false)
        setFirstView(false)
        window.scrollBy(0, -1020)
    }
    return (
        <>
            {
                show &&

                <div className='home_fourthpage'>
                    <div className="home_fourthpage_wrapper">
                        <div className="cards_container">
                            <Cards
                                cardImg='https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                                triptype='Honeymoon'
                                buttontext='Coming Back Then'
                                fun={firstCardFunc}
                            // data={data}
                            />
                            <Cards
                                cardImg='https://images.unsplash.com/photo-1543968332-f99478b1ebdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                                triptype='family'
                                buttontext='i am here...'
                                fun={secondCardFunc}
                            />
                            <Cards
                                cardImg='https://media.istockphoto.com/photos/cancun-beach-coast-with-sunsets-picture-id1286528283?b=1&k=20&m=1286528283&s=170667a&w=0&h=5Anw37mzNoBmnPbkuupQ3Dnw2dj-No4Fr4KEUH3KxmU='
                                triptype='wellness'
                                buttontext='when'
                                fun={thirdCardFunc}
                            />
                        </div>
                    </div>
                </div>
            }
            {
                firstView &&
                <FirstCard
                    fun={firstCardFunc}
                //  first={firstView} 
                //  second={secondView}
                //  third={thirdView}
                //  id={id}
                />
            }
            {
                secondView && <SecondCard fun={secondCardFunc} />
            }
            {
                thirdView && <ThirdCard fun={thirdCardFunc} />
            }
            {
                showCard &&
                <div className="remaining_card">
                    <div className="cards">
                        {!firstView &&
                            <Cards
                                cardImg='https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                                triptype='Honeymoon'
                                buttontext='Coming Back Then'
                                fun={openFirst}
                            />
                        }
                    </div>
                    <div className="cards">
                        {!secondView &&
                            <Cards
                                cardImg='https://images.unsplash.com/photo-1543968332-f99478b1ebdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                                triptype='family'
                                buttontext='i am here...'
                                fun={openSecond}
                            />
                        }
                    </div>
                    <div className="cards">
                        {!thirdView &&
                            <Cards
                                cardImg='https://media.istockphoto.com/photos/cancun-beach-coast-with-sunsets-picture-id1286528283?b=1&k=20&m=1286528283&s=170667a&w=0&h=5Anw37mzNoBmnPbkuupQ3Dnw2dj-No4Fr4KEUH3KxmU='
                                triptype='wellness'
                                buttontext='when'
                                fun={openThird}
                            />
                        }
                    </div>
                </div>
            }


        </>
    )
}

export default Fourthpage