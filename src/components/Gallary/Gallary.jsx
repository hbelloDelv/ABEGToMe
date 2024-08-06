import React,{useState, useEffect} from 'react'
import {Box, Typography, Button} from '@mui/material'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from './galleryData';


const Gallery = () => {
  const [images, setImages] = useState([])
  const [imagesPerPage, setImagesPerPage] = useState(4)
  const [page, setPage] = useState(1)


  useEffect(()=>{
      setImages(itemData.slice(0, page * imagesPerPage))
  },[page])


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
      <Typography variant="h4">Gallery</Typography>
    </Box>


{/* Gallery component */}

<Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: '64px'
    }}>
    <Box
        sx={{
        width:{xs: '90%', md: '80%'} ,
        mb: "72px",
        // bgcolor: 'red'
        }}>
       <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={item.img}
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '32px'
        }}
      ><Button onClick={()=>setPage(page + 1)}>See more</Button></Box>
  </Box>

  </Box>


</>
  )
}


export default Gallery

