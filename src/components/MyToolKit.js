import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'


const Wrapper =styled.section`
.MyToolKit{
  background: #000;
padding-top: 30%;
padding-bottom: 30%;
}
.divs-combo{
  margin-left: 50px;
  margin-right: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.main-img{
display: none;
}
.FIGMA-IMG{
  width: 50%;

}
img{
  width: 70%;
}

h2{
  color: #fff;
    margin-top: 0;
    margin-bottom: 20%;
    /* margin-left: 20px; */
    font-size: 40px;
    font-family: ${(props)=>props.theme.fam.bold};

    text-align: center;
   
}
.div-1{
  display: flex;
  flex-direction: column;
position: relative;
gap: 20px;
}
.div-2{
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
top: 37px;
}


@media (min-width: 768px) {
  .MyToolKit{
  background: #000;
padding-top: 9%;
padding-bottom: 20%;
/* display: flex; */
/* align-items: center; */
/* justify-content: center; */
}
h2{
  position: relative;
  z-index: 2;
  color: #fff;
    margin-top: 0px;
    margin-bottom: 20%;
    top: 135px;
    font-size: 40px;
    text-align: center;
   
}
  .main-img{
    width: 100%;
    height: 330px;
    object-fit: cover;
display: block;
z-index: 1;
position: absolute;
}
img{
  width: 70%;
}
.FIGMA-IMG{
  width: 46%;

}
.divs-combo{
  z-index: 3;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  gap: 0px;
  justify-content: center;
}
.all-divs-combo{
  position: relative;
  display: flex;
  margin-top: 1.5%;
  margin-left: 120px;
  gap: 90px;
}
.div-1{
  display: flex;
  flex-direction: column;
position: relative;
gap: 30px;
top: 35px;
}
.div-2{
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
top: 80px;
}
}


@media (min-width: 992px) {
  .MyToolKit{
  background: #000;
padding-top: 7%;
padding-bottom: 16%;
/* display: flex; */
/* align-items: center; */
/* justify-content: center; */
}
  img{
  width: 70%;
}
.FIGMA-IMG{
  width: 50%;

}
.all-divs-combo{
  display: flex;
  margin-top: 1.5%;
  margin-left: 220px;
  gap: 140px;
}
h2{
  position: relative;
  z-index: 2;
  color: #fff;
    margin-top:126px;
    top: 0;
    margin-bottom: 0%;
    font-size: 40px;
    text-align: center;
   
}
}


@media (min-width: 1200px){
  .MyToolKit{
  background: #000;
padding-top: 2%;
padding-bottom: 10%;
}
img{
  width: 80%;
}
.FIGMA-IMG{
  width: 62%;

}
.main-img{
    width: 100%;
    height: 400px;
    object-fit: cover;
display: block;
z-index: 1;
position: absolute;
}
.all-divs-combo{
  display: flex;
  margin-top: 3.9%;
  margin-left: 290px;
  gap: 140px;
}
h2{
  position: relative;
  z-index: 2;
  color: #fff;
    margin-top: 110px;
    margin-bottom: 0%;
    font-size: 68px;
    text-align: center;
   
}
.divs-combo{
  
  gap: 20px;
  justify-content: center;
}
.div-1{
  display: flex;
  flex-direction: column;
position: relative;
gap: 40px;
top: -5px;
}
.div-2{
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
top: 65px;
}
}
`
function MyToolKit() {

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      easing: 'ease-out', // Animation easing
      delay: 200, // Delay between animations
      mirror: true, // Mirror animations on scroll up/down
    });
  }, []);
  return (
    <Wrapper>
     <div className='MyToolKit'>
     <img className='main-img' src="./dylan-home-images/toolRectangle-image.png" alt=""/>
     <div className='all-divs-combo'>
        <h2 data-aos="fade-right">My Tool Kit.</h2>

<div className='divs-combo'>

<div  data-aos="fade-down" className='div-1'>
<img  className='FIGMA-IMG' src="./dylan-home-images/logos_figma.png" alt=""/>   
<img src="./dylan-home-images/logos_adobe-illustrator.png" alt=""/>
</div>
{/* end   */}
<div  data-aos="fade-up"  className='div-2'>
<img src="./dylan-home-images/logos_adobe-xd.png" alt=""/>
<img src="./dylan-home-images/logos_adobe-photoshop.png" alt=""/>
</div>


 </div>

 </div>
</div> 
    </Wrapper>
  )
}

export default MyToolKit
