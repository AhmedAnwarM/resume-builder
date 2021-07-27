import html2pdf from "html2pdf.js";
import {Component} from "react";
import {Button} from "react-bootstrap";

class DownloadPDF extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quality: 4
        }
    }

    render() {
        // TODO: Button styling :(
        return (
            <Button variant="info" onClick={() => {
                this.downloadPdf(4)
            }}>Download PDF</Button>
        );
    }

    downloadPdf(quality) {
        let opt = {
            filename: 'generated-resume.pdf',
            jsPDF: {format: 'A4'},
            html2canvas: {scale: quality}
        };
        html2pdf(document.getElementById("resume"), opt);
    }
}

export default DownloadPDF;
