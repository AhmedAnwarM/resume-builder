import './ContactInfo.css';
import 'font-awesome/css/font-awesome.min.css';
import {CV_DATA} from '../../data/cv-data'
import ContactItem from "./contact-item/ContactItem";

function ContactInfo() {

    return (
        <div className="cvContactInfo row">
            <ul className="cvContactInfoList">
                {
                    CV_DATA.contactInfo.map((item, i) => {
                        return <ContactItem key={i} title={item.title} link={item.link} icon={item.icon}/>
                    })
                }
            </ul>
        </div>
    );
}

export default ContactInfo;
