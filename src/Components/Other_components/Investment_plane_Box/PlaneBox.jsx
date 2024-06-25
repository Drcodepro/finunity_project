import useIntersectionObserver from "../../InterSection_observer";
import "./PlaneBox.css"

export default function PlaneBox( props){

    const ref = useIntersectionObserver({
        threshold:0
      });

    return(
    <div ref={ref} className="box_container hidden">
        <div className="imp_info_container">
            <p className="planeName">Joining Package</p>
            <h1 className="planeCost">${props.packagePrice}</h1>
            <p className="planeReward">1% Everyday Return</p>
        </div>

        <div className="other_info_container">
            <ul>
                <li>Steady and predictable income</li>
                <li>Flexible use of daily ROI</li>
                <li>Transparent and straightforward calculations.</li>
            </ul>
        </div>

        <div className="invest_button_container">
            <button>INVEST NOW</button>
        </div>
    </div>
    )
}