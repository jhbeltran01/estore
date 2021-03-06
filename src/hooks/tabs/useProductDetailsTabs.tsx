import React from "react"
import DescriptionTab from "@Components/tabs/ProductDetailsTab/DescriptionTab"
import SpecificationTab from "@Components/tabs/ProductDetailsTab/SpecificationTab"
import ReviewsTab from "@Components/tabs/ProductDetailsTab/ReviewsTab"

const useTabs = (products: any) => {
  const tabs = [
    {
      tabName: "Description",
      tabContent:
        <DescriptionTab
          key={0}
          title={products.description.title}
          description={products.description.description} />
    },
    {
      tabName: 'Specification',
      tabContent:
        <SpecificationTab
          key={1}
          title={products.specification.title}
          specifications={products.specification.specifications} />
    },
    {
      tabName: 'Reviews',
      tabContent: <ReviewsTab key={2} reviews={products.reviews} />
    }
  ]

  return tabs;
}

export default useTabs