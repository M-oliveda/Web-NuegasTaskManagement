import { CloseCircle } from "iconsax-react";
import { useEffect } from "react";

export default function ConfirmationModal(props) {
  useEffect(() => {
    setTimeout(() => {
      props.refModal.current.classList.add("animate-fadeout");
    }, 2000);
    setTimeout(() => {
      props.handleOpenModal();
    }, 3000);
  }, []);
  return (
    <div
      id="default-modal"
      className="fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden md:inset-0"
    >
      <div
        className="relative left-1/2 right-1/2 max-h-full w-full max-w-2xl -translate-x-1/2 p-4"
        ref={props.refModal}
      >
        <div className="relative flex max-h-full w-full max-w-2xl justify-between rounded-lg bg-green-500 p-4 shadow md:p-5">
          <p className="text-base font-medium leading-relaxed text-white">
            File Submitted!
          </p>
          <button type="button" onClick={props.handleOpenModal}>
            <CloseCircle color="#FFFFFF" />
          </button>
        </div>
      </div>
    </div>
  );
}
