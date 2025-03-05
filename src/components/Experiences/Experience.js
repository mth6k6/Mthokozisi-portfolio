import React from 'react';
import './Experience.css';

export const Experience = () => {
  return (
    <div id="edu">
        <span className='educationHead'>Education & Experience</span>
    <div className="container">
        <main className="row"> 
        <section className="column">
            <header className="tittle">
                <h2>Education</h2>
            </header>
            <div className="contents">
                <div className="box">
                    <h4>2010-2014</h4>
                    <h3>Matric Certificate</h3>
                    <p>Major subject: Mathematics, Physical Sciences & Accounting</p>
                </div>
                <div className="box">
                    <h4>2015-2016</h4>
                    <h3>Higher Certificate</h3>
                    <p>ABET Modules</p>
                </div>

                <div className="box">
                    <h4>2017-2020</h4>
                    <h3>National Diploma in ICT</h3>
                    <p>Modules: Applications Development, Information System and Information Management..etc</p>
                </div>
            </div>
        </section>



        <section class="column">
            <header class="tittle">
                <h2>Experience</h2>
            </header>
            <div className="contents">
                <div className="box">
                    <h4>01/2022-12/2022</h4>
                    <h3>Engineering Assistant</h3>
                    <p>Administrative duties</p>
                </div>
                <div className="box">
                    <h4>09/2023-02/2024</h4>
                    <h3>IT Support</h3>
                    <p>Provide technical support to employees</p>
                </div>

                <div className="box">
                    <h4>03/2024-08/2024</h4>
                    <h3>Software Developer</h3>
                    <p>Software Development & Assisting End-users with technical support</p>
                </div>
            </div>
        </section>
    </main>
    </div>
  
        
    </div>
  );
}
export default Experience;