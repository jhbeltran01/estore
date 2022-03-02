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

  return (
    <div>
      <div className='nav-secondary grid-3-column-1'>
        {
          productTabs.map((tab: TabType, index: number) => (
            <button
              key={index}
              onClick={event => setActiveTab(event.currentTarget.id)}
              className={tab.tabName === activeTab ? 'btn-tab active' : 'btn-tab'}
              id={tab.tabName}
            >
              {tab.tabName}
              {tab.tabName === "Reviews" ? `(${tab.tabContent.props.reviews.length})` : ""}
            </button>
          ))
        }
      </div>

      <div className='bg-white-2 pad-2'>
        {productTabs.map((tab: TabType, index: number) => tab.tabName === activeTab && tab.tabContent)}
      </div>
    </div>
  )
}

export default Tabs
