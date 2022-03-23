import React from 'react'
import './vid.scss'
const Vid = () => {
    return (
        <div className="full_video">
            <video className='full_vid_' autoPlay
                muted
                controls
                loop >
                <source src='videos/player.mp4' />
            </video>
        </div>
    )
}

export default Vid