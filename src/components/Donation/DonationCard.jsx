/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const DonationCard = ({cart}) => {
    const { id, title,price,image, newimage, category, description } = cart || {};

    return (
        <>
        {/* <div className="hero w-[1000px] h-[500px] ml-56">
        <img className="" src={newimage} alt="" />
        <div className="hero-overlay bg-opacity-80 mt-[400px] h-[100px]"></div>
        <div>

          <button className="btn bg-[#FF444A] border-0	 text-white mt-96 item-end mr-[800px]">
            Donate {price}
          </button>

        </div>
      </div>
      <div className="ml-56 w-[900px]">
        <h1 className="text-3xl  font-bold mt-4">{title}</h1>
        <p className="mt-4">{price}</p>
      </div> */}
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