import {Component} from "react";
import html2pdf from "html2pdf.js";
import {Button, ButtonGroup, Dropdown} from "react-bootstrap";

class DownloadPDF extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quality: 4
        }
    }

    render() {
        return (
            // TODO: Styling :(
            <Dropdown className="downloadPdf" as={ButtonGroup}>
                <Button variant="info">Download PDF</Button>
                <Dropdown.Toggle split variant="info"/>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {
                        this.downloadPdf(4)
                    }}>High Quality</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        this.downloadPdf(2)
                    }}>Medium Quality</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        this.downloadPdf(1)
                    }}>Low Quality</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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
