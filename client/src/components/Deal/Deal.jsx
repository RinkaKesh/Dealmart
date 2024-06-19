import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        partialVisibilityGutter: 0
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const DealWrapper = styled(Box)`
    margin: 30px 40px;
    background: white;
    padding: 10px 10px ;
    position: relative; 
    z-index: 1; 
    @media (max-width: 768px) {
        margin: 20px 10px;
    }
`;

const DealTextWrapper = styled(Box)`
     padding: 12px 9px;
`;

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    color:gray;
    align-items: flex-start;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const Image = styled('img')`
    width: 100%;
    height: auto;
    max-width: 150px;
    max-height: 210px;
    padding: 10px 10px 0px 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1); 
    }
`;

const CardBox = styled(Box)`
     padding: 4px 10px;
    border: 1px solid gray;
    height: 280px;
    margin: 0 25px;
    border-radius: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; 
    z-index: 1; 
    @media (max-width: 768px) {
        height: 250px;
        margin: 0 10px;
    }
`;

const CardTitle = styled(Typography)`
    margin-top: 10px;
    font-size: 16px;
    color:gray;
    text-transform:uppercase;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const CustomCarousel = styled(Carousel)`
    .react-multi-carousel-dot-list {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 0; /* Ensure buttons z-index is 0 */
    }
`;

const Deal = ({ data, dealtext }) => {
    return (
        <DealWrapper>
            <DealTextWrapper>
                <DealText>{dealtext}</DealText>
            </DealTextWrapper>
            <CustomCarousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                infinite={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
            >
                {data.map(data => (
                    <CardBox key={data.title} textAlign="center">
                        <Image src={data.image} alt={data.title} />
                        <CardTitle>{data.title}</CardTitle>
                    </CardBox>
                ))}
            </CustomCarousel>
        </DealWrapper>
    );
};

export default Deal;
