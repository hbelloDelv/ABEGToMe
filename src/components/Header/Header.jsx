import { Toolbar, AppBar, Box, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles'
import React,{useState} from 'react'
import {Link } from "react-router-dom";
import './header.css'
import Brandlogo from './logo-image/brand-logo.jpg'



const DesktopNavbar = styled(Box)(({theme})=>({
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
}))

const MobileNavbar = styled(Box)(({theme})=>({
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 10px',
        [theme.breakpoints.up("sm")]: {
          display: 'none'
        }
}))




const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky" sx={{backgroundColor: '#0d1321', }} >
      <Toolbar sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <DesktopNavbar>    
                <Box sx={{display:{xs: 'none', md: 'block', padding: '8px 0px'}}}>
                   <img src={`${process.env.PUBLIC_URL}/brand-logo.jpg`} alt="brand-logo"  width="16%" style={{cursor: 'pointer'}} />
                </Box>
                <Box sx={{display:{xs: 'none', md: 'block'}}}>
                    <ul className="ul-links">
                        <li><Link to="/" className="nav-item">Home</Link></li>
                        <li><Link to="/services" className="nav-item">Services</Link></li>
                        <li><Link to="/partnership" className="nav-item">Partnership</Link></li>
                        <li><Link to="/blog" className="nav-item">Blog</Link></li>
                        <li><Link to="/gallery" className="nav-item">Gallery</Link></li>
                        <li style={{minWidth: '8vw'}}><Link to="/about" className="nav-item">About Us</Link></li>
                        <li ><Link to="/contact" className="nav-item">Contact</Link></li>
                    </ul>
                </Box>
        </DesktopNavbar>
        <MobileNavbar>
                <Box>
                   <img src={Brandlogo} alt="brand-logo" width="15%"/>
                </Box>
                <Box>
                   <IconButton onClick={e => setOpen(true)}>
                     <MenuIcon sx={{color: 'white', fontSize: '2rem'}} />
                  </IconButton>
                </Box>
        </MobileNavbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            marginTop: '32px',
            marginLeft: '16px'
          }
        }}
      >
            <MenuItem><Link to="/" className="nav-item">Home</Link></MenuItem>
            <MenuItem><Link to="/services" className="nav-item">Services</Link></MenuItem>
            <MenuItem><Link to="/partnership" className="nav-item">Partnership</Link></MenuItem>
            <MenuItem><Link to="/blog" className="nav-item">Blog</Link></MenuItem>
            <MenuItem><Link to="/gallary" className="nav-item">Gallery</Link></MenuItem>
            <MenuItem><Link to="/about" className="nav-item">About Us</Link></MenuItem>
            <MenuItem><Link to="/contact" className="nav-item">Contact</Link></MenuItem>
      </Menu>
        </Toolbar>
    </AppBar>
    
  )
}

export default Header
