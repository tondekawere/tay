// import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Wrapper=styled.section`
padding-top: 5%;
padding-bottom: 8%;
.p{
  color :white;
  /* margin-left: 20px; */
  text-align: center;
  font-size: 20px;
  margin-bottom: 4%;
  @media (min-width: 992px) {
    margin-bottom: 3%;

  }
  @media (min-width: 1200px) {
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 2%;

  }
}


.a-h3{
  position: relative;
  color :white;
  font-size: 30px;
  margin-left: 20px;
  display: flex;
  align-items: center;
&:before{
  content: '';
  position: absolute;
  width: 222px;
  height: 2.5px;
  background: white;
  top: 120%;
}
@media (min-width: 768px) {
  margin-bottom: 28%;
  font-size: 25px;

}
}


h2{
  color :white;
  text-align: center;
  /* margin-left: 20px; */
  font-size: 40px;
  font-family: ${(props)=>props.theme.fam.bold};
margin-bottom: 15%;
@media (min-width: 992px){
  margin-bottom: 9%;

}
@media (min-width: 1200px) {
  font-size: 74px;
  margin-bottom: 8%;

}
}


.hr-div{
  margin-top: 9%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-top: 3%;
margin-right: 103px;
gap: 0px;
  }
  @media (min-width: 992px) {
    margin-top: 2%;

  }
  @media (min-width: 1200px) {
    margin-top: 6%;
    margin-right: 185px;

  }
}
hr{
  border: none;
  height: 2px;
  width: 90%;
  display: flex;
  margin: 0 auto;
  background: white;
  @media (min-width: 768px) {
    width: 50%;

  }
  @media (min-width: 992px) {
    width: 66%;

  }
  @media (min-width: 1200px) {
    width: 64%;
margin-right: 71px;
  }
}
.svg-div{
  height: 40px;
width: 40px;
border: 2px solid white;
border-radius: 100%;
display: flex;
justify-content: center;
margin-left: 20px;
align-items: center;
}
svg{
  font-size: 40px;  
 font-weight: 300;
}
@media (min-width: 1200px){
  padding-top: 4%;
  padding-bottom: 6%;

}
`
function MyWork() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Animation easing
      delay: 1700, // Delay between animations
      mirror: true, // Mirror animations on scroll up/down
    });
  }, []);

  return (
    <Wrapper>
        <p  className='p'>Check out some of my work</p>
        <h2>My Portfolio</h2>
        <Portfolio/>
        <div className='hr-div'>
       <hr/>
       <a><h3 className='a-h3'>All Projects<div className='svg-div'><IoIosArrowRoundForward/></div> </h3></a>
        </div>
    </Wrapper>
  )
}

export default MyWork
