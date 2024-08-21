import ButtonCheckbox from "../../../components/ButtonCheckbox";

export default function Settings() {
  return (
    <div className="m-6 space-y-6 rounded-[10px] bg-white p-5 xl:m-0 xl:rounded-none">
      <div>
        <p className="mb-4 text-sm font-semibold text-secondary">Language</p>
        <select
          className="w-full max-w-[400px] rounded-[10px] border border-gray-50 bg-transparent px-5 py-4 text-xs font-semibold text-secondary"
          disabled
          defaultValue={"This Week"}
        >
          <option value={"this-week"}>English (Default)</option>
        </select>
      </div>
      <div>
        <p className="mb-4 text-sm font-semibold text-secondary">Timezone</p>
        <select
          className="w-full max-w-[400px] rounded-[10px] border border-gray-50 bg-transparent px-5 py-4 text-xs font-semibold text-secondary"
          disabled
          defaultValue={"This Week"}
        >
          <option value={"this-week"}>English (Default)</option>
        </select>
      </div>
      <div>
        <p className="mb-4 text-sm font-semibold text-secondary">Timezone</p>
        <div className="flex items-center gap-4">
          <ButtonCheckbox name="timezone" value="24-hours">
            24 Hours
          </ButtonCheckbox>
          <ButtonCheckbox name="timezone" value="12-hours">
            12 Hours
          </ButtonCheckbox>
        </div>
      </div>
    </div>
  );
}
