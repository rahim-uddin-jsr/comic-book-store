import PopularCard from "./PopularCard";

const Popular = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="mt-36">
      <div className="flex justify-between w-full items-center h-6 py-5 px-5 mb-5">
        <h2 className="text-[16px] font-bold">Popular</h2>
        <button className="flex justify-center items-center gap-1">
          <h2 className="text-gray-500 font-medium text-[16px]">More</h2>
          <svg
            className="fill-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="10"
            height="10"
          >
            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 w-full justify-items-center	">
        {items.map((item, idx) => (
          <PopularCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
