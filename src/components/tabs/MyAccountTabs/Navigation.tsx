import React from 'react'

type NavigationProps = {
  tabs: {
    name: string,
    icon: JSX.Element,
    content: JSX.Element
  }[],
  activeTab: string,
  updateActiveTab: (event: React.MouseEvent<HTMLButtonElement>) => void
}



function Navigation({ tabs, activeTab, updateActiveTab }: NavigationProps) {

  return (
    <ul className='nav-3'>
      {
        tabs.map((tab, index) => (
          <li className='border-bottom' key={index} >
            <button
              className={activeTab == tab.name ? 'btn-nav active' : 'btn-nav'}
              onClick={updateActiveTab}
              id={tab.name}
            >
              {tab.icon} {tab.name}
            </button>
          </li>
        ))
      }
      <li>
        <a className='btn-nav' href="index.html">
          <i className="fa fa-sign-out-alt"></i>
          Logout
        </a>
      </li>
    </ul>
  )
}

export default Navigation