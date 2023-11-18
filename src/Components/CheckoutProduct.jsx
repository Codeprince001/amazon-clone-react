import React from 'react';

const CheckoutProduct = ({ id, price, image, rating, description, title }) => {
  return (
    <div className='flex text-black'>

      <div className='p-8'>
        <div className='w-[150px]'>
          <img src={`${image}`} alt={title} className='w-full h-full' />
        </div>
      </div>

      <div>
        <div className='flex items-center justify-evenly'>
          <h2 className='text-[1rem] '>{title} </h2>
          <h2>${price}</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
