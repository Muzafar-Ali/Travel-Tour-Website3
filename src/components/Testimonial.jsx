import React from 'react'
import styled from 'styled-components'
import avatarImage from '../assets/avatarImage.jpg'

const Testimonial = () => {
  return (
    <Section>
      <div className="title">
        <h2>Happy Customers</h2>
      </div> 
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dolor facilis necessitatibus ab unde totam ea, 
            veritatis est nostrum expedita iure assumenda cupiditate autem accusamus iste eum quod quasi ipsam?
          </p>
          <div className="info">
            <img src={avatarImage} alt=''/>
            <div className="details">
              <h4> Mr Richard</h4>
              <span>CEO - Auto Solutions</span>
            </div>  
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dolor facilis necessitatibus ab unde totam ea, 
            veritatis est nostrum expedita iure assumenda cupiditate autem accusamus iste eum quod quasi ipsam?
          </p>
          <div className="info">
            <img src={avatarImage} alt=''/>
            <div className="details">
              <h4> Mr Samuel</h4>
              <span>Cutomer Service Head - IKEA</span>
            </div>  
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dolor facilis necessitatibus ab unde totam ea, 
            veritatis est nostrum expedita iure assumenda cupiditate autem accusamus iste eum quod quasi ipsam?
          </p>
          <div className="info">
            <img src={avatarImage} alt=''/>
            <div className="details">
              <h4> Mr Ibraham</h4>
              <span>Manager - Mashreq Bank</span>
            </div>  
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Testimonial

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
          padding: .4rem 0;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;