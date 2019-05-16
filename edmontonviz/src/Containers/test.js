import React from "react";
import ReactDOM from "react-dom";
import Taiwan from "@svg-maps/taiwan";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
 
class App extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return <SVGMap map={Taiwan} />;
  }
}
 
ReactDOM.render(<App />, document.getElementById("app"));