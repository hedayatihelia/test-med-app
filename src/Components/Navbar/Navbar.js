import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div>
         <div className="navbar"> 
            <div className="logo"> 
                 <span>StayHealthy</span> 
             </div> 
            <div className="nav-links"> 
                 <a href="#">Home</a> 
                 <a href="#">Appointments</a> 
                 <a href="#">Blog</a> 
                 <a href="#">Reviews</a> 
            </div> 
      <div className="nav-buttons"> 
      <Link to="/Login">
      <button>Login</button> 
      </Link>
        <Link to="/Sign_Up">
        <button>Sign up</button>
        </Link>
        
      </div> 
    </div>
        </div>

    );
}

export default Navbar;