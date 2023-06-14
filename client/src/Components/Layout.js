import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  return (
    <div>
      <Header></Header>
      <main style={{minHeight:"70vh"}}>
        {props.children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout