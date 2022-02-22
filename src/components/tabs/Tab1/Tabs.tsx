import React from 'react'

type TabsProps = {
  productTabs: {
    tabName: string,
    tabContent: JSX.Element
  }[]
}

const Tabs = ({ productTabs }: TabsProps): JSX.Element => {
  return (
    <div>
      <div>
        {
          productTabs.map(tab => (
            <button>{tab.tabName}</button>
          ))
        }
      </div>

      <div>
        {
          productTabs.map(tab => (
            <div id={tab.tabName.toLowerCase()}>
              {tab.tabContent}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Tabs
