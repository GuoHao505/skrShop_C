import React from 'react'
import NavBarTop from './NavBarTop'
import NavBottom from './NavBottom'
import Footer from '../footer'
import './nav.scss'
export default function NavBar() {

  return (
    <>
      <div className='header'>
        <NavBarTop />
        <NavBottom />
      </div>
    </>

  )
}
