import './Education.css';
import 'font-awesome/css/font-awesome.min.css';
import {CV_DATA} from "../../data/cv-data";
import EducationItem from "./education-item/EducationItem";

function Education() {
    return (
        <div>
            <p className="educationInfoTitle">Education</p>
            {CV_DATA.education.map((item, i) => {
                return <EducationItem key={i} title={item.title} startDate={item.startDate}
                                      endDate={item.endDate}/>
            })}
        </div>
    );
}

export default Education;
