import React from 'react'

function CategoryCard({ props }) {
    const { id, name, image } = props;
    return (
        <div className=''>
            <div className='flex justify-around items-center w-[250px] h-[80px] bg-gray-300 rounded-xl cursor-pointer hover:scale-[1.07] duration-150'>
                <h1 className='font-bold'>{name}</h1>
                <img className='w-[30%] h-[80%]' src={image} alt={name} width={150} height={50} />
            </div>
        </div>
    )
}

export default CategoryCard