import PlaneBox from "./Other_components/Investment_plane_Box/PlaneBox";
import "./PlaneSection.css";
export default function PlaneSection() {
  return (
    <div className="PlaneSection_container">
      <h1 className="PlaneSection_heading">Package Options</h1>
      {/* <p>
        Help agencies to define their new business objectives and then create
        professional software.
      </p> */}

      <div className="plane_box_container">
        <PlaneBox packagePrice="50"/>
        <PlaneBox packagePrice="100"/>
        <PlaneBox packagePrice="250"/>
        <PlaneBox packagePrice="500"/>
        <PlaneBox packagePrice="1000"/>
      </div>
    </div>
  );
}
