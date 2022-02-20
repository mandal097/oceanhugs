import React from 'react'
import './cards.scss'
const Cards = ({ cardImg, triptype, buttontext , fun }) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={cardImg} alt="" />
      </div>
      <div className="card_content">
        <div className="card_content_title">{triptype}</div>
        <button onClick={fun}>{buttontext}</button>
      </div>
    </div>
  )
}

export default Cards