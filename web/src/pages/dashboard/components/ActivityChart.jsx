import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getTasksByDate } from "../../../services/tasks";

export default function ActivityChart() {
  const [tasksByDate, setTasksByDate] = useState(null);

  useEffect(() => {
    getTasksByDate().then((result) => {
      setTasksByDate(
        result.map((task) => ({ x: task.day, y: task.completedTasks })),
      );
    });
  }, []);

  return (
    <>
      {tasksByDate && (
        <ReactApexChart
          options={{
            chart: {
              height: "100%",
              maxWidth: "100%",
              type: "line",
              dropShadow: {
                enabled: true,
                top: 20,
              },
              toolbar: {
                show: false,
              },
            },
            tooltip: {
              custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                return `<div class="bg-secondary py-2 px-[18px] text-white font-sans"><span>Task ${series[seriesIndex][dataPointIndex]}</span></div>`;
              },
            },
            dataLabels: {
              enabled: false,
            },
            grid: {
              strokeDashArray: 0,
              padding: {
                left: 10,
                right: 10,
                top: -26,
              },
              xaxis: {
                lines: {
                  show: true,
                },
              },
              yaxis: {
                lines: {
                  show: false,
                },
              },
            },
            legend: {
              show: true,
            },
            stroke: {
              curve: "smooth",
              colors: ["#141522"],
              width: 3,
              lineCap: "round",
            },
            xaxis: {
              type: "numeric",
              axisBorder: {
                show: false, // Hides the border
              },
              axisTicks: {
                show: false, // Hides the ticks on the axis
              },
              tooltip: {
                enabled: false,
              },
            },
          }}
          series={[
            {
              name: "Tasks",
              data: [
                { x: "W", y: 8 },
                { x: "T", y: 12 },
                { x: "F", y: 7 },
                { x: "S", y: 10 },
                { x: "U", y: 6 },
                { x: "M", y: 9 },
              ],
            },
          ]}
          height={200}
        />
      )}
    </>
  );
}
