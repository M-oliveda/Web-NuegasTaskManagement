import { useState } from "react";

export default function ButtonToggle(props) {
  const [checkedButton, setCheckedButton] = useState(props.enable);

  return (
    <label className="inline-flex cursor-pointer items-center gap-5">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={checkedButton}
        onChange={() => setCheckedButton((prevValue) => !prevValue)}
      />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
      <p className="text-sm font-medium text-secondary">{props.children}</p>
    </label>
  );
}
