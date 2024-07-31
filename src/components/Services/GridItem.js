import { Grid, Typography, Card, CardContent, CardMedia, Box, Button} from '@mui/material'
import { serviceData } from './serviceData'
import { Link} from 'react-router-dom';
import {useState} from 'react'



export const GridItem = () =>{
    const [isHover, setisHover] = useState(false)


   const handleHover = (e) =>{
            console.log(e.target)
    }
    return (
        <>
            {serviceData.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <Card onMouseOver={handleHover}>
                        <CardMedia
                            sx={{ height: 140, display: 'flex', justifyContent: 'center', alignItems: 'center', relative: 'absolute' }}
                        >
                            {item.itemIcon ? <item.itemIcon size={120} /> : <div>No Image</div>}
                            </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" align="center">
                                {item.title}
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                color: 'white',
                            }}>
                                <Button>
                                    <Link to={`/services/${item.id}`} className="nav-item">Learn more</Link>
                                </Button>
                            </Box>
                        </CardContent>
                        
                    </Card>
                      
                </Grid>
            ))}
        </>
    );
}