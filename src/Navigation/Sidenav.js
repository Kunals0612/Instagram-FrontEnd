import React from 'react'
import './sidenav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
function Sidenav() {
  return (
     <div className="sidenav">
      <img className="sidenav_logo" src="https://i.ibb.co/JqTy4ft/instagram-icon-text-27.png" alt="instagram-icon-text-27" />
      <div className="sidenav_buttons">
        <button className="sidenav_button">
          <HomeIcon/>
          <span>Home</span>
        </button>
        <button className="sidenav_button">
          <SearchIcon/>
          <span>Search</span>
        </button>
        <button className="sidenav_button">
          <ExploreIcon/>
          <span>explore</span>
        </button>
        <button className="sidenav_button">
          <SlideshowIcon/>
          <span>reel</span>
        </button>
        <button className="sidenav_button">
          <MessageIcon/>
          <span>message</span>
        </button>
        <button className="sidenav_button">
          <FavoriteBorderIcon/>
          <span>Notifications</span>
        </button>
        <button className="sidenav_button">
          <AddCircleOutlineIcon/>
          <span>create</span>
        </button>
      </div>
      <div className="sidenav_more">
        <button className="sidenav_button">
          <MenuIcon/>
          <span>More</span>
        </button>
      </div>
     </div> 
  )
}

export default Sidenav
