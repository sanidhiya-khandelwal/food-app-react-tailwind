import React, { useState } from 'react';
import { data } from '../../data/data';
import FoodCard from './FoodCard';
function Food() {
    const [foodData, setFoodData] = useState(data);

    const category = (foodCategory) => setFoodData(data.filter(e => e.category === foodCategory))

    const price = (foodPrice) => setFoodData(data.filter(e => e.price === foodPrice))

    return (
        <div>
            <div className='max-w-[1340px] m-auto mt-8'>
                <h1 className='text-center text-orange-500 font-bold text-3xl md:text-4xl'>Top Rated Menu Items</h1>
                <div className='flex justify-between flex-col md:flex-row mt-2 px-2'>
                    <div className='mb-2'>
                        <h4 className='font-bold mb-1 md:mb-4'>Filter Type</h4>
                        <div className='flex gap-2 text-orange-600 text-[0.5rem] sm:text-xl'>
                            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => setFoodData(data)}>All</button>
                            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={e => category("burger")}>Burgers</button>
                            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={e => category("pizza")}>Pizza</button>
                            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={e => category("salad")}>Salad</button>
                            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={e => category("chicken")}>Chicken</button>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold mb-1 md:mb-3'>Filter Price</h4>
                        <div className='flex gap-2  text-orange-600 text-[0.5rem] sm:text-xl'>
                            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={e => price("$")}>$</button>
                            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={e => price("$$")}>$$</button>
                            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={e => price("$$$")} >$$$</button>
                            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={e => price("$$$$")}>$$$$</button>
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
        </div >
    )
}

export default Food