import mastheadImg from "../assets/masthead.jpg";
import "./Masthead.css";
export default function Masthead() {
    return (
        <div className="masthead">
            <h1>Meadow Garden </h1>
            <h2>Spring 2024 Planting Guide</h2>
            <img src={mastheadImg} alt="Spring 2024 Planting Guide" />
        </div>
    )
}