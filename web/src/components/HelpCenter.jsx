export default function HelpCenter() {
  return (
    <article className="relative mt-auto rounded-[10px] bg-secondary p-5">
      <p className="h-13 absolute -top-[15%] left-1/2 right-1/2 inline-block w-12 -translate-x-1/2 rounded-full border-4 border-white bg-secondary text-center text-4xl font-bold text-white shadow-lg">
        <span>?</span>
      </p>
      <div>
        <h4 className="mb-3 text-center text-base font-semibold text-white">
          Help Center
        </h4>
        <p className="max-w-[152px] text-center text-xs font-medium text-white">
          Having Trouble in Learning. Please contact us for more questions.
        </p>
        <button className="mt-10 rounded-[10px] bg-white px-6 py-3 text-xs font-semibold text-secondary hover:opacity-70">
          Go to Help Center
        </button>
      </div>
    </article>
  );
}
