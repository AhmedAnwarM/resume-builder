import './ContactItem.css';
import 'font-awesome/css/font-awesome.min.css';
import {Component} from "react";

class ContactItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            link: props.link,
            icon: props.icon
        }
    }

    render() {
        return (
            <li className="cvContactInfoListItem">
                <a rel="noreferrer" target="_blank" href={this.state.link}>
                    <i className={this.state.icon}/> {this.state.title}
                </a>
            </li>
        );
    }
}

export default ContactItem;
