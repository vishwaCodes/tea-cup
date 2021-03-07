import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import CheckoutFormInput from './CheckoutFormInput';

const AddressForm = () => {
  const methods = useForm();

  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <CheckoutFormInput required name='firstName' label='First Name' />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
