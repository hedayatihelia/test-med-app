import './Navbar.css'

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
        <button>Login</button> 
        <button>Sign up</button>
      </div> 
    </div>
        </div>

    );
}

export default Navbar;