import './Sign_Up.css'

function Sign_Up(){
    return (
        <div>
            <container>
  <div className="card">
    <div className="sign-up">
      <div className="sign-up-form">
        <h1>Sign Up</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              placeholder="Enter your email"
              required=""
            />
          </div>
          <div className="input-group">
            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="Enter your Phone Number"
              pattern="\d{10}"
              required=""
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required=""
            />
          </div>
          <div className="input-group">
            <label htmlFor="role">Role</label>
            <select name="role" id="role">
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <div className="input-group already-member">
            <p>
              Already a member? <a href="..\Login\Login.html">Login Here.</a>
            </p>
          </div>
          <div className="buttons">
            <button className="signup">Sign Up</button>
            <input
              type="reset"
              defaultValue="Clear Form"
              className="reset"
            />{" "}
          </div>
        </form>
      </div>
    </div>
  </div>
</container>

        </div>
    );
}


export default Sign_Up;