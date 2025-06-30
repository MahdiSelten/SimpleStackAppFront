import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from '../images/Titanicsurvival.png';







const Home = () => {


    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();



    const buttonStyle = {
        backgroundColor: isHovered ? 'linear-gradient(90deg, black, white)' : 'white',
        color: isHovered ? 'black' : 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
        background: isHovered ? 'linear-gradient(90deg, black, white)' : 'white'
    }



  return (
    <div style={styles.wholepage}>
        <h1 style={styles.title}>Will you survive the titanic?</h1>
        
        <button type="Submit" style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => navigate("/main")}>Next</button>
    </div>
  );
};



const styles = {

    title: {
        fontSize: '3rem',             
        fontWeight: '1200',            
        color: '#ffffff',             
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',  
        marginBottom: '20px',         
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",  
        textAlign: 'center',          
        letterSpacing: '1.5px'  
    },

    wholepage: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

    
  },


   

  
};






export default Home;