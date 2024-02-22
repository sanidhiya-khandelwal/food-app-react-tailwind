import React from 'react'

function HeadLineCard({ props }) {
    const { img, title, subTitle } = props;
    return (
        <div className='w-[280px] m-auto md:m-0 md:w-[380px] relative'>
            {/* overlay */}
            <div className='absolute h-full w-full bg-black/40 rounded-xl px-2 py-5'>
                <h4 className='font-bold text-gray-50'>{title}</h4>
                <p className='text-gray-50'>{subTitle}</p>
                <button className='bg-white border-none mt-[4rem] md:mt-[3rem] lg:mt-[6rem]'>Order now</button>
            </div>
            <img className='rounded-xl' src={img} alt={title} />
        </div>
    )
}

export default HeadLineCard