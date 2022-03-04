import AddressTab from '@Components/tabs/MyAccountTabs/AddressTab'
import DescriptionTab from '@Components/tabs/MyAccountTabs/DescriptionTab'
import DetailsTab from '@Components/tabs/MyAccountTabs/DetailsTab'
import OrdersTab from '@Components/tabs/MyAccountTabs/OrdersTab'
import { OrdersType } from '@Types/MyAccount/OrdersType'
import addresses from '@Json/address.json';
import React from 'react'

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus. Nulla tristique viverra nisl, sit amet bibendum ante suscipit non. Praesent in faucibus tellus, sed gravida lacus. Vivamus eu diam eros. Aliquam et sapien eget arcu rhoncus scelerisque.';


function useMyAccountTabs(orders: OrdersType[]) {
  const tabs = [
    {
      name: 'Dashboard',
      icon: <i className="fa fa-tachometer-alt"></i>,
      content: <DescriptionTab key={0} title='Dashboard' description={description} />
    },
    {
      name: 'Orders',
      icon: <i className="fa fa-shopping-bag"></i>,
      content: <OrdersTab key={1} orders={orders} />
    },
    {
      name: 'Payment Method',
      icon: <i className="fa fa-credit-card"></i>,
      content: <DescriptionTab key={2} title='Payment Method' description={description} />
    },
    {
      name: 'Address',
      icon: <i className="fa fa-map-marker-alt"></i>,
      content: <AddressTab addresses={addresses} key={3} />
    },
    {
      name: 'Account Details',
      icon: <i className="fa fa-user"></i>,
      content: <DetailsTab key={4} />
    },
  ]

  return tabs;
}

export default useMyAccountTabs