import { Grid, Typography, Card, CardContent, CardMedia, Button, CardActions, CardActionArea} from '@mui/material'
import { serviceData } from './serviceData'
import { Link} from 'react-router-dom';




export const GridItem = () =>{
    return (
        <>
            {serviceData.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                        <Link to={`/services/${item.id}`} className="nav-item">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={item.itemHeroImg}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.title}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        <CardActions>
                            <Button  color="primary">
                            <Link to={`/services/${item.id}`} className="nav-item">Learn more</Link>
                            </Button>
                        </CardActions>
                        </Card>
                      
                </Grid>
            ))}
        </>
    );
}