import "../App.css";
import logo from "../logo.svg";
import useMatch from '../hooks/useMatch';

export default function Home() {
    const match = useMatch("AYZz5OYC8wkM272brV3c");

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button onClick={() => console.log(match)}>Hi</button>
            </header>
        </div>
    )
}