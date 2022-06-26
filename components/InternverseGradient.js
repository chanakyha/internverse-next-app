import React from "react";
import Gradient from "rgt";

const InternverseGradient = ({ text }) => (
  <Gradient dir="left-to-right" from="#F9AC21" to="#6B17EC">
    {text ? text : "InternVerse"}
  </Gradient>
);

export default InternverseGradient;
