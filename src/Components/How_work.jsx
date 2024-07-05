import dot_img from "../assets/Icons/Progrss_dots.png";
import poster_img from "../assets/Image/Howwork_img_new.png";
import useIntersectionObserver from "./InterSection_observer";
import "./How_work.css";

export default function HowWork() {

  const ref = useIntersectionObserver({
    threshold: 0.1
  });
  const ref1 = useIntersectionObserver({
    threshold: 0.1
  });

  return (
    <div className="howwork_section_container" id="howWorkSection">
        <h1 className="section_heading">How It Works?</h1>
      <div className=" main_progress_container">
        <img loading="lazy" src={poster_img} alt="" ref={ref1} className="howwork_poster_img hidden" />

        <div ref={ref} className="progress_outer_container hidden">
          <div className="progress_container">
            <div className="progress_info">
              <h1>Register & Log in</h1>
              <p>
              Visit our website and sign up for an account.Provide basic information to create your profile.              </p>
            </div>
            <img loading="lazy" src={dot_img} alt="" className="progress_dot" />
          </div>

          <div className="progress_container">
            <div className="progress_info">
              <h1>Choose a Package</h1>
              <p>Select from our range of packages: $50, $100, $250, $500, $1000 </p>
            </div>
            <img loading="lazy" src={dot_img} alt="" className="progress_dot" />
          </div>

          <div className="progress_container">
            <div className="progress_info">
              <h1>Deposit Funds</h1>
              <p>
              Make your initial investment using USDT BEP20.
              </p>
            </div>
            <img loading="lazy" src={dot_img} alt="" className="progress_dot" />
          </div>

          <div className="progress_container last_progress_container">
            <div className="progress_info">
              <h1>Start Earning</h1>
              <p>
              Begin earning daily ROI of 1%.
              </p>
            </div>
            <img loading="lazy" src={dot_img} alt="" className="progress_dot" />
          </div>
        </div>
      </div>
    </div>
  );
}
