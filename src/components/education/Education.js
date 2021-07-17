import './Education.css';
import 'font-awesome/css/font-awesome.min.css';
import {CV_DATA} from "../../data/cv-data";
import EducationItem from "./education-item/EducationItem";

function Education() {
    return (
        <div>
            <p className="sectionTitle">Education</p>
            <ul className="educationInfoList">
                {CV_DATA.education.map((item, i) => {
                    return <EducationItem key={i} title={item.title} startDate={item.startDate}
                                          endDate={item.endDate}/>
                })}
            </ul>
        </div>
    );
}

export default Education;
