import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../state/store";
import type { SignUpRequestType } from "../../contants/types/user";
import { userSignUp, userSignUpClear } from "../../state/signup/signUp";
import type { SignUpState } from "../../state/signup/types";

const useSignUpAction = () => {
    const stateSignup: SignUpState = useSelector((state: RootState) => state.signUp);
    const dispatch = useDispatch<AppDispatch>();

    const [formData, setFormData] = useState<SignUpRequestType>({
        email: "",
        password: "",
        fistName: "",
        lastName: "",
        confirmPassword: ""
    });
    const [errorMessage, setErrorMessage] = useState<string>("");

    /**
     * The onChangeInput function updates the form data with the new value of the input field specified by
     * the name attribute.
     */
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    /**
     * The onClickSignUp function handles form validation and dispatches a userSignUp action with the
     * form data.
     */
    const onClickSignUp = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const { email, password, fistName, lastName, confirmPassword } = formData;

        if (!email || !password || !fistName || !lastName || !confirmPassword) {
            setErrorMessage("All fields are required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Invalid email format.");
            return;
        }

        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        setErrorMessage("");
        dispatch(userSignUp({
            email: formData.email,
            password: formData.password,
            fistName: formData.fistName,
            lastName: formData.lastName
        }));
    };

    const onClickSuccessOkBtn = () => {
        setErrorMessage("");
        setFormData({
            email: "",
            password: "",
            fistName: "",
            lastName: "",
            confirmPassword: ""
        });
        dispatch(userSignUpClear());
        window.location.href = '/sign-in'
    }

    return { stateSignup, formData, errorMessage, onChangeInput, onClickSignUp, onClickSuccessOkBtn }
}

export default useSignUpAction;