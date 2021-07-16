import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import ContactInfo from "./components/contact/ContactInfo";
import Intro from "./components/intro/Intro";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Intro/>
                <ContactInfo/>
            </header>
        </div>
    );
}

export default App;
