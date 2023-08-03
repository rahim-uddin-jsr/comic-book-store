import cardImg1 from "../../assets/images/1.jpg";
const PopularCard = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="relative">
          <img height={170} src={cardImg1} alt="Shoes" />
          <div className="px-5 py-3 rounded-md font-bold text-white bg-red-500 absolute bottom-3 left-3">
            Serial
          </div>
        </figure>
        <div className="card-body gap-1">
          <h2 className="card-title text-[14px]">Age Of Xm</h2>
          <p className="text-[14px] text-left text-[##AAB2BD]">
            Update to cheater 6
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
