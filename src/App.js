import "assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories/:idc" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
