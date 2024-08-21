import { Notepad2, Profile } from "iconsax-react";
import { useEffect, useState } from "react";
import { getMentorById } from "../services/mentors";
import LoaderElement from "./LoaderElement";

export default function Mentor(props) {
  const [mentor, setMentor] = useState(null);
  const [isMentorLoading, setIsMentorLoading] = useState(true);

  useEffect(() => {
    getMentorById(props.id).then((result) => setMentor(result));
  }, []);

  useEffect(() => {
    if (mentor) {
      setIsMentorLoading(false);
    }
  }, [mentor]);

  return (
    <article className="min-w-0 max-w-[328px] flex-shrink-0 flex-grow-0 basis-full justify-center rounded-[10px] bg-white p-5">
      <div className="flex items-center">
        <span
          className={`block h-11 w-11 rounded-full border xl:h-[48px] xl:w-[48px] ${isMentorLoading ? "flex animate-pulse items-center justify-center border-primary-300 p-[10px] text-primary-300 xl:p-[16px]" : "border-[#F5F5F7] text-secondary-300"}`}
        >
          {isMentorLoading ? (
            <Profile size={24} className="shrink-0" />
          ) : (
            <span className="overflow-hidden">
              <img
                src={mentor.urlImage}
                alt={`${mentor.name} picture mentor.`}
                className="rounded-full"
              />
            </span>
          )}
        </span>
        <div className="ml-2">
          {
            <>
              <h3 className="text-seconday font-semibold">
                {isMentorLoading ? (
                  <LoaderElement
                    type={"rectangule"}
                    width={96}
                    backgroundColor="#546FFF"
                  />
                ) : (
                  mentor.name
                )}
              </h3>
              <p className="text-xs text-secondary-400">
                {isMentorLoading ? (
                  <LoaderElement
                    type="rectangule"
                    width={96}
                    backgroundColor="#546FFF"
                  />
                ) : (
                  mentor.experience
                )}
              </p>
            </>
          }
        </div>
        <button
          type="button"
          className="ml-auto cursor-pointer text-sm font-semibold text-primary hover:opacity-70"
        >
          +Follow
        </button>
      </div>
      {props.enableDescription && (
        <p className="my-7 text-sm font-medium text-secondary-300">
          {mentor.description}
        </p>
      )}
      <div className="mt-6 flex items-center">
        <p className="flex items-center space-x-2 text-sm font-medium text-secondary">
          {isMentorLoading ? (
            <LoaderElement type="circle" backgroundColor="#546FFF" />
          ) : (
            <Notepad2 color="#54577A" />
          )}
          {isMentorLoading ? (
            <LoaderElement type="circle" backgroundColor="#546FFF" />
          ) : (
            <span>{mentor.tasksAssigned} Task</span>
          )}
        </p>
        <p className="ml-auto space-x-2 text-sm font-medium text-secondary">
          <>
            {isMentorLoading ? (
              <LoaderElement type="circle" backgroundColor="#546FFF" />
            ) : (
              <span className="text-[#FFB054]">★</span>
            )}
            {isMentorLoading ? (
              <LoaderElement type="rectangule" backgroundColor="#546FFF" />
            ) : (
              <span>
                {mentor.reviewsPercentage} ({mentor.reviews} Reviews)
              </span>
            )}
          </>
        </p>
      </div>
    </article>
  );
}
