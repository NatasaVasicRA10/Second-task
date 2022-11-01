import React, { useState } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { validationSchema } from '../schema';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
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

const SignUp = () => {

  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);

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
          () => alert('Something went wrong.')
        );
    } catch (error) {
      alert('Something went wrong.');
    }
    props.resetForm();
    props.setSubmitting(false);
    navigate('/home');
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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Heading fontSize={'lg'} color={'gray.600'}>
            Please fill this form to create an account
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSignUp}>
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <Stack spacing={2}>
                  <Stack>
                    <Field as={Text}>Name</Field>
                    <Field as={Input} name='name' label='Name'/>
                    <Text color='red'><ErrorMessage name='name' /></Text>
                  </Stack>
                  <Stack>
                    <Field as={Text}>Last name</Field>
                    <Field as={Input} name='lastName' label='Last name'/>
                    <Text color='red'><ErrorMessage name='lastName' /></Text>
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
                  <Stack>
                    <Field as={Text}>Confirm your password</Field>
                    <InputGroup>
                      <Field
                        as={Input}
                        name='confirmPassword'
                        label='Confirm Password'
                        type={showConfirmPassword ? 'text' : 'password'}/>
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() =>
                            // eslint-disable-next-line no-shadow
                            setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword)
                          }>
                          {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Text color='red'><ErrorMessage name='confirmPassword' /></Text>
                  </Stack>
                  <Stack>
                    <Field as={Text}>Email</Field>
                    <Field as={Input} name='email' label='Email'/>
                    <Text color='red'><ErrorMessage name='email' /></Text>
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
                    type='submit'>Sign up
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
          <Stack pt={6}>
            <Text align={'center'}>
              Already a user? <Link to='signIn' style={{color: 'blue'}}>Login</Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;

SignUp.propTypes = {
  resetForm: PropTypes.func,
  setSubmitting: PropTypes.func,
  isSubmitting: PropTypes.bool,
  isValid: PropTypes.bool,
  dirty: PropTypes.bool,
  handleSubmit: PropTypes.func
};