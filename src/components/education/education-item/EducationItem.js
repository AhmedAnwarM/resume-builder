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
        return <p className="educationInfoList">
            <span className="educationItemTitle">{this.state.title}</span>&nbsp;
            (<span>{this.state.startDate}</span>
            {(() => {
                if (this.state.endDate) {
                    return <span>{" - " + this.state.endDate}</span>
                }
            })()}
            )
        </p>
    }
}

export default EducationItem;
