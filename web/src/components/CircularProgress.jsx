export default function CircularProgress({ children, percentage }) {
  return (
    <>
      <div className="relative h-[68px] w-[68px]">
        <svg
          className="size-full -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <!-- Background Circle --> */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-primary opacity-10"
            strokeWidth="2"
          ></circle>
          {/* <!-- Progress Circle --> */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-primary"
            strokeWidth="3"
            strokeDasharray="100"
            strokeDashoffset={100 - percentage}
            strokeLinecap="round"
          ></circle>
        </svg>

        {/* <!-- Percentage Text --> */}
        <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <span className="text-center text-lg font-medium text-white">
            {children}
          </span>
        </div>
      </div>
    </>
  );
}
