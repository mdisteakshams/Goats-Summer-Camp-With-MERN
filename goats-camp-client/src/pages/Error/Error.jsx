import { Link } from "react-router-dom";
import error from "../../assets/404.jpg";

const Error = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="lg:ps-48">
        <img className="h-[900px]" src={error} alt="" />
        <Link to="/">
          <button className="btn btn-primary mt-10 ms-5">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
