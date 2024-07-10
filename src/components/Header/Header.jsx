import { Toolbar, AppBar, Box, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles'
import React,{useState} from 'react'
import './header.css'
import Brandlogo from './logo-image/brand-logo.jpg'



const DesktopNavbar = styled(Box)(({theme})=>({
        width: '70%',
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
                <Box sx={{display:{xs: 'none', md: 'block'}}}>
                   <img src={`${process.env.PUBLIC_URL}/brand-logo.jpg`} alt="brand-logo"  width="20%" style={{cursor: 'pointer'}} />
                </Box>
                <Box sx={{display:{xs: 'none', md: 'block'}}}>
                    <ul className="ul-links">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Partnership</li>
                        <li>Blog</li>
                        <li>Gallery</li>
                        <li style={{minWidth: '8vw'}}>About Us</li>
                        <li>Contact </li>
                    </ul>
                </Box>
        </DesktopNavbar>
        <MobileNavbar>
                <Box>
                   <img src={Brandlogo} alt="brand-logo" width="15%"/>
                </Box>
                <Box>
                   <IconButton>
                     <MenuIcon sx={{color: 'white', fontSize: '2rem'}} onClick={e => setOpen(true)}/>
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
            minWidth: '50vw', // Adjust the width as needed
            minHeight: '100vh', // Adjust the height as needed
            // height: 'calc(100vh - 10px)',
          },
        }}
      >
        <MenuItem>Home</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Partnership</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Gallery</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>

        </Toolbar>
    </AppBar>
    
  )
}

export default Header
