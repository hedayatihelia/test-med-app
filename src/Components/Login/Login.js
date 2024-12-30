import './Login.css'

function Login(){

    return (
        <div>
       <container>
  <div className="card">
    <div className="sign-up">
      <div className="sign-up-form">
        <h1>Login</h1>
        <form action="">
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required=""
            />
          </div>
          <div className="input-group forgot-password">
            <p>
              Forgot Password? <a href="forgot-password.html">Click Here.</a>
            </p>
            <div className="input-group new-member">
              <p>
                Are you a new member?{" "}
                <a href="..\signup\sign_up.html">Sign Up Here.</a>
              </p>
            </div>
            <div className="buttons">
              <button className="login">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</container>

        </div>
    );
}


export default Login;