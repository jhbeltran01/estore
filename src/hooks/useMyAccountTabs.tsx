import Address from '@Components/tabs/MyAccountTabs/Address'
import Description from '@Components/tabs/MyAccountTabs/Description'
import Details from '@Components/tabs/MyAccountTabs/Details'
import Orders from '@Components/tabs/MyAccountTabs/Orders'
import React from 'react'

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus. Nulla tristique viverra nisl, sit amet bibendum ante suscipit non. Praesent in faucibus tellus, sed gravida lacus. Vivamus eu diam eros. Aliquam et sapien eget arcu rhoncus scelerisque.';


function useMyAccountTabs() {
  const tabs = [
    {
      name: 'Dashboard',
      icon: <i className="fa fa-tachometer-alt"></i>,
      content: <Description key={0} title='Dashboard' description={description} />
    },
    {
      name: 'Orders',
      icon: <i className="fa fa-shopping-bag"></i>,
      content: <Orders key={1} />
    },
    {
      name: 'Payment Method',
      icon: <i className="fa fa-credit-card"></i>,
      content: <Description key={2} title='Payment Method' description={description} />
    },
    {
      name: 'Address',
      icon: <i className="fa fa-map-marker-alt"></i>,
      content: <Address key={3} />
    },
    {
      name: 'Account Details',
      icon: <i className="fa fa-user"></i>,
      content: <Details key={4} />
    }
  ]

  return tabs;
}

export default useMyAccountTabs