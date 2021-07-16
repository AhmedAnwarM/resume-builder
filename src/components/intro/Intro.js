import './Intro.css';
import 'font-awesome/css/font-awesome.min.css';

function Intro() {
    let name = "Ahmed Anwar";
    let position = "Software Engineer";
    let summary = "Software Engineer with experience developing large scale enterprise applications including designing, developing, implementing and maintaining software and taking projects from development phase to go-live phase";

    return (
        <div className="cvIntro row">
            <span className="cvName">{name}</span>&nbsp;
            <span className="cvCurrentPosition">({position})</span>
            <br/>
            <p className="cvSummary">{summary}</p>
        </div>
    );
}

export default Intro;
