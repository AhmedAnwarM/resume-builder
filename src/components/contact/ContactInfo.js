import './ContactInfo.css';
import 'font-awesome/css/font-awesome.min.css';

function ContactInfo() {
    let website = "https://www.aanwar.cyou";

    return (
        <div className="cvContactInfo row">
            <ul className="cvContactInfoList">
                <li className="cvContactInfoListItem">
                    <a target="_blank" href={website}>
                        <i className="fa fa-globe"/> Website
                    </a>
                </li>
                <li className="cvContactInfoListItem">
                    <a target="_blank" href="https://www.linkedin.com/in/ahmedanwarm">
                        <i className="fa fa-linkedin-square"/> LinkedIn
                    </a>
                </li>
                <li className="cvContactInfoListItem">
                    <a target="_blank" href="https://www.github.com/ahmedanwarm">
                        <i className="fa fa-github"/> GitHub
                    </a>
                </li>
                <li className="cvContactInfoListItem">
                    <a target="_blank" href="https://stackoverflow.com/users/4671894/ahmed-anwar">
                        <i className="fa fa-stack-overflow"/> StackOverflow
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ContactInfo;
