import ButtonToggle from "../../../components/ButtonToggle";

export default function Notifications() {
  const notificationsItems = [
    {
      name: "Message",
      enable: true,
    },
    {
      name: "Task Update",
      enable: false,
    },
    {
      name: "Task Deadline",
      enable: true,
    },
    {
      name: "Mentor Help",
      enable: false,
    },
  ];
  return (
    <div
      className="m-6 rounded-[10px] bg-white p-5 xl:m-0 xl:rounded-none"
      id="notificationsSettingsSection"
    >
      <ul className="space-y-6">
        {notificationsItems.map((item) => (
          <li key={item.name} className="space-x-5">
            <ButtonToggle enable={item.enable}>{item.name}</ButtonToggle>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-10 block w-full max-w-[250px] rounded-[10px] bg-primary py-3 text-center text-sm font-semibold text-white hover:opacity-70"
      >
        Save Changes
      </button>
    </div>
  );
}
