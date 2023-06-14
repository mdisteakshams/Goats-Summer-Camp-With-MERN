import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

const SocialSignIn = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

    const handleGoogleSignInUser = () => {
        googleSignIn().then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const savedUserData = {
              name: loggedInUser.displayName,
              email: loggedInUser.email,
              photo: loggedInUser.photoURL
            };
            fetch("https://summer-camp-server-psi-nine.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUserData),
            })
              .then((res) => res.json())
              .then(() => {
                navigate(from, { replace: true });
              });
          });
    };

    // Swal.fire({
    //     title: "Success!",
    //     text: "The User Has Been Successfully LoggedIn To The Account",
    //     icon: "success",
    //     confirmButtonText: "ok",
    //   });
  return (
    <div>
      <div className="text-center my-4">
        <button
            onClick={handleGoogleSignInUser}
          className="btn btn-outline btn-success"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
