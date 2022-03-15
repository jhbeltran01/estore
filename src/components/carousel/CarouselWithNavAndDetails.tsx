import ImageSlider from '@Components/slider/ProductsDetail/ImageSlider'
import ProductContent from '@Page-section/Product/ProductContent'
import React, { useEffect, useState } from 'react'
import ImageCarousel from './ProductsDetail/ImageCarousel'

type Image = {
  id: string,
  imgSrc: string,
  isClone: boolean
}

type Product = {
  imgSrc: string,
  name: string,
  rating: number,
  prize: number,
  id: string,
  sizes: string[],
  colors: string[]
}

type CarouselWithNavProps = {
  products: Product[]
}

function CarouselWithNav({ products }: CarouselWithNavProps) {
  const [activeImgId, setActiveImgId] = useState(products[0].id);
  const [productDetails, setProductDetails] = useState(products[0])
  const [imagesForSlider, setImagesForSlider] = useState<Image[]>([])

  const getImagesWithClones = (products: Image[], numberOfClones: number): Image[] => {
    const clonesInTheFront: Image[] = [];
    let image: Image;

    for (let i = numberOfClones - 1; i > 0; --i) {
      image = {
        id: products[products.length - i].id,
        imgSrc: products[products.length - i].imgSrc,
        isClone: true
      }
      clonesInTheFront.push(image);
    }
    image = {
      id: products[0].id,
      imgSrc: products[0].imgSrc,
      isClone: true
    }

    return [...clonesInTheFront, ...products, image];
  }



  const sliderTransition = (carousel: HTMLDivElement, indexObj: { index: number }): void => {
    const slider = carousel.querySelector('#js-product-view-slider') as HTMLDivElement;

    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${(carousel.clientWidth / 5) * 2}px)`
  }



  const changeDisplayedProduct = (images: Image[]): void => {
    let indexObj = {
      index: 0
    };
    let interval: NodeJS.Timer;

    const updateDisplayedProduct = (): void => {
      setActiveImgId(images[indexObj.index].id)
      setProductDetails(products[indexObj.index])
    }

    const decrement = (): void => {
      const hasReachedFirstElement = indexObj.index === 0;
      indexObj.index = hasReachedFirstElement ? images.length - 1 : indexObj.index - 1
    }

    const increment = (): void => {
      const hasReachedLastElement = indexObj.index === images.length - 1;
      indexObj.index = hasReachedLastElement ? 0 : indexObj.index + 1;
    }

    const updateIndex = (operation: () => void) => {
      clearInterval(interval);
      operation()
      updateDisplayedProduct()

      interval = setInterval(() => {
        operation();
        updateDisplayedProduct()
      }, 1000)
    }

    // initial interval
    interval = setInterval(() => {
      increment();
      updateDisplayedProduct()
    }, 1000)

    const clickEvents = (id: string) => {
      const carousel = document.getElementById(id) as HTMLDivElement;
      const leftCarouselArrow = carousel.querySelector('#js-arrow-left') as HTMLDivElement;
      const rightCarouselArrow = carousel.querySelector('#js-arrow-right') as HTMLDivElement;

      const leftArrowHandler = () => updateIndex(decrement)
      const rightArrowHandler = () => updateIndex(increment)

      leftCarouselArrow.addEventListener('click', leftArrowHandler);
      rightCarouselArrow.addEventListener('click', rightArrowHandler);

      return carousel;
    }

    // product-view-carousel
    clickEvents('js-product-view-carousel')
    const productViewNavCarousel = clickEvents('js-product-view-nav');
    sliderTransition(productViewNavCarousel, indexObj)
  }



  useEffect(() => {
    const tempImages = products.map(product => {
      return {
        id: product.id,
        imgSrc: product.imgSrc,
        isClone: false
      }
    })

    const tempImagesForSlider = getImagesWithClones(tempImages, 5)

    setImagesForSlider(tempImagesForSlider)
    changeDisplayedProduct(tempImages)
  }, [products])



  return (
    <React.Fragment>
      <div>
        <div className='mar-bot-3'>
          <ImageCarousel images={products} activeImgId={activeImgId} />
        </div>
        <div className='border-red mar overflow-hidden'>
          <ImageSlider images={imagesForSlider} />
        </div>
      </div>

      <div className='grid grid-align-center pad-2'>
        <ProductContent
          name={productDetails.name}
          rating={productDetails.rating}
          prize={productDetails.prize}
          sizes={productDetails.sizes}
          colors={productDetails.colors}
        />
      </div>
    </React.Fragment>
  )
}

export default CarouselWithNav