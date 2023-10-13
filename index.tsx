import React, { useState } from "react";
import { render } from "react-dom";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { Popover, ArrowContainer } from "react-tiny-popover";
import Gauge from "./Gauge";
import "./sandbox-styles.css";

import { jsonData, dashboardJson } from "./data";
import { getData } from "./service";

const card = dashboardJson.ordered_cards.filter((x) => {
  return x.visualization_settings["card.title"].includes("Average Come Late (%)");
})[0];
const visualizationSettings = card.visualization_settings;

const contractData = {
  title: visualizationSettings?.["card.title"],
  description: card.card.description,
  chart_properties: {
    type: "gauge",
    settings: visualizationSettings
  },
  data: jsonData
};

const ChartWrapper = () => {
  // const [contractData, setContractData] = useState({});

  // useEffect(() => {
  //   getData({
  //     host: "https://catapa.glair.ai",
  //     token:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjEyfSwicGFyYW1zIjp7fSwiZXhwIjoxNjQwMzM3MTQwLCJpYXQiOjE2Mzk3MzIzNDB9.lcAd_jl30W8YtA_G4WxYa48pdckrM0YNosl8M1RB2U8",
  //     dashCardId: 361,
  //     cardId: 117
  //   }).then((data) => {
  //     setContractData(data);
  //   });
  // }, []);

  if (!contractData) {
    return <>Loading...</>;
  }
  return (
    <div className="p-2" style={{ width: "100%", height: "100%" }}>
      <ParentSize debounceTime={0}>
        {({ width, height }) => <Gauge contractData={contractData} width={width} height={height || 500} />}
      </ParentSize>
    </div>
  );
};

render(<ChartWrapper />, document.getElementById("root"));
