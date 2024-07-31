import React from 'react';
import {Box, Grid, Typography, } from '@mui/material'

import { useParams } from 'react-router-dom';


const DetailPage = ({serviceData}) => {
    // Use useParams to get the id from the URL
    const { id } = useParams();


    return(
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
      <Typography variant="h4">Our Services</Typography>
    </Box>

{/* Detail component */}
<Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: '64px'
    }}>
      <Box
      sx={{
      width:{xs: '90%', md: '80%'} ,
    //   backgroundColor: 'red',
    mb: "72px"
    }}>
        {serviceData.filter(item => item.id === id).map((item, index)=>(
        <Grid container spacing={2}>
                <Grid item xs={12} md={6} key={index}>
                            <Box 
                                component="img"
                                src={item.itemHeroImg}
                                width="100%"
                                alt="item hero image"
                            >
                            </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container>
                        <Grid item md={12} xs={12}>
                            <Typography variant="h4">{item.title}</Typography>
                        </Grid>
                        <Grid item md={12} xs={12} >
                            {/* nested maping for each sub items */}
                            {item.subTypes.map(list =>(
                                <Grid container key={list.id} >
                                    <Grid item md={12}>
                                        <Typography variant="h6">{list.subTitle}</Typography>
                                        <Typography variant="body1" >{list.Description}</Typography>
                                    </Grid>   
                                </Grid>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                        <Grid container spacing={4} mt="72px">
                            {item.images.map(eachImage =>(
                                    <Grid item md={4}>
                                        <Box 
                                            component="img"
                                            src={eachImage}
                                            width="100%"
                                            alt="item hero image"
                                        >
                                        </Box>
                                    </Grid>
                            ))} 
                        </Grid>
            </Grid>
        </Grid>
    
        ))}
    </Box>
</Box>
</>
    )
};

export default DetailPage;