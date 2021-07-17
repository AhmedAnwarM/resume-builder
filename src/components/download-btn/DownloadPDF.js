import {Component} from "react";
import html2pdf from "html2pdf.js";

class DownloadPDF extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<button onClick={this.downloadPdf}>Download as PDF</button>);
    }

    downloadPdf() {
        let opt = {
            filename: 'generated-resume.pdf',
            jsPDF: {format: 'A4'}
        };
        html2pdf(document.getElementById("resume"), opt);
    }
}

export default DownloadPDF;
