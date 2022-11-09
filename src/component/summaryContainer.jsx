import React from "react";
import Summary from "./Summary";
import Plan from "./Plan";
import Payment from "./Payment";

function SummaryContainer() {
  return (
    <div className="summary-container flex">
      <Summary />
      <Plan />
      <Payment />
    </div>
  );
}

export default SummaryContainer;
