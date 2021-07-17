import './AboutMe.css';
import 'font-awesome/css/font-awesome.min.css';
import {CV_DATA} from "../../data/cv-data";

function AboutMe() {
    return (
        CV_DATA.summary.map((item, i) => {
            return <p key={i} className="cvSummary">
                <span className="summaryItemTitle">{item.title}</span>&nbsp;
                <span>{item.content}</span>
            </p>
        })
    );
}

export default AboutMe;
