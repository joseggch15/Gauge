import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Pie from "@visx/shape/lib/shapes/Pie";
import { Group } from "@visx/group";
import CardTooltip from "./components/CardTooltip";
import { useRect } from "./hooks/useRect";

const rotate90 = Math.PI / 2; // because 0 radian starts at 90deg
export const polarToCartesian = (cx: number, cy: number, radius: number, angle: number) => {
  const coord = {
    x: cx - Math.cos(angle + rotate90) * radius,
    y: cy - Math.sin(angle + rotate90) * radius
  };
  return [coord.x, coord.y];
};

const radianToDegree = (angleRadian: number) => {
  return (angleRadian * 180) / Math.PI;
};

const defaultMargin = { top: 0, right: 0, bottom: 0, left: 0 };

export type PieProps = {
  // for simplicity
  contractData: any;
  width: number;
  height: number;
  margin?: typeof defaultMargin;
  animate?: boolean;
};

const titleRef = React.createRef<HTMLDivElement>();

export default function Gauge({ contractData, width, height, margin, animate = true }: PieProps) {
  const { height: titleHeight } = useRect(titleRef);

  if (!margin) {
    margin = {
      top: 0,
      bottom: 0,
      right: (2 * width) / 12,
      left: (2 * width) / 12
    };
  }

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;

  const gaugeSegment = contractData.chart_properties?.settings?.["gauge.segments"]?.map((x) => {
    return {
      name: x.label,
      // TODO: generalize for other than percent type of value
      value: (x.max - x.min) * 100,
      maxBorder: x.max * 100,
      fill: x.color
    };
  });

  // TODO: generalize for other than percent type of value
  const formatPercent = (x: number) => `${(x * 100).toFixed(2)}%`;
  const getDataValue = () => {
    // return 0;
    return contractData.data?.data.rows[0][0];
  };
  const dataValue = getDataValue();

  const startAngle = (-2 / 3) * Math.PI;
  const endAngle = (2 / 3) * Math.PI;

  const valAngle = dataValue * (endAngle - startAngle) + startAngle;
  const [xVal, yVal] = polarToCartesian(0, 0, 0.7 * radius, valAngle);

  return (
    <div className="rounded-sm bg-white shadow-lg shadow-cyan-400" style={{ width, height }}>
      {/* title + description */}
      <div className="flex items-center p-2" ref={titleRef}>
        <div className="text-md font-bold mr-2">{contractData.title}</div>
        <CardTooltip content={contractData.description} />
      </div>
      <svg width={width} height={height - titleHeight} viewBox={`0 0 ${width} ${height - titleHeight}`}>
        <Group top={centerY + margin.top} left={centerX + margin.left}>
          <Pie
            data={gaugeSegment}
            startAngle={startAngle}
            endAngle={endAngle}
            pieValue={(d: any) => d.value}
            pieSort={null}
            outerRadius={radius}
            innerRadius={0.7 * radius}
            cornerRadius={0}
            padAngle={0}
          >
            {(pie) => {
              // console.log(pie);
              return pie.arcs.map((arc, index) => {
                const { fill, name } = arc.data;
                const midAngle = (arc.endAngle - arc.startAngle) / 2 + arc.startAngle;
                const [xBorder, yBorder] = polarToCartesian(0, 0, radius + radius / 30, arc.endAngle);
                const [xLabel, yLabel] = polarToCartesian(0, 0, radius + radius / 30, midAngle);

                const arcPath = pie.path(arc);
                const arcFill = fill;
                return (
                  <g key={`arc-${name}-${index}`}>
                    <path d={arcPath} fill={arcFill} />
                    <text
                      x={xBorder}
                      y={yBorder}
                      fill="#aaaaaa"
                      dy={radius / 30}
                      fontSize={radius / 10}
                      textAnchor={xBorder > 0 ? "start" : "end"}
                    >
                      {arc.data.maxBorder}%
                    </text>
                    <text
                      x={xLabel}
                      y={yLabel}
                      dy={radius / 30}
                      fontSize={radius / 10}
                      fill="#111"
                      textAnchor={xBorder > 0 ? "start" : "end"}
                    >
                      {arc.data.name}
                    </text>
                  </g>
                );
              });
            }}
          </Pie>
          <text x={0} y={0} textAnchor="middle" fontSize={radius / 4}>
            {formatPercent(dataValue)}
          </text>
          <polygon
            id="triangle"
            stroke="white"
            strokeWidth={radius / 30}
            fill="#aaa"
            points={`0,-${radius / 6} -${radius / 6 / 2},0 ${radius / 6 / 2},0`}
            transform={`translate(${xVal}, ${yVal}) rotate(${radianToDegree(valAngle)})`}
          />
        </Group>
      </svg>
    </div>
  );
}
