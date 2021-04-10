import React, { useContext } from "react";
import { AuthContext } from '../../../context/AuthProvider';
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from 'react-router-dom';
import { paths } from '../../../constants/paths';
import {
  StyledFormSection,
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledLabel,
  StyledError,
  StyledButton,
} from "../style";
import Button from "../../atoms/Button";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const history = useHistory();

  const { redirectLogin, submitRegistrationForm, isAuthenticated } = useContext(AuthContext);

  return redirectLogin  ? (
    <Redirect to={paths.login} />
  ) : (
    <StyledFormSection><h2>Register New Account!</h2>
    <p>Please fill in your information to create your account</p>
    <StyledForm onSubmit={handleSubmit(submitRegistrationForm)}>
    <StyledDiv>
      <StyledLabel htmlFor="name">Name</StyledLabel>
      <StyledInput placeholder="Your name"  {...register("name", { required: true, maxLength: 80 })} />
      {errors.name && (
        <StyledError>
          Name is required!
        </StyledError>
      )}
      <StyledLabel htmlFor="email">Email</StyledLabel>
      <StyledInput placeholder="Your email" type="text" {...register("email", {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      })} />
      {errors.email && errors.email.type === "required" && (
        <StyledError>Email is required!</StyledError>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <StyledError>Email format is wrong!</StyledError>
      )}
</StyledDiv>
<StyledDiv>
      <StyledLabel htmlFor="password">Password</StyledLabel>
      <StyledInput placeholder="password" {...register('password', { required: true, minLength: 6 })} />
      {errors.password && (
        <StyledError>
          Password needs to be at least 6 characters long!
        </StyledError>
      )}
      <StyledLabel htmlFor="city">City</StyledLabel>
      <StyledInput placeholder="city" {...register("city", { required: true, maxLength: 80 })} />
      {errors.city && (
        <StyledError>
          City is required!
        </StyledError>
      )}
      <StyledButton type="submit">SUBMIT</StyledButton>
      <StyledButton onClick={() => history.push(paths.login)}>LOGIN</StyledButton>
      </StyledDiv>
    </StyledForm>
    </StyledFormSection>
  );
};

export default Register;
