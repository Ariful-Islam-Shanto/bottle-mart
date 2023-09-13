import React from 'react';

const Bottle = ({bottles, handleCart}) => {
    const {img, name, price, id} = bottles;
    // console.log(img);
    return (
        <div className='flex items-center justify-center flex-col rounded-lg shadow-sm shadow-blue-500 '>
            <img className='w-full rounded-lg p-0' src={img} alt="" />
            <div className='flex items-center justify-center flex-col p-10 space-y-6'>
            <h1 className=' text-2xl text-black font-medium text center'>{name}</h1>
            <p className=' text- text-black text center' >Price : {price}</p>
            <button onClick={() => {
                handleCart(id)
            } } className=' btn btn-primary'>Purchase</button>
            </div>
        </div>
    );
};

export default Bottle;