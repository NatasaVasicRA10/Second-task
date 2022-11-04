import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { validationSchema } from '../schema';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const navigate = useNavigate();

  const initialValues = {
    name: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: ''
  };

  const handleSignUp = async (values, props) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(
        auth.currentUser,
        {displayName: values.name + ' ' + values.lastName})
        .catch(
          () => toast.error('Something went wrong.', {
            position: toast.POSITION.TOP_RIGHT
          })
        );
    } catch (error) {
      toast.error('Something went wrong.', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    props.resetForm();
    props.setSubmitting(false);
    navigate('/home');
  };

  return (
    <Grid container className='SignUpGridStyle' spacing={2}>
      <ToastContainer />
      <Paper className='PaperStyle' elevation={24}>
        <Grid item className='SignUpTitle'>
          <h2>Sign Up</h2>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account</Typography><br/>
          <Typography variant='caption' gutterBottom>Already have an account?{' '}
            <Link to='signIn' className='underline'>
              Sign in
            </Link>
          </Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSignUp}>
          {(props) => (
            <Form>
              <Field as={TextField} fullWidth name='name' label='Name'
                placeholder='Enter your name'/>
              <div className='Error'>
                <ErrorMessage name='name' />
              </div>
              <Field as={TextField} fullWidth name='lastName' label='Last name'
                placeholder='Enter your last name'/>
              <div className='Error'>
                <ErrorMessage name='lastName' />
              </div>
              <Field as={TextField} fullWidth name='password' type='password'
                label='Password' placeholder='Enter your password'/>
              <div className='Error'>
                <ErrorMessage name='password' />
              </div>
              <Field as={TextField} fullWidth name='confirmPassword' type='password'
                label='Confirm Password' placeholder='Confirm your password'/>
              <div className='Error'>
                <ErrorMessage name='confirmPassword' />
              </div>
              <Field as={TextField} fullWidth name='email' label='Email'
                placeholder='Enter your email'/>
              <div className='Error'>
                <ErrorMessage name='email' />
              </div>
              <Grid item align='center'>
                <Button
                  type='submit'
                  variant='contained'
                  disabled={props.isSubmitting || !props.isValid || !props.dirty}
                  color='primary'>Sign up
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;

SignUp.propTypes = {
  resetForm: PropTypes.func,
  setSubmitting: PropTypes.func,
  isSubmitting: PropTypes.bool,
  isValid: PropTypes.bool,
  dirty: PropTypes.bool
};