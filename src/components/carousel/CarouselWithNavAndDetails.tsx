import ImageSlider from '@Components/slider/ProductsDetail/ImageSlider'
import ProductContent from '@Page-section/Product/ProductContent'
import React, { useEffect, useState } from 'react'
import ImageCarousel from './ProductsDetail/ImageCarousel'

type Image = {
  id: string,
  imgSrc: string,
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
  const [displayedContent, setDisplayedContent] = useState(0);
  const [isSlidingLeft, setIsSlidingLeft] = useState(true);

  const getImagesWithClones = (products: Image[], numberOfClones: number): Image[] => {
    const clonesInTheFront: Image[] = [];
    for (let i = numberOfClones - 1; i > 0; --i) {
      clonesInTheFront.push(products[products.length - i]);
    }

    const clonesInTheEnd: Image[] = [];
    for (let i = 0; i < 3; ++i) {
      clonesInTheEnd.push(products[i]);
    }

    return [...clonesInTheFront, ...products, ...clonesInTheEnd];
  }



  const changeDisplayedProduct = (images: Image[]): void => {
    let index = 0;
    let interval: NodeJS.Timer;
    const INTERVAL_TIME = 5000;

    const updateDisplayedProduct = (): void => {
      setActiveImgId(images[index].id)
      setProductDetails(products[index])
    }

    const decrement = (): void => {
      const hasReachedFirstElement = index === 0;
      index = hasReachedFirstElement ? images.length - 1 : index - 1
      setDisplayedContent(index)
      setIsSlidingLeft(false)
    }

    const increment = (): void => {
      const hasReachedLastElement = index === images.length - 1;
      index = hasReachedLastElement ? 0 : index + 1;
      setDisplayedContent(index)
      setIsSlidingLeft(true)
    }

    const displayNewProduct = (operation: () => void) => {
      operation()
      updateDisplayedProduct()
    }

    const createNewInterval = (operation: () => void) => {
      clearInterval(interval);
      interval = setInterval(() => {
        displayNewProduct(operation)
      }, INTERVAL_TIME)
    }

    // initial interval
    interval = setInterval(() => {
      displayNewProduct(increment)
    }, INTERVAL_TIME)

    const clickEvents = (id: string) => {
      const carousel = document.getElementById(id) as HTMLDivElement;
      const leftCarouselArrow = carousel.querySelector('#js-arrow-left') as HTMLDivElement;
      const rightCarouselArrow = carousel.querySelector('#js-arrow-right') as HTMLDivElement;

      const leftArrowHandler = () => {
        displayNewProduct(decrement)
        createNewInterval(decrement)
      }

      const rightArrowHandler = () => {
        displayNewProduct(increment)
        createNewInterval(increment)
      }

      leftCarouselArrow.addEventListener('click', leftArrowHandler);
      rightCarouselArrow.addEventListener('click', rightArrowHandler);
    }

    clickEvents('js-product-view-carousel')
    clickEvents('js-product-view-nav');
  }



  useEffect(() => {
    const tempImagesForSlider = getImagesWithClones(products, 6)

    setImagesForSlider(tempImagesForSlider)
    changeDisplayedProduct(products)
  }, [products])



  return (
    <React.Fragment>
      <div>
        <div className='mar-bot-3'>
          <ImageCarousel images={products} activeImgId={activeImgId} />
        </div>
        <div className='border-red mar overflow-hidden'>
          <ImageSlider
            images={imagesForSlider}
            displayedContent={displayedContent}
            isSlidingLeft={isSlidingLeft}
          />
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