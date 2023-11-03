import { Link } from "react-router-dom";

const Card = ({ title, link, img }) => {


  return (
    <div className=" text-black bg-slate-50 p-2">
      <div className="text-lg xl:text-xl font-semibold mt-4 ml-4 object-cover">{title}</div>
      <div className="h-80 m-4"><img src={img} className="h-full w-full" /></div>
      <div className="text-sm xl:text-sm text-blue-500 ml-4 mb-3 mt-0"><Link to="#">{link}</Link></div>
    </div>
  );
};

export default Card;
