import React from "react";
import { useRef } from "react";
// import Req from "req.css";
const Login = () => {

    const emailRef = useRef();
    const emailLabelRef = useRef();

    const handleEmailChange = () => {
        if(emailRef.current.value != "") {
            emailLabelRef.current.classList.add('special-case');
        }
        else {
            emailLabelRef.current.classList.remove('special-case');
        }
    }
  return (
    <div className="parent-container">
      <div class="container">
        <div class="content">
          <div className="side-content">
            <h2>RK</h2>
            <div>
              <h2>Welcome!!</h2>
              <div>To my new Website</div>
            </div>
            <div>
              <p className="para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus, itaque.
              </p>
              <div class="social-icons">
                <a href="a">
                  <i class="bx bxl-linkedin"></i>
                </a>
                <a href="a">
                  <i class="bx bxl-twitter"></i>
                </a>
                <a href="a">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
                <a href="a">
                  <i class="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form-box-container">
          <div class="form-box login">
            <form action="a">
              <h2>Sign In</h2>
              <div class="input-box">
                <span class="icon">
                  <i class="bx bxs-envelope"></i>
                </span>
                <input type="email" required ref={emailRef} onChange={handleEmailChange}/>
                <label ref={emailLabelRef}>Email</label>
              </div>

              <div class="input-box">
                <span class="icon">
                  <i class="bx bxs-lock-alt"></i>
                </span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div class="remember-forget">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="a">Forget Password??</a>
              </div>
              <button type="submit" class="btn">
                Sign In
              </button>
              <div class="login-register">
                <p>
                  Don't have an account?{" "}
                  <a href="a" class="register-link">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div class="form-box register">
                <form action="a">
                    <h2>Sign Up</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bx-user'></i></span>
                        <input type="text" require/>
                        <label>Name</label>
                    </div>

                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="email" required/>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt'></i></span>
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <div class="remember-forget">
                        <label >I agree all term and Condition
                            <input type="checkbox"/>
                        </label>
                    </div>
                    <button type="submit" class="btn">Sign Up</button>
                    <div class="login-register">
                        <p>Already have an account? <a href="a" class="login-link">Sign In</a></p>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
