import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import CountryCard from '../Card/Card'; 

const CountrySection = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try{
                const response = await axios.get('https://xcountries-backend.azurewebsites.net/all');
                setCountries([...response.data]);
            } catch (error)
            {
                console.error('Error fetching countries data: ', error);
            }
        };
        fetchCountries();
    }, []);

    return (
        <div>
            <Grid container spacing={1} style={{marginTop: '20px', padding: '20px'}}>
                {countries.map((country) => (
                    <Grid item key={country.abbr} lg={1.7}>
                        <CountryCard image={country.flag} title={country.name} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CountrySection;