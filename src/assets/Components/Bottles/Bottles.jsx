import React, { useState } from 'react';
import Bottle from '../Bottle/Bottle';



const Bottles = ({bottles, handleAddCart}) => {
    // console.log(bottles);
    return (
        <div className="grid grid-cols-3 gap-3" >
            {bottles.map(bottle => <Bottle key={bottle.id} bottles={bottle} handleCart={handleAddCart}></Bottle>)}
        </div>
    );
};

export default Bottles;