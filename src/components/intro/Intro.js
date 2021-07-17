import './Intro.css';
import 'font-awesome/css/font-awesome.min.css';
import {CV_DATA} from "../../data/cv-data";
import AboutMe from "../about-me/AboutMe";

function Intro() {
    return (
        <div className="cvIntro row">
            <span className="cvName">{CV_DATA.name}</span>&nbsp;
            <span className="cvCurrentPosition">{CV_DATA.currentPosition}</span>
            <AboutMe/>
        </div>
    );
}

export default Intro;
