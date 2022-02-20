import React from 'react'
import './index.scss'
const Index = (props) => {

    return (
        <div className='menu_icon' style={{border:props.b ? '2px solid white' : '2px solid black'}}>
            <div className={props.hide === true ? 'hide' : ''}>M</div>
            <div className="cross">
                <span style={{backgroundColor:props.b ? 'white' : 'black'}}  className={props.hide === true ? 'first' : ''}></span>
                <span style={{backgroundColor:props.b ? 'white' : 'black'}}  className={props.hide === true ? 'hide' : ''}></span>
                <span style={{backgroundColor:props.b ? 'white' : 'black'}}  className={props.hide === true ? 'third' : ''}></span>
            </div>
            <div className={props.hide === true ? 'hide' : ''}>N</div>
            <div className={props.hide === true ? 'hide' : ''}>U</div>
        </div>
    )
}

export default Index