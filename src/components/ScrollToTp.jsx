import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const ScrollToTp = () => {
  const [scrollState, setScrollState] = useState(true)
  
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  
  // when pages scrolls down logo appears at right bottom
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  
  return (
   <Totop onClick={toTop} scrollState = {scrollState}>
    <img src={logo} alt=""/>
   </Totop>
  )
}

export default ScrollToTp

const Totop = styled.div`
   display: ${({ scrollState }) => (scrollState ? "block" : "none")};
   position: fixed;
   bottom: 1rem;
   right: 1rem;

   img{
    height: 2rem;
   }
   border-radius: 2rem;
   background-color: #1900ff39;
   padding: 1rem;
   cursor: pointer;
`