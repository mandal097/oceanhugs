import React from 'react'
import './query.scss'
import { AiOutlineClose } from "react-icons/ai";
const Query = ({handleQueryModal}) => {
    return (
        <div className='query'>
            <div className="query_wrapper">
                <form action="">
                <div className="form_close" onClick={handleQueryModal}><AiOutlineClose /></div>
                    <span className='header_text'>Send Query</span>
                    <div className="input_div">
                        <label htmlFor="">Name : </label>
                        <input type="text" />
                    </div>
                    <div className="input_div">
                        <label htmlFor="">Contact Number : </label>
                        <input type="number" />
                    </div>
                    <div className="input_div">
                        <label htmlFor="">Email : </label>
                        <input type="email" />
                    </div>
                    <div className="input_div">
                        <label htmlFor="">Travel Dates : </label>
                        <input type="text" />
                    </div>
                    <div className="input_div">
                        <label htmlFor="">Types Of Holidays : </label>
                        <span>Honeymoon</span>
                        <span>Family</span>
                        <span>Wellness</span>
                        <span>Other</span>
                    </div>
                    <div className="input_div">
                        <textarea cols="30" rows="10" placeholder='Remarks'></textarea>
                    </div>
                    <div className="input_div">
                        <button type='submit'>send query</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Query