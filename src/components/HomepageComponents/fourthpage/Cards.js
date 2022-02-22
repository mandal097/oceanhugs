import React from 'react'
import './cards.scss'
const Cards = ({ cardImg, triptype, buttontext, fun }) => {
  const handleClick =() =>{
    fun()
  }
  return (
    <div className="card">
      <div className="card_img">
        <img src={cardImg} alt="" />
      </div>
      <div className="card_content">
        <div className="card_content_title">{triptype}</div>
        <button onClick={handleClick}>{buttontext}</button>
      </div>
    </div>
  )
}

export default Cards