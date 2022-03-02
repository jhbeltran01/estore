import React from 'react'

type NavigationProps = {
  tabs: {
    name: string,
    icon: JSX.Element,
    content: JSX.Element
  }[],
  activeTab: string,
  updateActiveTab: (event: React.MouseEvent<HTMLLIElement>) => void
}



function Navigation({ tabs, activeTab, updateActiveTab }: NavigationProps) {

  return (
    <ul>
      {
        tabs.map((tab, index) => (
          <li onClick={updateActiveTab} key={index} id={tab.name}>
            <a href="#">
              {tab.icon}
              {tab.name}
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default Navigation