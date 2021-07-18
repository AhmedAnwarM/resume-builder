import './ExperienceItem.css'
import {Component} from "react";

class ExperienceItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            company: props.company,
            location: props.location,
            startDate: props.startDate,
            endDate: props.endDate,
            description: props.description,
            responsibilities: props.responsibilities
        }
    }

    render() {
        return <li className="sectionSubtitle">
            {this.state.title} at {this.state.company} - {this.state.location}
            &nbsp;
            <span
                className="sectionSubtitleExtraInfo">({this.state.startDate} - {this.state.endDate})</span>
            <br/>
            <span className="jobDescription">{this.state.description}</span>
            <br/>
            <ul className="jobResponsibilities">
                {this.state.responsibilities ? (
                    this.state.responsibilities.map((item, i) => {
                        return <li key={i}>{this.state.responsibilities[i]}</li>
                    })
                ) : (
                    <div/>
                )}
            </ul>
        </li>
    }
}

export default ExperienceItem;