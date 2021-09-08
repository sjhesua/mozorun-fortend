import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import image1 from '././assets/images/1.jpg'
import image2 from '././assets/images/2.jpg'
import image3 from '././assets/images/3.jpg'
import image4 from '././assets/images/4.jpg'
import image5 from '././assets/images/5.jpg'
import image6 from '././assets/images/6.jpg'
import image7 from '././assets/images/7.jpg'

const CarouselContainer = () => {

    
    return (
        <Carousel fade={true} pause={true} touch={true} wrap={true}>
  <Carousel.Item interval={4000} className="mxh">
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={4000} className="mxh">
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000} className="mxh">
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000} className="mxh">
    <img
      className="d-block w-100"
      src={image4}
      alt="Fourth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000} className="mxh">
    <img
      className="d-block w-100"
      src={image5}
      alt="Fifth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000} className="mxh">
    <img
      className="d-block w-100"
      src={image6}
      alt="Sixth slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000} className="mxh">
    <img
      className="d-block w-100"
      src={image7}
      alt="Seventh slide"
    />
  </Carousel.Item>
</Carousel> 
    )
}

export default CarouselContainer;