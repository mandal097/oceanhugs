// import React, { useState } from 'react'
import './firstCard.scss'
// import Cards from '../../fourthpage/Cards'
// import SecondCard from '../SecondCardView/SecondCard'
// import { data } from '../../../../data/index'
import {
    IoMdArrowBack
} from 'react-icons/io'
// import { useEffect, useState } from 'react'
const FirstCard = ({ fun, first, second, third, id }) => {
    return (
        <>
            <div className='first_card_view'  id='firstCard'>
                <div className="first_card_view_wrapper">
                    <div className="first_card_view_section">
                        <div className="first_card_view_section_banner">
                            <h1> HONEYMOONS</h1>
                        </div>
                    </div>
                    <div className="first_card_view_section first_card_view_section_bottom">
                        <div className="first_card_view_section_section"></div>
                        <div className="first_card_view_section_section"></div>
                    </div>
                    <div className="first_card_view_section first_card_view_section_bottom">
                        <div className="first_card_view_section_section"></div>
                        <div className="first_card_view_section_section"></div>
                    </div>
                    {/* <div className="first_card_view_section_cards">
                            <div className="first_card_view_section_card">
                                <Cards
                                    cardImg='https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                                    triptype='Honeymoon'
                                    buttontext='Coming Back Then'
                                    fun={fun}
                                // data={data}
                                />
                            </div>
                            <div className="first_card_view_section_card">
                                <Cards
                                    cardImg='https://images.unsplash.com/photo-1543968332-f99478b1ebdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                                    triptype='family'
                                    buttontext='i am here...'
                                    fun={fun}
                                />
                            </div>
                            <div className="first_card_view_section_card">
                                <Cards
                                    cardImg='https://media.istockphoto.com/photos/cancun-beach-coast-with-sunsets-picture-id1286528283?b=1&k=20&m=1286528283&s=170667a&w=0&h=5Anw37mzNoBmnPbkuupQ3Dnw2dj-No4Fr4KEUH3KxmU='
                                    triptype='wellness'
                                    buttontext='when'
                                    fun={fun}
                                />
                            </div>
                    </div> */}
                    <div className="backdiv">
                        <div onClick={fun} className="icon">
                            <IoMdArrowBack />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstCard