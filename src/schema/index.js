import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const nameRules = /^[A-Z][a-z]{1,15}$/;

export const validationSchema = yup.object().shape({
    name: yup.string().matches(nameRules, "Name must be at least 2 characters long with first upper case letter, no spaces, special characters or numbers").required("Required"),
    lastName: yup.string().matches(nameRules, "Last name must be at least 2 characters long with first upper case letter, no spaces, special characters or numbers").required("Required"),
    password: yup.string().matches(passwordRules, "Please create a stronger password with min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit").required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required")
})