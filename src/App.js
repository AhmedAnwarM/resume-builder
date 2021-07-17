import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import ContactInfo from "./components/contact/ContactInfo";
import Intro from "./components/intro/Intro";
import AboutMe from "./components/about-me/AboutMe";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Intro/>
                <ContactInfo/>
                <AboutMe/>
            </header>
        </div>
    );
}

export default App;
