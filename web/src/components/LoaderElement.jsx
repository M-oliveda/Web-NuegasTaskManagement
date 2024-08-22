export default function LoaderElement(props) {
  if (props.type === "rectangule") {
    return (
      <span
        className={`w-[${props.width}] h-3 bg-[${props.backgoundColor}] rounded-[20px]`}
      />
    );
  }

  if (props.type === "circle") {
    return (
      <span
        className={`h-[15px] w-[15px] bg-[${props.backgoundColor}] rounded-full`}
      />
    );
  }
}
