import React from 'react'
import './secondcard.scss'
// import Cards from '../../fourthpage/Cards'
import {
    IoMdArrowBack
} from 'react-icons/io'
const SecondCard = ({ fun }) => {
    return (
        <div className='second_card_view'>
            <div className="second_card_view_wrapper">
                <div className="second_card_view_section">
                    <div className="second_card_view_section_banner">
                        <h1 > FAMILY</h1>
                    </div>
                </div>
                <div className="second_card_view_section second_card_view_section_bottom">
                    <div className="second_card_view_section_section"></div>
                    <div className="second_card_view_section_section"></div>
                </div>
                <div className="second_card_view_section second_card_view_section_bottom">
                    <div className="second_card_view_section_section"></div>
                    <div className="second_card_view_section_section"></div>
                </div>
                {/* <div className="second_card_view_section_cards">
                    <div className="second_card_view_section_card">
                    <Cards
                        cardImg='https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        triptype='Honeymoon'
                        buttontext='Coming Back Then'
                    />
                    </div>
                    <div className="second_card_view_section_card">
                        <Cards
                            cardImg='https://media.istockphoto.com/photos/cancun-beach-coast-with-sunsets-picture-id1286528283?b=1&k=20&m=1286528283&s=170667a&w=0&h=5Anw37mzNoBmnPbkuupQ3Dnw2dj-No4Fr4KEUH3KxmU='
                            triptype='wellness'
                            buttontext='when'
                        />
                    </div>
                </div> */}

                <div className="backdiv">
                    <div  onClick={fun} className="icon">
                        <IoMdArrowBack />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondCard