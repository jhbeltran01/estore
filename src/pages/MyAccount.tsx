import Header from '@Components/header/Header';
import Navigation from '@Components/tabs/MyAccountTabs/Navigation';
import useMyAccountTabs from '@Hooks/useMyAccountTabs';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import orders from '@Json/orders.json';
import '@Utils/toggleMobileNavMenu';

function MyAccount() {
  const tabs = useMyAccountTabs(orders);
  const [activeTab, setActiveTab] = useState(tabs[0].name)



  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      <div className='grid-2-column-responsive-8 pad-3'>
        <Navigation
          tabs={tabs}
          activeTab={activeTab}
          updateActiveTab={(event) => setActiveTab(event.currentTarget.id)}
        />

        <div className='pad-2 bg-white-2 mar-res height-m-content'>
          {
            tabs.map(tab => tab.name === activeTab && tab.content)
          }
        </div>
      </div>
    </React.Fragment>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <MyAccount />
  </React.StrictMode>,
  document.getElementById('root')
)