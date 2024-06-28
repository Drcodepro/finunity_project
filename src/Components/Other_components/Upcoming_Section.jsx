import useIntersectionObserver from "../InterSection_observer";
import "./Upcoming_Section.css";

const UpcomingBox = (props) => {
  const ref = useIntersectionObserver({
    threshold: 0.1,
  });


  return (
    <>
      <div ref={ref} className={`aboutsection_container hidden ${props.style}`}>
        <img
          src={props.poster}
          alt="about-img"
          className="TokenLaunch_img"
        />

        <div className="aboutsection_info_container">
          <h1>{props.heading}</h1>
          <p>
            {props.content}
          </p>
        </div>
      </div>

    </>
  );
};

export default UpcomingBox;
