import React, { useState } from 'react';
import './navbar.css';
import logo from '../../apparatus/logo.png';
import burgermenu from '../../apparatus/burgermenu.png';
import contact from '../../apparatus/contact.png';
import {Link} from 'react-scroll';


const Navbar = () => {
  const[showMenu,setShowMenu]= useState(false);
  return (
  <nav className="navbar">
    <img src={logo} alt="logo" className='logo'/>

<div className="desktopMenu">
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItems">Home</Link>
    <Link activeClass='active' to='edu' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItems">Education</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItems">Skills</Link>
    <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItems">Experience</Link>
   
    
</div>

<button className="desktopMenuBtn"onClick={()=>{
  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
}}>
    <img src={contact} alt='contact' className='desktopMenuImg'/>Contact Me</button>

    <img src={burgermenu} alt="burgermenu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className="burgerMenu" style={{display: showMenu? 'flex':'none'}}>

    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItems" onClick={()=>setShowMenu(false)}>Home</Link>
    <Link activeClass='active' to='edu' spy={true} smooth={true} offset={-50} duration={500} className="listItems">Education</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItems"onClick={()=>setShowMenu(false)}>Skills</Link>
    <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="listItems"onClick={()=>setShowMenu(false)}>Experience</Link>
    <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="listItems"onClick={()=>setShowMenu(false)}>Contact</Link>
</div>
  </nav>
  );
}

export default Navbar;