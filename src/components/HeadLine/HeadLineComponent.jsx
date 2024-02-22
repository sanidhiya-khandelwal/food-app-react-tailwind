import React from 'react';
import HeadLineCard from './HeadLineCard';

function HeadLineComponent() {
    const HeadLineData = [
        {
            "img": "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
            "title": "Sun's Out, BOGO's Out",
            "subTitle": "Through 8/26"
        },
        {
            "img": "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
            "title": "New Restaurants",
            "subTitle": "Added Daily"
        },
        {
            "img": "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "title": "We Deliver Desserts Too",
            "subTitle": "Tasty Treats"
        }
    ]
    return (
        <div className='max-w-[1340px] m-auto mt-10 flex flex-col gap-5 md:flex-row justify-start md:justify-between'>
            {
                HeadLineData.map((item, index) =>
                    <HeadLineCard key={index} props={item}
                    />
                )
            }
        </div>
    )



}

export default HeadLineComponent