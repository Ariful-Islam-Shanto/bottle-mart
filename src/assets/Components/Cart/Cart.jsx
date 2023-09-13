import React from 'react';

const Cart = ({cart}) => {
    const {img, name, price} = cart;
    return (
        <div className='bg-white rounded-xl shadow-xl flex items-center justify-center flex-col gap-2 p-10'>
            <img className='w-[200px]' src={img} alt="" />
            <h1 className='text-xl text-black font-medium'>{name}</h1>
            <p className='text-lg text-gray-500'>Price : {price}</p>
            <button className='btn btn-error text-white'>Remove</button>
        </div>
    );
};

export default Cart;