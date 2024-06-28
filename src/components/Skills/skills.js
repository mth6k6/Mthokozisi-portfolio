import React from 'react';
import './skills.css';
import frontend from '../../apparatus/frontend.png';
import backend from '../../apparatus/backend.png';
import support from '../../apparatus/support.png';

export const Skills = () => {
  return (
    <section Id="skills">
        <span className="skillsHead">My Skills</span>
        <span className="shortDis">Here are some of the skills that I have been working on for the past 12 months</span>
            <div className="skillsIcons">
                <div className="skillsIcon">
                    <img src={frontend} alt='frontend' className='skillsIconImg'/>
                    <div className='skillsIconText'>
                    <h2>Front-End Development</h2>
                        <p>React js, Angular, CSS, HTML, Boostrap and Javascript</p>
                    </div>
                        
                </div>
            </div>
            <div className="skillsIcons">
                <div className="skillsIcon">
                    <img src={backend} alt='backend' className='skillsIconImg'/>
                    <div className='skillsIconText'>
                    <h2>Back-End Development</h2>
                        <p>Node js, MySQL, ASP.NET, Azure Portal and SQL Management Server</p>
                    </div>
                       
                </div>
            </div> 
            <div className="skillsIcons">
                <div className="skillsIcon">
                    <img src={support} alt='support' className='skillsIconImg'/>
                    <div className='skillsIconText'> <h2>IT Support</h2>
                        <p>Desktop Technician</p></div>
                       
                </div>
            </div>

    </section>

  );
}
export default Skills;