import React from 'react'
import HeroContent from '@Components/carousel/Hero/Content'

function useHeroContents(dataWithClones: {}[], contentWidth: number) {
  return (
    dataWithClones.map((datum: any, index: number) => (
      <HeroContent
        key={index}
        imgSrc={datum.imgSrc}
        desc={datum.desc}
        imgWidth={contentWidth} />
    ))
  )
}

export default useHeroContents