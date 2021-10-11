import GlobalStyles from "./styles/GlobalStyles";

import ImageBoxUploader from "./components/ImageBoxUploader";
import ImageVisualizer from "./components/ImageVisualizer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route exact path="/">
          <ImageBoxUploader />
        </Route>

        <Route exact path="/:id">
          <ImageVisualizer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
