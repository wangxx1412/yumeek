import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import axios from "axios";

import Calendar from "./Calendar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Stats from "./Stats";
import Detail from "./Detail";

export default function Application() {
  // const [message, setMessage] = useState("");

  // const fetchData = () => {
  //   axios.get("/api/data").then((response) => {
  //     setMessage(response.data.message);
  //   });
  // };

  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>{message}</h1>
        <div>Click to fetch data</div>
        <button onClick={fetchData}>Fetch Data</button> */}
        <Sidebar />

        <Switch>
          <Route exact path="/user/:userid/calendar" component={Calendar} />
          <Route exact path="/user/:userid/stats" component={Stats} />
          <Route exact path="/recipe/:recipeid" component={Detail} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
