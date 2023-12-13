import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <nav className='header'>
        <img className='Logo1' src='my-test-app/public/Logo1.jpg' alt=''/>
        <div className='header_options'>
            <span className='header_optionLineone'>Hello, Welcome to TechBiz </span>
            <span className='header_optionLinetwo'>Sign In or Sign Out</span>
        </div>
    </nav>
  )
}

export default Header
