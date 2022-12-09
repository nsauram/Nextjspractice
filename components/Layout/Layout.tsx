import Navbar from '@components/Navbar/Navbar'
import React from 'react'

const Layout:React.FC = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <footer>this is the footer</footer>
    </div>
  )
}

export default Layout