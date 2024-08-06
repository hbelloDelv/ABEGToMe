import React from 'react';
import {Box, Grid, Typography, } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom';



const BlogDetail = ({blogData}) => {
       // Use useParams to get the id from the URL
       const { id } = useParams();
       const navigate = useNavigate()

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
    
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: '64px'
    }}>
    <Box
        sx={{
        width:{xs: '90%', md: '80%'} ,
        mb: "72px"
        }}>
        
        {/* detail content */}     
      <Box>
        {blogData.filter(item => item.id === id).map((item, index)=>(
          <>
          <Typography variant="h4"  mb="32px">{item.title}</Typography>
                <Box 
                    component="img"
                    src={item.img}
                    width="100%"
                    alt="item hero image"
                    borderRadius="8px"
                    mb="32px"
                >
                </Box>
          <Typography variant="body1"  mb="32px">{item.date}</Typography>
          <Typography variant="body2"  mb="32px">{item.content}</Typography>
        </>
        ))}
      </Box>

    </Box>
    </Box>


    </>
  )
}






export default BlogDetail
