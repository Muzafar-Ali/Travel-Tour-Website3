import React from 'react'
import styled from 'styled-components'
import {BsLinkedin, BsFacebook, BsInstagram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2023 Travel <sup>&reg;</sup> All rights reserved</span>
      <ul>
        <li> <a href='#hero'>Home</a> </li>
        <li> <a href='#services'>Services</a> </li>
        <li> <a href='#recommend'>Places</a> </li>
        <li> <a href='#testimonials'>Testimonials</a> </li>
      </ul>
      <ul className="social__Links">
        <li> <BsFacebook/> </li>
        <li> <BsLinkedin/> </li>
        <li> <BsInstagram/> </li>
      </ul>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  justify-content:  space-evenly;
  background-color: #d0d8ff;
  padding: 2.5rem;
  border-radius: 0.5rem;
  ul{
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li{
      a{
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover{
          color: #302ce9;
        }
      }
      svg{
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover{
          color: #302ce9;
        }
      }
    }

  }
`