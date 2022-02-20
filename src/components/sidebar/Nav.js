import React, { useState, useEffect } from 'react'
import './nav.scss'
import styled from 'styled-components'
const Nav = ({showNav}) => {
    const [bg, setBg] = useState(false)
   

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBg(true)
            } else {
                setBg(false)
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })

    }, [])

    return (
        <Container className='nav' bh={bg} 
        style={{transform:`translateX(${showNav})`}}
        >
            <div className="nav_wrapper">
                <ul>
                    <li><a href="/">contact us</a></li>
                    <li><a href="/">honeymoons</a></li>
                    <li><a href="/">family trips</a></li>
                    <li><a href="/">wellness escapes</a></li>
                    <li><a href="/">stans - the hottest <br /> "most wanted list "</a></li>
                    <li><a href="/">why us</a></li>
                    <li><a href="/">about us</a></li>
                    <li><a href="/">reviews</a></li>
                    <li><a href="/">credentials</a></li>
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.div`
transition: all 500ms linear;
/* background:${props => props.b ? 'linear-gradient(rgba(0,0,0,1),rgba(0,0,0,1))' : 'none'}; */
.nav_wrapper{
    ul{
        li{
            /* border-bottom:${props => props.b ? '1.5px solid white' : '1.5px solid black'}; */
            a{
                color:${props => props.b ? 'white' : 'black'};                
            }
        }
    }
}
`
export default Nav