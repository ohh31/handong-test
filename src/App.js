import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Desc from "./pages/Desc";
import Question from "./pages/Question";

function App () {
   return (
     <>
    <HashRouter>
      <Route path="/" component={Intro} />
      <Route path="/desc" component={Desc} />
      <Route path="/question" component={Question} />
    </HashRouter>
    </>
  );
}

export default App;