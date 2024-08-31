// src/components/Form.js

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  description: Yup.string().required('Description is required')
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      description: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:8080/api/data', values);
        console.log('Data saved successfully:', response.data);
        // Optionally reset the form
        formik.resetForm();
      } catch (error) {
        console.error('Error saving data:', error);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        fullWidth
        margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        fullWidth
        margin="normal"
      />
      <TextField
        name="description"
        label="Description"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
