import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import MatchReqPage from "./components/MatchReqPage";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UsersPage from "./components/UsersPage";
import { ContextProvider } from "./Context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path="/users/">
            <UsersPage />
          </Route>
          <Route exact path="/users/:id">
            <Profile />
          </Route>
          <Route exact path="/match">
            <MatchReqPage />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
