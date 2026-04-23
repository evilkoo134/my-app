import "./FooterStyles.css";
import React from "react";
import { FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color: 'white', marginRight: '2rem'}}></FaPhone>
                123-456-7890</h4>
                
            </div>
            <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color: 'white', marginRight: '2rem'}}></FaMailBulk>
                youremail@example.com</h4>
            </div> 
        </div>
            <div className="right">
            <p>About Me</p>
                <div className="linkedin">
                    <FaLinkedin size={30} style={{color: 'white', marginRight: '1rem'}}></FaLinkedin>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
