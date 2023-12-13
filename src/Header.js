import React from 'react'
import './Header.css'
//import SearchIcon from '@material-ui/icons/search' 


const Header = () => {
  return (
    <nav className='header'>
        <img className='header_logo' src='https://media.gettyimages.com/id/1331491686/vector/element-design.jpg?s=612x612&w=gi&k=20&c=T251aOWYAaYrnHHSRVRZcrloq3wZRgsJ46DR0Qt_sVs=' alt='TechBiz '/>
        <div className='header_search'>
            <input type='text' className='header_search_input'/>
            {/*<SearchIcon className="header_search_icon"/> import search icon*/} 
        </div>
        <link to="/" className='header_links'>
            <div className='header_options'>
                <span className='header_optionLineone'>Hello,Welcome to TechBiz</span>
                <span className='header_optionLinetwo'>Sign In or Sign Out</span>
        </div>
        </link>
    </nav>
  )
}

export default Header
