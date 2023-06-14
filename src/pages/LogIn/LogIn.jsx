import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Pic from "../../assets/3094352.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialSignIn from "../Shared/SocialSignIn/SocialSignIn";

const LogIn = () => {
  const [loginDisabled, setLoginDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    

    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Logged in successfully'
      });
      navigate(from, {replace: true});
    //   Swal.fire({
    //     title: "User Logged In Successfully",
    //     showClass: {
    //       popup: "animate__animated animate__fadeInDown",
    //     },
    //     hideClass: {
    //       popup: "animate__animated animate__fadeOutUp",
    //     },
    //   });
    //   navigate(from, {replace: true});
    });
  };

  const handleValidationCaptcha = (e) => {
    const captcha_value = e.target.value;
    console.log(captcha_value);
    if (validateCaptcha(captcha_value)) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Goat's Summer Camp | Log In</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img src={Pic} alt="" />
          </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleSignIn} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  type="password"
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
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidationCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type The Text Above"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={loginDisabled}
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              <small>
                New Here? <Link className="text-blue-700 font-bold" to="/signup">Create An Account</Link>
              </small>
            </p>
            <div className="divider">Or Sign in with</div>
            <SocialSignIn></SocialSignIn>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
