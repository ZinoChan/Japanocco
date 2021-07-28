import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slick.css"

const Carousel = ({ children, settings }) => {
  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
