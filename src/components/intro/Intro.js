import './Intro.css';
import 'font-awesome/css/font-awesome.min.css';
import {CV_DATA} from "../../data/cv-data";

function Intro() {
    return (
        <div className="cvIntro row">
            <span className="cvName">{CV_DATA.name}</span>&nbsp;
            <span className="cvCurrentPosition">{CV_DATA.position}</span>
            <br/>
            <p className="cvSummary">
                <span>{CV_DATA.summary[0].title}</span>&nbsp;
                <span>{CV_DATA.summary[0].content}</span>
            </p>
        </div>
    );
}

export default Intro;
