import React, { useState } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { validationSchemaSignIn } from '../schema';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import {
  Flex,
  Box,
  Input,
  Stack,
  Button,
  Heading,
  // eslint-disable-next-line no-shadow
  Text,
  InputGroup,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const SignIn = () => {

  const [ showPassword, setShowPassword ] = useState(false);

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
          alert('Wrong password');
          break;
        case 'Firebase: Error (auth/user-not-found).':
          alert('No user found with this email.');
          break;
        default:
          alert('Login failed. Please try again.');
          break;
      }
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      w={'100%'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} minW='lg' maxW='lg' py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Formik initialValues={initialValues} validationSchema={validationSchemaSignIn} onSubmit={handleSignIn}>
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <Stack spacing={2}>
                  <Stack>
                    <Field as={Text}>Email</Field>
                    <Field as={Input} name='email' label='Email'/>
                    <Text color='red'><ErrorMessage name='email' /></Text>
                  </Stack>
                  <Stack>
                    <Field as={Text}>Password</Field>
                    <InputGroup>
                      <Field
                        as={Input}
                        name='password'
                        label='Password'
                        type={showPassword ? 'text' : 'password'}/>
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() =>
                            // eslint-disable-next-line no-shadow
                            setShowPassword((showPassword) => !showPassword)
                          }>
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Text color='red'><ErrorMessage name='password' /></Text>
                  </Stack>
                </Stack>
                <Stack pt={6}>
                  <Button
                    size='lg'
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    disabled={props.isSubmitting || !props.isValid || !props.dirty}
                    type='submit'>Sign in
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
          <Stack pt={6}>
            <Text align={'center'}>Don&apos;t have an account yet?{' '}
              <Link to='/' style={{color: 'blue'}}>
                Sign up
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignIn;

SignIn.propTypes = {
  resetForm: PropTypes.func,
  setSubmitting: PropTypes.func,
  isSubmitting: PropTypes.bool,
  isValid: PropTypes.bool,
  dirty: PropTypes.bool,
  handleSubmit: PropTypes.func
};