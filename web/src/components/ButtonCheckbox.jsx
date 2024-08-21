export default function ButtonCheckbox(props) {
  return (
    <label
      htmlFor={`inputRadio${props.value}`}
      className="inline-flex items-center gap-4 rounded-[10px] border border-gray-100 px-5 py-4"
    >
      <span className="text-xs font-medium text-secondary">
        {props.children}
      </span>
      <input
        id={`inputRadio${props.value}`}
        type="radio"
        value={props.value}
        name={props.name}
        onChange={() => console.log("SELECTED!")}
        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  );
}
