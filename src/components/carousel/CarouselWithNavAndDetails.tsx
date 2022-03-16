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
  const [displayedContent, setDisplayedContent] = useState(0);
  const [isSlidingLeft, setIsSlidingLeft] = useState(true);

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

    const image2 = {
      id: products[1].id,
      imgSrc: products[1].imgSrc,
      isClone: true
    }

    const image3 = {
      id: products[2].id,
      imgSrc: products[2].imgSrc,
      isClone: true
    }

    const image4 = {
      id: products[3].id,
      imgSrc: products[3].imgSrc,
      isClone: true
    }
    return [...clonesInTheFront, ...products, image, image2, image4];
  }



  const changeDisplayedProduct = (images: Image[]): void => {
    let index = 0;
    let interval: NodeJS.Timer;

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
      }, 5000)
    }

    // initial interval
    interval = setInterval(() => {
      displayNewProduct(increment)
    }, 5000)

    const leftArrowHandler = () => {
      displayNewProduct(decrement)
      createNewInterval(decrement)
    }
    const rightArrowHandler = () => {
      displayNewProduct(increment)
      createNewInterval(increment)
    }

    const clickEvents = (id: string) => {
      const carousel = document.getElementById(id) as HTMLDivElement;
      const leftCarouselArrow = carousel.querySelector('#js-arrow-left') as HTMLDivElement;
      const rightCarouselArrow = carousel.querySelector('#js-arrow-right') as HTMLDivElement;

      leftCarouselArrow.addEventListener('click', leftArrowHandler);
      rightCarouselArrow.addEventListener('click', rightArrowHandler);
    }

    clickEvents('js-product-view-carousel')
    clickEvents('js-product-view-nav');
  }



  useEffect(() => {
    const tempImages = products.map(product => {
      return {
        id: product.id,
        imgSrc: product.imgSrc,
        isClone: false
      }
    })

    const tempImagesForSlider = getImagesWithClones(tempImages, 6)

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