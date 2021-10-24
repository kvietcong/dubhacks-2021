import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import MatchReqPage from "./components/MatchReqPage";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import SideMenu from "./components/SideMenu";
import UserPage from "./components/UserPage";
import UsersPage from "./components/UsersPage";
import { ContextProvider } from "./Context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navigation/>
        <SideMenu/>
        <Switch>
          <Route exact path="/users/">
            <UsersPage />
          </Route>
          <Route exact path="/users/:id">
            <UserPage />
          </Route>
          <Route exact path="/match">
            <MatchReqPage />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
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
