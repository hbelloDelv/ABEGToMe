import { Grid, Typography, Card, CardContent, Box, CardMedia, Button } from '@mui/material'
import { serviceData } from './serviceData'





export const GridItem = () =>{
    return (
        <>
            {serviceData.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <Card>
                        <CardMedia
                            sx={{ height: 140, display: 'flex', justifyContent: 'center', alignItems: 'center', relative: 'absolute' }}
                        >
                            {item.img ? <item.img size={120} /> : <div>No Image</div>}
                            </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" align="center">
                                {item.service}
                            </Typography>
                        </CardContent>
                        
                    </Card>
                        {/* <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                backgroundColor: 'rgb(0, 0, 0, 0.2)',
                                backgroundBlendMode: 'darken',
                            }}

                        >click</Box> */}
                </Grid>
            ))}
        </>
    );
}