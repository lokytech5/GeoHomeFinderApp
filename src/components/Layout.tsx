import React, { ReactNode } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'


const Layout= () => {
  return (
    <>
        <NavBar />
        <div>
          <Outlet/>
        </div>
    </>
  );
}

export default Layout