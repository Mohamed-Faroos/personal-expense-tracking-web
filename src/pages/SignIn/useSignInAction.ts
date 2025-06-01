import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../state/store";
import { userLogin } from "../../state/session/userLogin";
import type { LoginRequestType } from "../../contants/types/user";
import { useState } from "react";
import { validateEmail } from "../../lib";
import type { SessionState } from "../../state/session/types";

const useSignInAction = () => {
    const stateSession: SessionState = useSelector((state: RootState) => state.session);
    const dispatch = useDispatch<AppDispatch>();

    const [formData, setFormData] = useState<LoginRequestType>({
        email: "",
        password: ""
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
     * The onClickSignIn function handles form validation for email and password before dispatching a
     * user login action.
     */
    const onClickSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!formData.email) {
            setErrorMessage("Email is required.");
            return;
        }
        if (!validateEmail(formData.email)) {
            setErrorMessage("Invalid email format.");
            return;
        }

        if (!formData.password) {
            setErrorMessage("Password is required.");
            return;
        }

        setErrorMessage("");
        dispatch(userLogin({
            email: formData.email,
            password: formData.password
        }));
    };

    return { stateSession, formData, errorMessage, onChangeInput, onClickSignIn };
}

export default useSignInAction;