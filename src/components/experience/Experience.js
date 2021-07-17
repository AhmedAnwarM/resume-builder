import './Experience.css';
import 'font-awesome/css/font-awesome.min.css';
import {CV_DATA} from "../../data/cv-data";
import ExperienceItem from "./experience.-item/ExperienceItem";

function WorkExperience() {
    return (
        <div>
            <p className="sectionTitle">Work Experience</p>
            <ul className="sectionContent experienceInfoList">
                {CV_DATA.workExperience.map((item, i) => {
                    return <ExperienceItem key={i}
                                           title={item.title}
                                           company={item.company}
                                           location={item.location}
                                           startDate={item.startDate}
                                           endDate={item.endDate}
                                           description={item.description}
                                           responsibilities={item.responsibilities}/>
                })}
            </ul>
        </div>
    );
}

export default WorkExperience;
