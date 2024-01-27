// import React from 'react';
// import styled from 'styled-components';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



// const Wrapper = styled.section`

//   .div-combo-1 {
//     align-items: flex-end;
//   display: flex;
//   flex-direction: column;
//     @media (min-width: 768px) {
// display: flex;
// flex-direction: row-reverse;
// margin-right: 60px;

//     }
//     @media (min-width: 1200px) {
// display: flex;
// flex-direction: row-reverse;
// margin-right: 150px;
// margin-bottom: 4%;
//     }
//   }

//   .div-combo-2 {
//     padding-top: 5%;
//     padding-bottom: 5%;
//     align-items: flex-end;
//   display: flex;
//   flex-direction: column;
//   @media (min-width: 768px) {
// display: flex;
// flex-direction: row;
// margin-left: 50px;

//     }
//   @media (min-width: 1200px) {
// margin-left: 153px;
// padding-bottom: 6%;

//     }
//   }

//   .div-combo-3 {
//     align-items: flex-end;
//   display: flex;
//   flex-direction: column;
//   @media (min-width: 768px) {
// display: flex;
// flex-direction: row;
// margin-left: 50px;

//     }
//     @media (min-width: 1200px) {
// margin-left: 152px;
//     }
//   }


//   .svg-div-1 {
//     @media (min-width: 768px) {
//       position: relative;
//       bottom: 18px;
//     }
//     @media (min-width: 1200px) {
//       position: relative;
//       bottom: 18px;
//       border: 1px solid white ;
//       right: 8px;
//     }
//   }

//   .svg-div-2 {
//     @media (min-width: 1200px) {
//       position: relative;
//       right: 21px;

//       /* bottom: 18px; */
//     }
//   }

//   .svg-div-3 {
//     @media (min-width: 768px) {
//       position: relative;
//       bottom: 3px;
      
//     }
//   }




//   .text{
//     padding-bottom: 10%;
//     @media (min-width: 768px) {
//       padding-bottom: 0%;

//     }
//   }
//   .project-image-1 {
//     width: 90%;
//     display: flex;
//     margin: 0 auto;
//     border-radius: 3%;
//     @media (min-width: 768px) {
//       width: 60%;
//       border-radius: 1%;
// height: 260px;
// object-fit: cover;
//     }
//     @media (min-width: 992px) {
//       width: 100%;
//       border-radius: 1%;
// height: 250px;
// object-fit: cover;
//     }
//     @media (min-width: 1200px) {
//       width: 65%;
//       height: 420px;
//       border-radius: 0%;

//     }
//   }

//   .project-image-2 {
//     border-radius: 3%;
//     width: 90%;
//     display: flex;
//     margin: 0 auto; 
//     @media (min-width: 768px) {
// width: 40%;
// max-height: 200px;
// border-radius: 1%;
//     }
//     @media (min-width: 1200px) {
//       width: 31%;
// max-height: 550px;
// border-radius: 0%;
//     }
//    }

//   .project-image-3 {
//     border-radius: 3%;
//     width: 90%;
//     display: flex;
//     margin: 0 auto;
//     @media (min-width: 768px) {
// width: 40%;
// max-height: 200px;
// border-radius: 1%;
//     }
//  @media (min-width: 1200px) {
// width: 31%;
// max-height: 550px;
// border-radius: 0%;
//     }
//     }
//   /* end of images 
//   */

//   .project-description-3 {
//     position: relative;
//     display: flex;
//     color: white;
//     margin-left: 20px;
//     margin-right: 77px;
// line-height: 1.3;
// margin-top: 5%;
// @media (min-width: 768px){
//   align-items: flex-end;
//   margin-right: 214px;
//   line-height: 1.4;
// }
// @media (min-width: 992px){
//   margin-right: 361px;
//   line-height: 1.2;
// }
// @media (min-width: 1200px) {
//   margin-right: 500px;
//   font-size: 23px;
//   margin-left: 115px;
//   line-height: 1.4;
//   font-weight: 300;

// }
//   }

//   .project-description-2 {
//     position: relative;
//     display: flex;
//     color: white;
//     margin-left: 20px;
//     margin-right: 50px;
// line-height: 1.3;
// margin-top: 5%;
// @media (min-width: 768px){
//   align-items: flex-end;
//   margin-right: 212px;
//   line-height: 1.4;
// }
// @media (min-width: 992px){
//   margin-right: 365px;
//   line-height: 1.2;

// }
// @media (min-width: 1200px){
//   margin-right: 500px;
//   font-size: 23px;
//   margin-left: 115px;
//   line-height: 1.4;
//   font-weight: 300;


// }
//   }

//   .project-description-1 {
//     position: relative;
//     display: flex;
//     color: white;
//     margin-left: 20px;
//     margin-right: 20px;
// line-height: 1.3;
// margin-top: 5%;
// @media (min-width: 768px){
//   align-items: flex-end;
//   margin-right: 36px;
//   margin-left: 50px;
//   line-height: 1.4;
// }
// @media (min-width: 992px){
//   margin-right: 50px;
//   line-height: 1.2;

// }
// @media (min-width: 1200px){
//   margin-right: 90px;
//   margin-top: 2%;
//   line-height: 1.4;
//   margin-left: 147px;
// font-size: 23px;
// font-weight: 300;
// }
//   }




//   /* the title  */
//   .project-title-1 {
//     color: white;
//     font-size: 30px;
//     margin-left: 20px;
//     margin-bottom: 5%;
//     margin-top: 10%;
//     @media (min-width: 768px){
//       font-size: 22px;
//       margin-top: 0;
//       margin-bottom: 3%;
//       font-weight: 900;
//       margin-left: 50px;
// }

// @media (min-width: 992px) {
//   margin-bottom: 1%;
// }
// @media (min-width: 1200px) {
//   font-size: 16px;
//   font-weight: 400;
//   margin-left: 150px;
//   margin-bottom: 0%;

// }
//   }




//   .project-title-2 {
//     color: white;
//     font-size: 30px;
//     margin-left: 20px;
//     margin-bottom: 5%;
//     margin-top: 10%;
//     @media (min-width: 768px){
//       font-size: 22px;
//       margin-top: 0;
//       margin-bottom: 3%;
//       font-weight: 900;
// }

// @media (min-width: 992px) {
//   margin-bottom: -3%;
// }
// @media (min-width: 1200px) {
//   font-size: 16px;
//   font-weight: 400;
//   margin-left: 113px;

// }
//     }

//   .project-title-3 {
// color: white;
//     font-size: 30px;
//     margin-left: 20px;
//     margin-bottom: 5%;
//     margin-top: 10%;
//     @media (min-width: 768px){
//       font-size: 22px;
//       margin-top: 0;
//       margin-bottom: 3%;
//       font-weight: 900;

// }
// @media (min-width: 992px) {
//   margin-bottom: -3%;
// }
// @media (min-width: 1200px) {
//   font-size: 16px;
//   font-weight: 400;
//   margin-left: 113px;


// }
//     }


// /* the icon  */
// .svg-div{
// height: 40px;
// width: 40px;
// border: 2px solid white;
// border-radius: 100%;
// display: flex;
// justify-content: center;
// margin-left: 20px;
// align-items: center;
// }
// .project-icon-1 {
//   position: relative;
//   top: 15px;
//   right: 0;
//     font-size: 60px;
//     color: white;

//     @media (min-width: 992px) {
//       top: 20px;
//       right: 10px;

//     }
//   }
// .project-icon-2 {
//     font-size: 60px;
// color: white;

//   }
// .project-icon-3-{
//     font-size: 60px;
//     color: red;
//   }


// `;

const Project = ({ project }) => {
  const { title, description, imageUrl, icon } = project;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Animation easing
      delay: 1700, // Delay between animations
      mirror: true, // Mirror animations on scroll up/down
    });
  }, []);


  return (
    <div className="project">
      <div className={`div-combo div-combo-${project.id}`}>
        <motion.img
          src={imageUrl}
          className={`project-image project-image-${project.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
           alt={title}
        />
        
        <div className="text">
          <h3 className={`project-title project-title-${project.id}`}>
            {title}
          </h3>

          <p
            className={`project-description project-description-${project.id}`}
          >
            {description}
            <span className={`project-icon project-icon-${project.id}`}>
              <div className={`svg-div svg-div-${project.id}`}>
                <IoIosArrowRoundForward />
              </div>
            </span>
          </p>
        </div>
      </div>

      <div className={`project-icon project-icon-${project.id}`}>{icon}</div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'The National Art Gallery App - Designed for the National Gallery of Zimbabwe ',
    imageUrl: './images/card.png',

  },
  {
    id: 2,
    title: 'Package Design',
    description: 'Redbull Afrika Edition - Concept Can For Africa',
    imageUrl: './images/redbull.png',
  },
  {
    id: 3,
    title: 'Branding Design',
    description: 'MI5 Group - Visual Language Of The Brand',
    imageUrl: './images/mi5.png',
  },
  // Add more project objects as needed
];

const Portfolio = () => {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
};

export default Portfolio;
