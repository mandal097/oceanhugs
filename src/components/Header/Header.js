import React, { useEffect, useState } from "react";
import './header.scss'
import Query from '../Query/Query'
import styled from "styled-components";
import Nav from '../sidebar/Nav'
import Index from '../MenuIcon/Index'

const Header = (props) => {
    const [showQuery, setShowQuery] = useState(false)
    const [bg, setBg] = useState(false)
    const [showMob, setShowMob] = useState(false)
    const [showNav, setShowNav] = useState('40rem')
    const [hide, setHide] = useState(false)

    const handleQueryModal = () => {
        switch (showQuery) {
            case false:
                setShowQuery(true);
                break;
            case true:
                setShowQuery(false);
                break;
            default:
                setShowQuery(false)
        }
    }
    const handleNav = () => {
        switch (showNav) {
            case '40rem':
                setShowNav(0);
                setHide(true)
                break;
            case 0:
                setShowNav('40rem');
                setHide(false)
                break;
            default:
                setShowNav('40rem')
                setHide(true)
        }
    }

    const showMobile = () => {
        setShowMob(true)
        setTimeout(() => {
            setShowMob(false)
        }, 10000);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
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
        <Container b={bg} className="menu" id="menu">
            {showMob && <div className="mob_number">+91 9890699991</div>}
            <div className="menu_wrapper">
                <div className="left">
                    <span onClick={showMobile}>call us!</span>
                    <span onClick={handleQueryModal}>Send Enquiry </span>
                </div>
                <div className="right" onClick={handleNav}>
                    {/* <img src="images/menu.jpeg" alt="" /> */}
                    <Index hide={hide} b={bg}/>
                </div>
            </div>
            {
                showQuery && <Query handleQueryModal={handleQueryModal} />
            }
            {/* {
                showNav && 
            } */}
            <Nav handleNav={handleNav} showNav={showNav} />
        </Container>
    )
};

const Container = styled.div`
transition: all 500ms linear;
background:${props => props.b ? 'linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,1))' : 'none'};
color:${props => props.b ? 'white' : 'black'};
`

export default Header;