import React, { useState } from 'react';
import { data } from '../../data/data';
import FoodCard from './FoodCard';
function Food() {
    const [foodData, setFoodData] = useState(data);
    return (
        <div>
            <div className='max-w-[1340px] m-auto mt-8'>
                <h1 className='text-center text-orange-500 font-bold text-3xl md:text-4xl'>Top Rated Menu Items</h1>
                <div className='flex justify-between flex-col md:flex-row mt-2 px-2'>
                    <div className='mb-2'>
                        <h4 className='font-bold mb-1 md:mb-4'>Filter Type</h4>
                        <div className='flex gap-2 text-orange-600 text-[0.5rem] sm:text-xl'>
                            <button className='border-orange-600'>All</button>
                            <button className='border-orange-600'>Burgers</button>
                            <button className='border-orange-600'>Pizza</button>
                            <button className='border-orange-600'>Salad</button>
                            <button className='border-orange-600'>Chicken</button>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold mb-1 md:mb-3'>Filter Price</h4>
                        <div className='flex gap-2  text-orange-600 text-[0.5rem] sm:text-xl'>
                            <button className='border-orange-600'>$</button>
                            <button className='border-orange-600'>$$</button>
                            <button className='border-orange-600'>$$$</button>
                            <button className='border-orange-600'>$$$$</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1340px] m-auto flex flex-wrap justify-between gap-8 mt-12'>
                {
                    foodData.map((item, index) => (
                        <FoodCard key={index} props={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Food