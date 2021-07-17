import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import ContactInfo from "./components/contact/ContactInfo";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import {CV_DATA} from "./data/cv-data";
import Education from "./components/education/Education";
import WorkExperience from "./components/experience/Experience";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Intro/>
                <ContactInfo/>
                <div className="splitScreen">
                    <div className="column">
                        <WorkExperience/>
                    </div>
                    <div className="column">
                        <Skills title="Personal Skills" skills={CV_DATA.personalSkills}/>
                        <Skills title="Technical Skills" skills={CV_DATA.technicalSkills}/>
                        <Education/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
