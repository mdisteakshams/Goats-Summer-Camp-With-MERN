import logo from "../../../../public/logo.png";
// import bg2 from "../../../assets/bg.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="lg:ms-28 lg:mt-10">
          <span className="footer-title">
            <img className="" src={logo} alt="" />
          </span>
          <p className="">
            Summer camps provide an ideal environment for children to grow{" "}
            <br /> and develop in various aspects of their lives. Whether it's
            acquiring <br /> new skills, gaining self-confidence, or fostering
            independence, the <br /> camp experience encourages personal growth.
            Through structured <br /> activities, teamwork, and guidance from
            mentors, children are <br /> motivated to explore their potential
            and discover their strengths.
            {/* Play, learn, and explore with our wide selection of toys and
            games.Spark imagination <br /> and creativity with our enchanting
            collection of toys.Discover a world of joy and <br /> wonder within
            our toy kingdom.Quality toys for every age, designed to bring <br />{" "}
            smiles and laughter.Creating memories, one toy at a time. */}
          </p>
        </div>
        {/* <div className="lg:mt-14">
          <span className="footer-title">Usefull Links</span>
          <Link className="link link-hover" to="/">
            Home
          </Link>
          <Link className="link link-hover" to="allToys">
            All Toys
          </Link>
          <a className="link link-hover">Contact Us</a>
          <Link className="link link-hover" to="blogs">
            Blogs
          </Link>
        </div> */}
        <div className="lg:mt-14">
          <span className="footer-title">Contact Now</span>
          <p className="">
            743 8th 7t SY, San Francisco <br /> DC 21478, United States
          </p>
          <p className="">+88 01450 321 117</p>
          <p className="">info12@gmail.com</p>
        </div>
        <div className="lg:mt-14">
          <span className="footer-title">Introduce Yourself</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
