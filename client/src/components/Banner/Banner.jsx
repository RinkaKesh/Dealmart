import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../assets/bannerData';
import "./Banner.css"
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Banner = () => {
    return (
        <div className='carousel'>
            <Carousel responsive={responsive} swipeable={false}
                draggable={false} dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px" containerClass="carousel-container" autoPlay={true} autoPlaySpeed={1000}  customTransition="all .5"
                transitionDuration={500}>
                {
                    bannerData.map((ele) => {
                        return (
                            <div className='carousel_container'>
                                <img src={ele.url} alt={ele.id} className='carousel_image' />
                            </div>
                        )
                    })
                }

            </Carousel>
        </div>

    )
}

export default Banner