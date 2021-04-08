import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import FeedbackAmager from "./pages/FeedbackAmager";
import FeedbackCityCenter from "./pages/FeedbackCityCenter";
import FeedbackKastrup from "./pages/FeedbackKastrup";
import FeedbackOsterbro from "./pages/FeedbackOsterbro";
import Goodbye from "./pages/Goodbye";
import Home from "./pages/Home";
import Map from "./pages/Map";
import MapOnNewYork from "./pages/MapOnNewYork";
import StreamAmager from "./pages/StreamAmager";
import StreamCityCenter from "./pages/StreamCityCenter";
import StreamKastrup from "./pages/StreamKastrup";
import StreamNewYork from "./pages/StreamNewYork";
import StreamOsterbro from "./pages/StreamOsterbro";
import Today from "./pages/Today";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";

function App() {
  return (
    <>
      <GlobalStyleProvider />
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/goodbye" component={Goodbye} />
          <Route path="/today" component={Today} />
          <Route path="/map" component={Map} />
          <Route
            path="/cameras/65ldui/feedback"
            component={FeedbackCityCenter}
          />
          <Route path="/cameras/65ldui" component={StreamCityCenter} />
          <Route path="/cameras/5cu15i/feedback" component={FeedbackKastrup} />
          <Route path="/cameras/5cu15i" component={StreamKastrup} />
          <Route path="/cameras/am5bg7/feedback" component={FeedbackOsterbro} />
          <Route path="/cameras/am5bg7" component={StreamOsterbro} />
          <Route path="/cameras/6c3yh4/feedback" component={FeedbackAmager} />
          <Route path="/cameras/6c3yh4" component={StreamAmager} />
          <Route path="/new-camera" component={MapOnNewYork} />
          <Route path="/cameras/pn0kfe" component={StreamNewYork} />
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
