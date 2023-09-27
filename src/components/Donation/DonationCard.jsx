/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const DonationCard = ({cart}) => {
    const { id, title,price,image, newimage, category, description } = cart || {};

    return (
        <>
       
      <div className='p-10'>
      <div className='flex items-center gap-4  w-[600px]' style={{background:cart.card_bg_color}}>
        <div>
            <img className='w-[220px] h-[200px] ' src={image} alt="" />
        </div>
        <div>
            <p className= "p-1 w-20 ml-6 mt-2 rounded text-center font-bold" style={{color: cart.text_color,
        background:cart.category_bg_color
                    }} >{category}</p>
            <h2 className='text-2xl text-gray-200 font-bold'>{title}</h2>
            <p className='text-xl' style={{color: cart.text_color}}>  ${price}</p>
            <button style={{background: cart.text_color}} className='bg-orange-800 px-3 rounded-md text-white '>View Details</button>
        </div>
      </div>
      </div>
        
        
        </>
    );
};

export default DonationCard;