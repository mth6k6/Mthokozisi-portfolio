import React from 'react';
import './introduction.css';
import download from '../../apparatus/download.png';
import myImageBg from '../../apparatus/myImageBg.png';
import { Link } from 'react-scroll';


export const Introduction = () => {
  return (
   <section id="intro">
    <div className="introDisplay">
        <span className="hello">Hello,</span>
        <span className="text"> I'm <span className="myName">Mthokozisi</span> <br/>Software Developer</span>
         <p className="shortDiscription">As a young recent Information and communication technology(ICT) graduate,
         I am seeking <br/>a very challenging career within a progressive organization that provides an opportunity 
         <br/>to learn new skills and capitalize my coding skills, analytical skills and abilities within IT field.</p>
              <a href="JMthokozisNxumaloResume.pdf" download="JMthokozisNxumaloResume">
                 <button className="btn">  <img src={download} alt="download" className="downloadImg"/>My Resume</button>
                 </a> 
                 <Link></Link>
    </div>
            <img src={myImageBg} alt="myImage" className="myImageBg"/>
   </section>
  );
}
export default Introduction;
