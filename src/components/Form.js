import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    description: Yup.string().required('Description is required'),
});

const FormComponent = () => {
    const handleSubmit = (values, { resetForm }) => {
        fetch('http://localhost:8080/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data submitted:', data);
            resetForm();
        })
        .catch(error => console.error('Error submitting data:', error));
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', description: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field
                        as={TextField}
                        name="name"
                        label="Name"
                        fullWidth
                        margin="normal"
                        helperText={<ErrorMessage name="name" />}
                    />
                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        margin="normal"
                        helperText={<ErrorMessage name="email" />}
                    />
                    <Field
                        as={TextField}
                        name="description"
                        label="Description"
                        fullWidth
                        margin="normal"
                        helperText={<ErrorMessage name="description" />}
                    />
                    <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default FormComponent;
