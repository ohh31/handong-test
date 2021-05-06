import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Desc from "./pages/Desc";
import Question from "./pages/Question";

class App extends React.Component {
  render() {
   return (
    <HashRouter>
      <Route path="/" component={Intro} />
      <Route path="/desc" component={Desc} />
      <Route path="/question" component={Question} />
    </HashRouter>
  );
}
}

export default App;