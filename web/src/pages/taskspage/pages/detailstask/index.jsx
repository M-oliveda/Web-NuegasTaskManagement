import { Clock, FolderOpen, Profile2User, TickCircle } from "iconsax-react";
import Video from "../../../../components/Video";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getTasksByName } from "../../../../services/tasks";
import { UserContext } from "../../../../context/UserContext";
import LoaderElement from "../../../../components/LoaderElement";
import ConfirmationModal from "../../../../components/ConfirmationModal";
import { useClickAway } from "@uidotdev/usehooks";

export default function DetailTaskPage() {
  const { title } = useParams();
  const { user } = useContext(UserContext);
  const [task, setTask] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const refModal = useClickAway(() => setIsOpenModal(false));

  useEffect(() => {
    if (title) {
      getTasksByName(decodeURIComponent(title)).then((result) =>
        setTask(result[0]),
      );
    }
  }, [title]);

  function handleOpenModal() {
    if (!isOpenModal) {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }

  return (
    <article className="xl:flex xl:items-start xl:gap-8">
      <section className="space-y-4 overflow-hidden rounded-[10px] bg-white xl:grow-[.4]">
        {!task ? (
          <div className="flex h-[208px] items-center justify-between rounded-[10px]">
            <LoaderElement type="circle" backgoundColor="hsla(231,100,66,32)" />
            <LoaderElement
              type="rectamgule"
              backgoundColor="hsla(231,100,66,32)"
            />
            <LoaderElement type="circle" backgoundColor="hsla(231,100,66,32)" />
            <LoaderElement type="circle" backgoundColor="hsla(231,100,66,32)" />
            <LoaderElement type="circle" backgoundColor="hsla(231,100,66,32)" />
          </div>
        ) : (
          <Video src={task.video} />
        )}
        <div className="space-y-8 p-4">
          <section className="space-y-4">
            {!task ? (
              <LoaderElement
                type="rectangule"
                width={220}
                backgoundColor="hsla(231,100,66,32)"
              />
            ) : (
              <h3 className="text-2xl font-semibold text-secondary">
                {task.title}
              </h3>
            )}
            <div className="flex items-center gap-2">
              {!task ? (
                <LoaderElement
                  type="rectangule"
                  width={208}
                  backgoundColor="hsla(231,100,66,12)"
                />
              ) : (
                <p className="text-xs font-medium text-secondary-300">
                  {task.category}
                </p>
              )}
              <p className="text-gray-300">|</p>
              <button
                type="button"
                className="text-xs font-medium text-primary-300 hover:opacity-70"
              >
                + Get Mentors
              </button>
            </div>
            <div className="flex gap-5">
              {!task ? (
                <LoaderElement
                  width={148}
                  backgoundColor="hsla(231,100,66,32)"
                />
              ) : (
                <>
                  <p className="flex items-center gap-[5px]">
                    <Profile2User color="#54577A" />
                    <span className="text-xs font-medium text-secondary">
                      {task.studentsInvolved} Students Involved
                    </span>
                  </p>
                  <p className="flex items-center gap-[5px]">
                    <Clock color="#54577A" />
                    <span className="ml-[5px] text-xs font-medium text-secondary">
                      {`${(task.duration / 60).toFixed(2)} ${task.duration <= 60 ? "Hour" : "Hours"}`}
                    </span>
                  </p>
                </>
              )}
            </div>
          </section>
          <section>
            <h4 className="mb-2 text-2xl font-semibold text-secondary">
              Description
            </h4>
            <p className="text-xs text-secondary">{task && task.description}</p>
          </section>
          <section>
            <h4 className="mb-4 text-2xl font-semibold text-secondary">
              Essence of Assessment
            </h4>
            <ol className="space-y-5">
              {task &&
                task.steps.map((step) => (
                  <li key={step.name} className="space-x-3 *:inline-block">
                    <TickCircle variant="Bold" color="#546FFF" />
                    <span>{step.name}</span>
                  </li>
                ))}
            </ol>
          </section>
        </div>
      </section>
      <section className="mt-6 space-y-4 rounded-[10px] bg-white p-6 xl:mt-0">
        <p className="text-sm font-semibold text-secondary">
          Assigned Assignments
        </p>
        <h4 className="max-w-[18ch] text-xl font-semibold text-secondary">
          {!task ? (
            <LoaderElement width={148} backgoundColor="hsla(231,100,66,32)" />
          ) : (
            task.title
          )}
        </h4>
        <p className="text-xs font-medium text-secondary-300">
          {!task ? (
            <LoaderElement width={148} backgoundColor="hsla(231,100,66,32)" />
          ) : (
            task.category
          )}
        </p>
        <section className="w-[279px]">
          <h5 className="mb-4 text-lg font-semibold text-secondary">
            Detail Student
          </h5>
          <div className="space-y-3">
            <p className="flex items-center justify-between">
              {!user ? (
                <LoaderElement
                  width={148}
                  backgoundColor="hsla(231,100,66,32)"
                />
              ) : (
                <>
                  <span className="text-sm font-medium text-secondary-300">
                    Student's name
                  </span>
                  <span className="text-secondary">{`${user.firstname} ${user.lastname}`}</span>
                </>
              )}
            </p>
            <p className="flex items-center justify-between">
              {!user ? (
                <LoaderElement
                  width={148}
                  backgoundColor="hsla(231,100,66,32)"
                />
              ) : (
                <>
                  <span className="text-sm font-medium text-secondary-300">
                    Student Class
                  </span>
                  <span className="text-secondary">{user.class}</span>
                </>
              )}
            </p>
            <p className="flex items-center justify-between">
              {!user ? (
                <LoaderElement
                  width={148}
                  backgoundColor="hsla(231,100,66,32)"
                />
              ) : (
                <>
                  <span className="text-sm font-medium text-secondary-300">
                    Student Number
                  </span>
                  <span className="text-secondary">{user.studentNumber}</span>
                </>
              )}
            </p>
          </div>
        </section>
        <section className="w-[279px] space-y-4">
          <h5 className="mb-4 text-lg font-semibold text-secondary">
            File Task
          </h5>
          <div className="space-y-3">
            <p className="flex items-center justify-between">
              <span className="text-sm font-medium text-secondary-300">
                Last Modified
              </span>
              <span className="text-secondary">Never</span>
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-secondary-300">
              File submissions
            </p>
            <div className="flex w-full items-center justify-center">
              <label
                htmlFor="dropzone-file"
                className="flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed border-primary hover:opacity-70"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <FolderOpen color="#546FFF" opacity={0.3} />
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <p className="text-xs text-secondary-300">
              *drag or browser from device
            </p>
          </div>
          <button
            type="button"
            className="w-full rounded-[10px] bg-primary py-3 text-center text-sm font-semibold text-white hover:opacity-70"
            onClick={handleOpenModal}
          >
            Submit
          </button>
        </section>
      </section>
      {isOpenModal && (
        <ConfirmationModal
          handleOpenModal={handleOpenModal}
          refModal={refModal}
        />
      )}
    </article>
  );
}
