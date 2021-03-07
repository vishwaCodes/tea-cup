import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';


function CheckoutFormInput({ name, label, required}) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
      />
    </Grid>
  );
}

export default CheckoutFormInput;