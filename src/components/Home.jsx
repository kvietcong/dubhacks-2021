import "../App.css";
import logo from "../logo.svg";
import { useContext } from "react";
import { Context } from "../Context";

export default function Home() {
    const { user, setUserID } = useContext(Context);

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
                <h2>
                    {user ?
                        `Hello ${user.displayName}` :
                        "No One is Logged In"
                    }
                </h2>
                <input type="text" onChange={evt =>
                    setUserID(evt.target.value)
                } />
            </header>
        </div>
    )
}