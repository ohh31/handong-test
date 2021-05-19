import React from "react";
import { Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Desc from "./pages/Desc";
import Question from "./pages/Question";
import Result from "./pages/Result";

function App () {
   return (
     <div>
    <Route path="/" component={Intro} />
    <Route path="/desc" component={Desc} />
    <Route path="/question" component={Question} />
    <Route path="/result" component={Result} />
    </div>
  );
}


export default App;