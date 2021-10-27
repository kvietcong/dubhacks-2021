import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MatchReqPage from "./components/MatchReqPage";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import UsersPage from "./components/UsersPage";
import { ContextProvider } from "./Context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users/">
            <UsersPage />
          </Route>
          <Route exact path="/users/:id">
            <Profile />
          </Route>
          <Route exact path="/match/">
            <MatchReqPage />
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
