import React from 'react'

function Hero() {
    return (
        <div className='max-w-[1340px] max-h-[500px] m-auto mt-10'>
            <div className='relative'>
                {/* overlay */}
                <div className='absolute bg-black/40 flex justify-center items-start flex-col  h-full w-full text-3xl sm:text-6xl font-bold text-gray-50 px-2 md:px-4'>
                    <h1 className=''>The <span className='text-orange-600'>Best</span></h1>
                    <h1><span className='text-orange-600'>Foods</span> Delivered</h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="hero-img" />
            </div>
        </div>
    )
}

export default Hero