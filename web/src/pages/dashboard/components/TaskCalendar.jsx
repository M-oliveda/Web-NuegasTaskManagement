import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useCallback, useContext, useEffect, useState } from "react";
import { TasksByDateContext } from "../layouts/TasksByDate";
import { getTasks, getTasksWithFilters } from "../../../services/tasks";
import { weekdays } from "../../../utils";

export default function TaskCalendar() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [calendarDate, setCalendarDate] = useState(null);
  const [selectedYearMonth, setSelectedYearMonth] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const [selectedMonth, setSelectedMonth] = useState(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const updateScrollState = () => {
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
        setSelectedYearMonth(calendarDate[emblaApi.selectedScrollSnap()]);
      };

      updateScrollState(); // Update state initially
      emblaApi.on("select", updateScrollState); // Update state on slide change

      return () => emblaApi.off("select", updateScrollState); // Cleanup listener
    }
  }, [emblaApi]);

  useEffect(() => {
    getTasks().then((apiResult) => {
      setCalendarDate(
        apiResult.reduce((accumulator, tasksByYear) => {
          return accumulator.concat(
            tasksByYear.months.map((tasksByMonth) => ({
              month: tasksByMonth.name,
              year: tasksByYear.year,
            })),
          );
        }, []),
      );
    });
  }, []);

  useEffect(() => {
    if (selectedYearMonth) {
      getTasksWithFilters(selectedYearMonth.year, selectedYearMonth.month).then(
        (result) => setSelectedWeek(result),
      );
    }
  }, [selectedYearMonth]);

  return (
    <article className="max-w-[372px] rounded-[10px] bg-white p-5">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={scrollPrev}
          className="text-secondary disabled:text-secondary-400"
          disabled={!canScrollPrev}
        >
          <ArrowLeft2 />
        </button>
        {calendarDate && (
          <div className="flex-grow overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {calendarDate.map((date) => (
                <h3
                  key={`${date.month}_${date.year}`}
                  className="min-w-0 flex-shrink-0 flex-grow-0 basis-full text-center text-sm font-semibold text-secondary"
                >
                  {date.month} {date.year}
                </h3>
              ))}
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={scrollNext}
          className="text-secondary disabled:text-secondary-400"
          disabled={!canScrollNext}
        >
          <ArrowRight2 />
        </button>
      </div>
      <div className="mt-10 flex items-center justify-center space-x-8">
        {selectedWeek &&
          Object.keys(selectedWeek.months[0].tasksByWeek).map((key) => (
            <TaskItem
              key={selectedWeek.months[0].tasksByWeek[key]}
              date={selectedWeek.months[0].tasksByWeek[key][0].createdAt}
              tasksNumber={
                Object.keys(selectedWeek.months[0].tasksByWeek).length
              }
            />
          ))}
      </div>
    </article>
  );
}

function TaskItem(props) {
  const { setSelectedTask, selectedTask } = useContext(TasksByDateContext);
  return (
    <button
      type="button"
      className={`flex flex-col items-center gap-3 px-[4px] py-[6px] ${props.date == selectedTask && "rounded-3xl bg-secondary"} transition-colors duration-500`}
      onClick={() => setSelectedTask(props.date)}
    >
      <span
        className={`text-xs font-medium ${props.date == selectedTask ? "text-white" : "text-secondary"}`}
      >
        {weekdays[new Date(props.date).getDay()]}
      </span>
      <span
        className={`h-8 w-8 rounded-full p-2 text-center text-xs font-medium ${props.date == selectedTask ? "bg-primary text-white" : "bg-[#F5F5F7] text-secondary"}`}
      >
        {new Date(props.date).toLocaleDateString("en", { day: "numeric" })}
      </span>
    </button>
  );
}
