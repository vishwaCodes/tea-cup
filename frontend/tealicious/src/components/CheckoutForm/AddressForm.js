import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import CheckoutFormInput from './CheckoutFormInput';

import { commerce } from '../../lib/commerce';

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const countries = Object.entries(shippingCountries).map(([code, countryName]) => ({ id: code, label: countryName }))
  console.log('countries:', countries);

  const subdivisions = Object.entries(shippingSubdivisions).map(([subCode, subdivisionName]) => ({ id: subCode, label: subdivisionName }))
  console.log('subdivisions:', subdivisions);
  


  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  }

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivisions(Object.keys(subdivisions));
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);

  }, [shippingCountry]);

  const methods = useForm();

  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Information</Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <CheckoutFormInput required name='firstName' label='First Name' />
            <CheckoutFormInput required name='lastName' label='Last Name' />
            <CheckoutFormInput required name='address1' label='Address' />
            <CheckoutFormInput required name='email' label='Email' />
            <CheckoutFormInput required name='city' label='City' />
            <CheckoutFormInput required name='zip' label='Postal / ZIP Code' />

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select 
                </MenuItem>
              </Select>
            </Grid> */}

          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
