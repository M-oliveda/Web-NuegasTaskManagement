import { Clock } from "iconsax-react";
import { timeLeft } from "../utils";
import Progressbar from "./Progressbar";

export default function Task(props) {
  const percentage = (
    (props.steps.reduce((accumulator, step) => {
      if (step.isCompleted) {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0) /
      props.steps.length) *
    100
  ).toFixed(0);

  return (
    <article className="min-w-0 max-w-[328px] flex-shrink-0 flex-grow-0 basis-full rounded-[10px] bg-white p-5">
      <img
        src={props.assets}
        className="h-[110px] w-full rounded-[10px] object-cover"
      />
      <div className="my-4 flex flex-col space-y-1">
        <h3 className="font-semibold text-secondary">{props.title}</h3>
        <p className="text-xs font-medium text-secondary-400">
          {props.category}
        </p>
      </div>
      <div className="mb-5">
        <div>
          <p className="font-medium text-secondary">Progress</p>
          <p className="font-medium text-primary">{percentage}%</p>
        </div>
        <Progressbar value={percentage} />
      </div>
      <div className="flex items-center justify-between">
        <p className="flex space-x-2 font-medium text-secondary">
          <Clock color="#54577A" />
          <span>{timeLeft(props.timeLimit)} Days left</span>
        </p>
        <div className="flex -space-x-4">
          {props.peopleAssigned.map((avatarUrl) => (
            <img
              key={avatarUrl}
              src={avatarUrl}
              alt={`People assigned to ${props.title}`}
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
            />
          ))}
        </div>
      </div>
    </article>
  );
}