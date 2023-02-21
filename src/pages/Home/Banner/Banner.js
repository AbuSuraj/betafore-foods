import React from 'react'; 
import img1 from '../../../assests/app-1.jpg'
import img2 from '../../../assests/app-2.jpg'
import img3 from '../../../assests/app-3.jpg'
import img4 from '../../../assests/chicken.jpg'
import img5 from '../../../assests/desert-1.jpg'
import BannerItem from './BannerItem';
const bannerData = [
    {
        image: img1,
        prev: 5,
        id: 1,
        next: 2
        
    },
    { 
        image: img2,
        prev: 1,
        id: 2,
        next: 3
      
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
        
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 1  
    }
   
]

const Banner = () => {
    return (
        <div className="carousel w-full lg:w-1/2 h-1/3 mx-auto py-10">
        {
            bannerData.map(slide => <BannerItem
                key={slide.id}
                slide={slide}
            ></BannerItem>)
        }
        
    </div>
    );
};

export default Banner;