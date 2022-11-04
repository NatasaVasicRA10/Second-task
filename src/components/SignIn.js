import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { validationSchemaSignIn } from '../schema';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {

  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: ''
  };

  const handleSignIn = async (values, props) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      props.resetForm();
      props.setSubmitting(false);
      navigate('/home');
    } catch (error) {
      switch (error.message) {
        case 'Firebase: Error (auth/wrong-password).':
          toast.error('Wrong password.', {
            position: toast.POSITION.TOP_RIGHT
          });
          break;
        case 'Firebase: Error (auth/user-not-found).':
          toast.error('No user found with this email.', {
            position: toast.POSITION.TOP_RIGHT
          });
          break;
        default:
          toast.error('Login failed. Please try again.', {
            position: toast.POSITION.TOP_RIGHT
          });
          break;
      }
    }
  };

  return (
    <Grid container className='SignUpGridStyle' spacing={2}>
      <ToastContainer />
      <Paper className='PaperStyle' elevation={24}>
        <Grid item className='SignUpTitle'>
          <h2>Sign In</h2>
          <Typography variant='caption' gutterBottom>Don&apos;t have an account yet?{' '}
            <Link to='/' className='underline'>
              Sign up
            </Link>
          </Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchemaSignIn} onSubmit={handleSignIn}>
          {(props) => (
            <Form>
              <Field as={TextField} fullWidth name='email' label='Email'
                placeholder='Enter your email'/>
              <div className='Error'>
                <ErrorMessage name='email' />
              </div>
              <Field as={TextField} fullWidth name='password' type='password'
                label='Password' placeholder='Enter your password'/>
              <div className='Error'>
                <ErrorMessage name='password' />
              </div>
              <Grid item align='center'>
                <Button
                  type='submit'
                  variant='contained'
                  disabled={props.isSubmitting || !props.isValid || !props.dirty}
                  color='primary'>Sign in
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignIn;

SignIn.propTypes = {
  resetForm: PropTypes.func,
  setSubmitting: PropTypes.func,
  isSubmitting: PropTypes.bool,
  isValid: PropTypes.bool,
  dirty: PropTypes.bool
};