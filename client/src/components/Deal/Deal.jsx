import React from 'react';
import {Box,Typography,styled} from '@mui/material'
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
const Dealwrapper=styled(Box)`
margin:30px 40px;
background:white;
padding:0 10px
`
const DealTextwrapper=styled(Box)`
padding:15px 9px;
`
const Dealtext=styled(Typography)`
 font-size:22px;
 font-weight:600;
 align-items:flex-start

`
const Image=styled('img')`
  width:150px;
  height:220px;
  padding:10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); 
  }
})`
const CardBox = styled(Box)`
  padding: 4px 10px;
  border: 1px solid gray;
  height: 280px;
  margin: 0 25px;
  border-radius:3%
  
`
const CardTitle=styled(Typography)`
margin-top:10px`
const Deal = ({data,dealtext}) => {
    return (
        <Dealwrapper>
          <DealTextwrapper>
             <Dealtext>{dealtext}</Dealtext>
          </DealTextwrapper>
          <Carousel responsive={responsive} autoPlay={true} swipeable={false} draggable={false} infinite={true} autoPlaySpeed={3000} keyBoardControl={true} >
            {data.map(data => (
              <CardBox key={data.title} textAlign="center">
              <Image src={data.image} alt={data.title} />
              <CardTitle>{data.title}</CardTitle>
            </CardBox>
            ))}
          </Carousel>
        </Dealwrapper>
      );
    };

export default Deal;