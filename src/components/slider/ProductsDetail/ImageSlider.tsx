import React, { useEffect, useState } from 'react'

type ImageSliderProps = {
  images: {
    id: string
    imgSrc: string,
    isClone: boolean
  }[],
  activeImgId: string
}

const ImageSlider = ({ images, activeImgId }: ImageSliderProps): JSX.Element => {
  const [imageIndex, setImageIndex] = useState(0);
  const [currIndex, setCurrIndex] = useState(1);


  useEffect(() => {
    const carousel = document.getElementById('js-product-view-nav') as HTMLDivElement;
    const slider = document.getElementById('js-product-view-slider') as HTMLDivElement;
    const width = carousel.clientWidth / 5;

    slider.style.transition = '250ms ease-in-out';
    slider.style.transform = `translateX(-${width * currIndex}px)`

    width !== 0 && setCurrIndex(prevState => prevState + 1);

    const transitionEndHandler = () => {
      if (imageIndex !== 12) return;

      slider.style.transition = 'none';
      slider.style.transform = `translateX(0px)`;
      setCurrIndex(prevState => prevState - 10)
    }

    slider.addEventListener('transitionend', transitionEndHandler)

    return () => {
      slider.removeEventListener('transitionend', transitionEndHandler);
    }
  }, [imageIndex])



  useEffect(() => {
    images.filter((image, index) => {
      image.id === activeImgId && !image.isClone && setImageIndex(index)
    })
  }, [activeImgId, images])





  return (
    <div className='carousel-product-view-nav overflow-hidden' id='js-product-view-nav'>
      <div className='carousel-product-view-nav__slider flex' id='js-product-view-slider'>
        {
          images.map((image, index: number) => (
            <img
              id='js-nav-img'
              key={index}
              src={image.imgSrc}
              alt="product image"
            />
          ))
        }
      </div>
    </div>
  )
}

export default ImageSlider