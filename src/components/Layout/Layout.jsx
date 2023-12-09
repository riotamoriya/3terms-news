import * as React from 'react'
import './Globals.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout