import '../Education.css';
import 'font-awesome/css/font-awesome.min.css';
import {Component} from "react";

class EducationItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            startDate: props.startDate,
            endDate: props.endDate
        }
    }

    render() {
        return <li className="sectionSubtitle">
            <span>{this.state.title}</span>&nbsp;
            <span className="sectionSubtitleExtraInfo">
            (
                <span>{this.state.startDate}</span>
                {(() => {
                    if (this.state.endDate) {
                        return <span>{" - " + this.state.endDate}</span>
                    }
                })()}
                )
            </span>
        </li>
    }
}

export default EducationItem;
