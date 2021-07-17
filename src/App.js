import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import DownloadPDF from "./components/download-btn/DownloadPDF";
import Resume from "./components/Resume";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <DownloadPDF/>
                <Resume/>
            </header>
        </div>
    );
}

export default App;
