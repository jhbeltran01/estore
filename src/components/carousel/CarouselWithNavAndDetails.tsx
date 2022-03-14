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
  const [imagesForCarousel, setImagesForCarousel] = useState<Image[]>([])
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


  const changeActiveImage = (images: Image[]) => {
    let index = 1;

    setInterval(() => {
      setActiveImgId(images[index].id)
      setProductDetails(products[index])

      index = index === images.length - 1 ? 0 : index + 1;
    }, 10000)
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

    setImagesForCarousel(tempImages)
    setImagesForSlider(tempImagesForSlider)

    changeActiveImage(tempImages);
  }, [products])



  return (
    <React.Fragment>
      <div>
        <div className='mar-bot-3'>
          <ImageCarousel images={imagesForCarousel} activeImgId={activeImgId} />
        </div>
        <div className='border-red mar overflow-hidden'>
          <ImageSlider images={imagesForSlider} activeImgId={activeImgId} />
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