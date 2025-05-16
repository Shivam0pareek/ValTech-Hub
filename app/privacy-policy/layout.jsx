import React from 'react'
import Navbar from '../_components/navbar'
import Head from 'next/head'
import Footer from '../_components/footer'

function layout({children}) {
  return (
    <div>
      
        <Navbar></Navbar>
        <div className='mt-28'>
            {children}
        </div>
        <Footer />
        
    </div>
  )
}

export default layout
