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

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    console.log('Countries:', countries);
    setShippingCountries(countries);
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, []);

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

            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select 
                </MenuItem>
              </Select>

            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select 
                </MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
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
