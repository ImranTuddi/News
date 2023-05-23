import React from "react";
import { ReactDOM } from "react";

const Textlimit = (text, limit) => {
    if (text && text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };
  
  export default Textlimit;