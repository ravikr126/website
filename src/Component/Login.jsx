import React from "react";
// import Req from "req.css";
const Login = () => {
    return (
      <>
    <div class="background"></div>
    <div class="container">
        <div class="content">
            <h2>
                <i class='bx bx-code-alt'>RK</i>
                
                <div class="text-sci">
                    <h2>Welcome!! <br/><span>To my new Website</span></h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, itaque.
                    </p>
                    <div class="social-icons">
                        <a href="a"><i class='bx bxl-linkedin' ></i></a>
                        <a href="a"><i class='bx bxl-twitter' ></i></a>
                        <a href="a"><i class='bx bxl-facebook-circle' ></i></a>
                        <a href="a"><i class='bx bxl-instagram' ></i></a>
                    </div>
                </div>
            </h2>
        </div>
        <div class="logreg-box">
            <div class="form-box login">
                <form action="a">
                    <h2>Sign In</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="email" required/>
                        <label>Email</label>
                    </div>

                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <div class="remember-forget">
                        <label >
                            <input type="checkbox"/>Remember me
                        </label>
                        <a href="a">Forget Password??</a>
                    </div>
                    <button type="submit" class="btn">Sign In</button>
                    <div class="login-register">
                        <p>Don't have an account? <a href="a" class="register-link">Sign Up</a></p>
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


      </>
    );
  };
  
  export default Login;