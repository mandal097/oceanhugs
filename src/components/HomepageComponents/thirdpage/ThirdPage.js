import React, { useEffect, useState } from 'react'
import './thirdpage.scss'
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight
} from 'react-icons/ai'
const ThirdPage = () => {
  // const book = document.querySelector('#book')
  const  [change  , setChange] =useState(false)
  const paper1 = document.querySelector('#p1')
  const paper2 = document.querySelector('#p2')
  const paper3 = document.querySelector('#p3')


  useEffect(()=>{
    setChange(true)
  },[])
  // const prevBtn = document.querySelector("#prev_btn")
  // const nextbtn = document.querySelector("#next_btn")
  // prevBtn.style.display = 'none'



  // variables
  let currentLocation = 1;
  let numbOfpage = 3;
  let Maxlocation = numbOfpage + 1

  // const openBook = () => {
  //   book.style.transform = 'translateX(50%)';
  // prevBtn.style.transform = 'translateX(-170px)';
  // nextbtn.style.transform = 'translateX(170px)';
  // }
  // const closeBook = (isAtBeggining) => {
  //   if (isAtBeggining) {
  //     book.style.transform = 'translateX(0%)';
  //   } else {
  //     book.style.transform = 'translateX(100%)';
  //   }
  // prevBtn.style.transform = 'translateX(0px)';
  // nextbtn.style.transform = 'translateX(0px)';
  // }



  // previous btn function

  const previousPage = () => {
    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          // closeBook(true)
          paper1.classList.remove('flippedo')
          paper1.style.zIndex = 3;
          break;
        case 3:
          paper2.classList.remove('flipped')
          paper2.style.zIndex = 2;
          break;
        case 4:
          // openBook()
          paper3.classList.remove('flipped')
          paper3.style.zIndex = 1;
          break;
        default:
        throw new Error('unknown state')
      }
    }
    currentLocation--;
  }


  // next btn function
  const nextPage = () => {
    if (currentLocation < Maxlocation) {
      switch (currentLocation) {
        case 1:
          // openBook();
          paper1.classList.add('flipped');
          paper1.style.zIndex = 1;
          break;
        case 2:
          paper2.classList.add('flipped');
          paper2.style.zIndex = 2;
          break;
        case 3:
          paper3.classList.add('flippedo');
          paper3.style.zIndex = 3;
          // closeBook(false);
          break;
        default:
        // throw new Error('unknown state')
      }
    }
    currentLocation++;

  }




  return (
    <div className='home_thirdpage' id='thirdPage'>
      <div className="home_thirdpage_wrapper">
        <div className="thirdpage_left">
          <div className="left_content">
            <h1>A Closer Look At OceanHugs</h1>
          </div>
        </div>
        <div className="thirdpage_right">
          {/* <Flip/> */}
          <button id='prev_btn' onClick={previousPage}> <AiOutlineArrowLeft /></button>
          {/*------------------------------------------------- book----------------------------------- */}
          <div id="book" className="book">
            {/* --------------------------paper1--------------------------- */}
            <div id="p1" className="paper flipped">
              <div className="front">
                <div id="f1" className="front-content">
                  <h1>front 1</h1>
                </div>
              </div>
              <div className="back">
                <div id="b1" className="back-content">
                  <div className="back_content_text">
                    <h1>why us</h1> <span><AiOutlineArrowRight /></span>
                  </div>
                  <div className="back_content_text">
                    <h1>what we do</h1> <span><AiOutlineArrowRight /></span>
                  </div>
                  <div className="back_content_text">
                    <h1>blogging</h1> <span><AiOutlineArrowRight /></span>
                  </div>
                </div>
              </div>
            </div>
            {/* --------------------------paper2--------------------------- */}
            <div id="p2" className="paper">
              <div className="front">
                <div id="f2" className="front-content">
                <div className="front-content-text">
                    <h1>Whats how we do</h1>
                  </div>
                  <div className="front-content-text">
                    <h1>inspiration</h1>
                  </div>
                  {/* <div className="front-content-text">
                    <h1>blogging</h1> <span><AiOutlineArrowRight /></span>
                  </div> */}
                </div>
              </div>
              <div className="back">
                <div id="b2" className="back-content">
                  <h1>back 2</h1>
                </div>
              </div>
            </div>
            {/* --------------------------paper3--------------------------- */}
            <div id="p3" className="paper">
              <div className="front">
                <div id="f3" className="front-content">
                  <h1>front 3</h1>
                </div>
              </div>
              <div className="back">
                <div id="b3" className="back-content">
                  <h1>back 3</h1>
                </div>
              </div>
            </div>
          </div>



          {/*------------------------------------------------- book----------------------------------- */}
          <button id='next_btn' onClick={nextPage}> <AiOutlineArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage