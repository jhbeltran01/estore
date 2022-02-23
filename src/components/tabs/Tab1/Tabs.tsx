import React, { useState } from 'react'

type TabType = {
  tabName: string,
  tabContent: JSX.Element
}

type TabsProps = {
  productTabs: TabType[]
}

const Tabs = ({ productTabs }: TabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(productTabs[0].tabName)
  const [activeContent, setActiveContent] = useState(productTabs[0].tabContent)

  return (
    <div>
      <div className='nav-secondary grid-3-column-1'>
        {
          productTabs.map((tab: TabType, index: number) => (
            <button
              className={tab.tabName === activeTab ? 'btn-tab active' : 'btn-tab'}
              key={index}
              id={tab.tabName}
            >
              {tab.tabName}
              {tab.tabName === "Reviews" ? `(${tab.tabContent.props.reviews.length})` : ""}
            </button>
          ))
        }
      </div>

      <div className='bg-white-2 pad-2'>
        {activeContent}
      </div>
    </div>
  )
}

export default Tabs
