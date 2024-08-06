import React from 'react'
import {Box, Typography, Button, Grid} from '@mui/material'
import { DownloadMobileApp } from '../ReusableComponent/DownloadMobileApp'
import { Link} from 'react-router-dom';


import { blogdata } from './blogdata'

const Blog = () => {
  const mostRecentBlog = blogdata.slice(0, 1)
  return (
    <>
    <Box
    sx={{
      minHeight:{xs: '10vh', md: '20vh'} ,
      bgcolor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      borderTopColor: 'white',
      marginTop: '2px'
    }}
    >
      <Typography variant="h4">Blog</Typography>
    </Box>

    {/* background image box */}
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // bgcolor: 'red'
    }}>
      <Box 
        sx={{
          width: {xs: '90vw', md: '70vw'},
          margin: '64px 0px',
          bgcolor: 'white'
        }}
      >
        <Typography variant="body1">Recent Blogs</Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // bgcolor: 'red'
          }}>
            {
              mostRecentBlog.map(item =>(
              <Box 
                sx={{
                  width: {md: '90%', xs: '100%' },
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover', // Adjust to 'contain' or other value based on your need
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: {xs: '40vh', md: '70vh'}, // Adjust based on your design needs
                  display: 'flex',
                  alignItems: 'flex-end',
                  borderRadius: '8px',
                  margin:{xs: '8px', md:'48px 72px'},
                }}
                alt="blog image"
              >
                    <Box margin="32px" color="white" key={item.id}>
                    <Typography variant="h5" gutterBottom>{item.title}</Typography>
                    <Typography variant="body1" gutterBottom>{item.date}</Typography>
                    <Typography variant="body2" gutterBottom>{item.content.substring(0, 150)}...</Typography>
                    <Box>
                      <Link to={`/blog/${item.id}`} className="nav-item">
                        <Button>Read more</Button>
                      </Link>
                  </Box>
                    </Box>
              </Box>
                    ))}
        </Box>

        {/* other posts */}
        <Grid container>
            <Grid item xs={12} md={4}>1</Grid>
            <Grid item xs={12} md={4}>2</Grid>
            <Grid item xs={12} md={4}>3</Grid>
            <Grid item xs={12} md={4}>4</Grid>
            <Grid item xs={12} md={4}>5</Grid>
            <Grid item xs={12} md={4}>6</Grid>
        </Grid>
    </Box>
    </Box>
      <DownloadMobileApp />
</>
  )
}


export default Blog
