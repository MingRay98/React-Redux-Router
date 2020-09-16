import { Route, Switch } from "react-router-dom";
import Emotion from "./EmotionDemo";
import Showcode from "./Showcode";
import React from "react";
import Back from "../../components/Back";

const home = () => {
  return (
    <div>
      <Back />
      <Switch>
        <Route exact={true} path="/showcode" render={() => <Showcode />} />
        <Route path="/showcode/emotion" render={() => <Emotion />} />
      </Switch>
    </div>
  );
};

export default home;
