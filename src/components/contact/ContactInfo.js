import './ContactInfo.css';
import 'font-awesome/css/font-awesome.min.css';
import {CV_DATA} from '../../data/cv-data'

function ContactInfo() {

    return (
        <div className="cvContactInfo row">
            <ul className="cvContactInfoList">
                <li className="cvContactInfoListItem">
                    <a target="_blank" href={CV_DATA.website}>
                        <i className="fa fa-globe"/> Website
                    </a>
                </li>
                <li className="cvContactInfoListItem">
                    <a target="_blank" href={CV_DATA.linkedinUrl}>
                        <i className="fa fa-linkedin-square"/> LinkedIn
                    </a>
                </li>
                <li className="cvContactInfoListItem">
                    <a target="_blank" href={CV_DATA.githubUrl}>
                        <i className="fa fa-github"/> GitHub
                    </a>
                </li>
                <li className="cvContactInfoListItem">
                    <a target="_blank" href={CV_DATA.stackoverflowUrl}>
                        <i className="fa fa-stack-overflow"/> StackOverflow
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ContactInfo;
