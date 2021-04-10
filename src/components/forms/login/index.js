import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../context/AuthProvider';
import { Redirect, useHistory } from 'react-router-dom';
import { paths } from '../../../constants/paths';
import {
    StyledFormSection,
    StyledForm,
    StyledDiv,
    StyledInput,
    StyledLabel,
    StyledButton,
} from "../style";

const Login = () => {

    const context = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    console.log(context);

    return (<StyledFormSection>
        <h2>Log In To Your Profile!</h2>
        <p>Enter your account details to gain access to your profile!</p>
        <StyledForm onSubmit={handleSubmit(context.submitLoginForm)}>
            <StyledDiv>

                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput placeholder="email" type="text" {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })} />

                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput placeholder="password" {...register("password", { required: true, minLength: 6 })} />

                <StyledInput type="submit" />
                <StyledButton onClick={() => history.push(paths.register)}>REGISTER</StyledButton>
            </StyledDiv>

        </StyledForm>
        <StyledDiv>
        </StyledDiv>

    </StyledFormSection>
    );
};

export default Login;