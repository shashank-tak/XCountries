import React from 'react';
import { Card, CardContent, CardMedia, Chip } from '@mui/material';

const CountryCard = ({ image, title}) => {
    return (
        <Card sx={{ borderRadius: 2}}>
            <CardMedia 
             component="img"
             height="80%"
             image={image}
             alt='country flag'
             sx={{objectFit: 'cover'}}
            />
            <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                <Chip label={`${title}`} sx={{backgroundColor: 'white' , color:'black', alignSelf:'center'}}></Chip>
            </CardContent>
        </Card>
    );
};

export default CountryCard;