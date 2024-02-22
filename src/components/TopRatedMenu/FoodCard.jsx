import React from 'react'

function FoodCard({ props }) {
    const { id, name, category, image, price } = props;
    return (
        <div className='m-auto w-[300px] h-[220px] mb-5 rounded-lg shadow-2xl cursor-pointer hover:scale-[1.07] duration-150'>
            <img className='w-full h-[80%] rounded-lg object-cover' src={image} alt={name} />
            <div className='flex justify-between p-2'>
                <h2>{name}</h2>
                <h2>{price}</h2>
            </div>
        </div>
    )
}

export default FoodCard