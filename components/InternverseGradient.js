import React from "react";
import Gradient from "rgt";

const InternverseGradient = ({ text }) => (
  <span style={{ fontFamily: "PilatExtended" }}>
    <Gradient dir="left-to-right" from="#F9AC21" to="#6B17EC">
      {text ? text : "InternVERSE"}
    </Gradient>
  </span>
);

export default InternverseGradient;
