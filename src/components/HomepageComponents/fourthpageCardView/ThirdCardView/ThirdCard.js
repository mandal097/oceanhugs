import React from 'react'
import './thirdCard.scss'
import Cards from '../../fourthpage/Cards'
const ThirdCard = ({fun}) => {
    return (
        <div className='third_card_view'>
            <div className="third_card_view_wrapper">
                <div className="third_card_view_section">
                    <div className="third_card_view_section_banner">
                        <h1 onClick={fun}> HONEYMOONS</h1>
                    </div>
                </div>
                <div className="third_card_view_section third_card_view_section_bottom">
                    <div className="third_card_view_section_section"></div>
                    <div className="third_card_view_section_section"></div>
                </div>
                <div className="third_card_view_section third_card_view_section_bottom">
                    <div className="third_card_view_section_section"></div>
                    <div className="third_card_view_section_section"></div>
                </div>
                <div className="third_card_view_section_cards">
                    <div className="third_card_view_section_card">
                    <Cards
                        cardImg='https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        triptype='Honeymoon'
                        buttontext='Coming Back Then'
                    />
                    </div>
                    <div className="third_card_view_section_card">
                        <Cards
                            cardImg='https://images.unsplash.com/photo-1543968332-f99478b1ebdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                            triptype='family'
                            buttontext='i am here...'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdCard