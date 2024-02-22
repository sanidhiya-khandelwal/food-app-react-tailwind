import React, { useState } from 'react'
import CategoryCard from './CategoryCard';
import { categories } from '../../data/data';

function Categories() {
    const [categoriesData, setCategoriesData] = useState(categories);

    return (
        <div className='max-w-[1340px] m-auto mb-8'>
            <div className='mt-8'>
                <h1 className='text-center text-orange-500 font-bold text-3xl md:text-4xl'>Categories</h1>
            </div>
            <div className='flex flex-wrap justify-center sm:justify-between gap-8 mt-8'>
                {
                    categoriesData.map((item, index) => (
                        <div key={index}>
                            <CategoryCard props={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Categories