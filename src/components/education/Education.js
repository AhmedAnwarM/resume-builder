import './Education.css';
import 'font-awesome/css/font-awesome.min.css';
import {CV_DATA} from "../../data/cv-data";

function Education() {
    return (
        <div>
            <p className="educationInfoTitle">Education</p>
            {CV_DATA.education.map((item, i) => {
                return <p key={i} className="educationInfoList">
                    <span className="educationItemTitle">{item.title}</span>&nbsp;
                    (<span>{item.startDate}</span>
                    {(() => {
                        if (item.endDate) {
                            return <span>{" - " + item.endDate}</span>
                        }
                    })()}
                    )
                </p>
            })}
        </div>
    );
}

export default Education;
