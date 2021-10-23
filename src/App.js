import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UserPage from "./components/UserPage";
import UsersPage from "./components/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users/">
            <UsersPage />
          </Route>
          <Route exact path="/users/:id">
            <UserPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
