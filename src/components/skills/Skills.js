import './Skills.css';
import 'font-awesome/css/font-awesome.min.css';
import {Component} from "react";

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            skills: props.skills
        }
    }

    render() {
        return (
            <div>
                <p className="skillsTitle">{this.state.title}</p>
                <ul className="skillsList">
                    {
                        this.state.skills.map((item, i) => {
                            if (item.level !== undefined)
                                var skillClassName = item.level === 1 ? "skillBeginner" : item.level === 2 ? "skillIntermediate" : "skillAdvanced";
                            return <li className={"skillItem " + skillClassName}
                                       key={i}>{item.skill}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Skills;
