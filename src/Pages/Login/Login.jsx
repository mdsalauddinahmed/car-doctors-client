import React, { useContext } from "react";
import login from "../../assets/assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {signIn}=useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from=location.state?.from?.pathname || '/'
    const handleSubmit=event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        console.log( email,password)
        signIn(email,password)
        .then(result=>{
          const loggedUser=result.user;
          console.log(loggedUser)
          navigate(from,{replace:true})
        })
        .catch(error=>console.log(error))
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={login} alt="" className="w-1/2 mr-12" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-orange-600 border-0"
                  value="sign In"
                />
              </div>
            </form>
            <p>New to cars doctors <Link className="text-orange-600 text-bold" to="/signUp">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
