
const Product = ({ title, description, imgUrl, price }) => {
  return (
    <div className=" h-full p-4 bg-white">
      <h5 className="mb-4 text-black text-md font-medium">{title}</h5>
      <div className="h-[250px] flex justify-center">
        <img className="h-full" src={imgUrl} />
      </div>
      <div className="h-[30%]">
        <div className="h-[45px] overflow-hidden text-black text-sm mt-1">{description}</div>
        <div className="flex justify-between items-center"><span>⭐⭐⭐⭐</span><span className="text-black text-xl font-medium">${price}</span></div>
        <div className="text-center">
          <button className="bg-amazon-yellow hover:bg-orange-500 text-sm p-2 mt-2 rounded-xl">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
