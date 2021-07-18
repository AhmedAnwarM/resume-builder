import './Resume.css';
import Intro from "./intro/Intro";
import ContactInfo from "./contact/ContactInfo";
import WorkExperience from "./experience/Experience";
import Skills from "./skills/Skills";
import {CV_DATA} from "../data/cv-data";
import Education from "./education/Education";

function Resume() {
    return (
        <div id="resume" className="resume">
            <Intro/>
            <ContactInfo/>
            <div className="splitScreen">
                <div className="column">
                    <WorkExperience/>
                </div>
                <div className="column">
                    <Skills title="Technical Skills" skills={CV_DATA.technicalSkills}/>
                    <Skills title="Personal Skills" skills={CV_DATA.personalSkills}/>
                    <Education/>
                </div>
            </div>
        </div>
    );
}

export default Resume;