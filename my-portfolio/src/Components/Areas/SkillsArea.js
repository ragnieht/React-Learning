import React from "react";
import "./Area.css";
import JavaScript from "../Skills/JavaScript";
import CSS from "../Skills/CSS";
import HTML from "../Skills/HTML";
import ReactJs from "../Skills/ReactJs";
import ReduxJs from "../Skills/ReduxJs";
import MaterialUi from "../Skills/MaterialUi";

export default function SkillsArea() {
  return (
    <div className="skills container">
      <div className="row one">
        <ul>
          <JavaScript />
          <CSS />
          <HTML />
        </ul>
      </div>
      <div className="row two">
        <ul>
          <ReactJs />
          <ReduxJs />
          <MaterialUi />
        </ul>
      </div>
    </div>
  );
}
