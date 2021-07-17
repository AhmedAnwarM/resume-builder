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
        return <li>
            {this.state.title} - {this.state.company}
        </li>
    }
}

export default ExperienceItem;