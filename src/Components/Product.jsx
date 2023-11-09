
const Product = ({ title, description, imgUrl, price }) => {
  return (
    <div className=" h-full p-4 bg-white">
      <h5 className="mb-4 text-black text-md font-medium">{title}</h5>
      <div className="h-[250px] flex justify-center">
        <img className="h-full" src={imgUrl} />
      </div>
      <div>
        <div className="h-[44px] overflow-hidden text-black text-sm mt-1">{description}</div>
        <div className="flex justify-between items-center"><span>⭐⭐⭐⭐</span><span className="text-black text-xl font-medium">${price}</span></div>
        <div className="text-center mt-1">
          <button className="bg-amazon-yellow hover:bg-orange-500 text-sm pr-8 pl-8 pt-1 pb-1 bottom-4 text-black rounded-xl font-medium">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
