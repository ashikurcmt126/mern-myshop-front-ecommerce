

import React from 'react'
import Header from '../Headers'
import MenuHeader from '../MenuHeader'

const Layout = (props) => {
  return (
    <>
        <Header />
        <MenuHeader />
        {props.children}
    </>
  )
}


export default Layout