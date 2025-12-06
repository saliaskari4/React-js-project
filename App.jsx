import "./App.css";
import Herosection from "./Components/Hero";

const App = () => {
    return <div>
        <nav>
            <div className="logo">
                <img src="/Images/brand_logo.png" alt="logo" ></img>
            </div>

            <ul>
                <li href="#" >Menu</li>
                <li href="#" >Location</li>
                <li href="#" >About</li>
                <li href="#" >Contact</li>
            </ul>

            <button>Login</button>
        </nav>
        <Herosection/>
    </div>;

};

export default App;
