export default function Progressbar(props) {
  return (
    <div className="relative h-2">
      <progress value={props.value} max={100}></progress>
    </div>
  );
}
