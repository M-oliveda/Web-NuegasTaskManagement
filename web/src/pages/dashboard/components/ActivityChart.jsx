import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getTasksWithFilters } from "../../../services/tasks";

export default function ActivityChart() {
  const [tasksByDate, setTasksByDate] = useState(null);

  useEffect(() => {
    getTasksWithFilters(new Date().getFullYear(), "September").then((result) =>
      setTasksByDate(() =>
        Object.keys(result.months[0].tasksByWeek).map((week) => ({
          x: week,
          y: result.months[0].tasksByWeek[week].length,
        })),
      ),
    );
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
            yaxis: {
              stepSize: 1,
              max: tasksByDate.reduce((maxNumber, item) => {
                if (item.y > maxNumber) {
                  return item.y;
                } else {
                  return maxNumber;
                }
              }, 0),
            },
          }}
          series={[
            {
              name: "Tasks",
              data: tasksByDate,
            },
          ]}
          height={130}
        />
      )}
    </>
  );
}
