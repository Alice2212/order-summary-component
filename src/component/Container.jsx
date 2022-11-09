import React from "react";
import Hero from "./Hero";
import SummaryContainer from "./summaryContainer";

function Container() {
  return (
    <div className="container flex">
      <Hero />
      <SummaryContainer />
    </div>
  );
}

export default Container;
