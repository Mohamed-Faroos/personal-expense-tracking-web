import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import PrimaryButton from '../../components/PrimaryButton';
import useSignUpAction from './useSignUpAction';
import SuccessPopup from '../../components/SuccessPopup';

const SignUp: React.FC = () => {

    const { stateSignup, formData, errorMessage, onChangeInput, onClickSignUp, onClickSuccessOkBtn } = useSignUpAction();
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md bg-neutral-100 rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">Create Your PET Account</h2>
                <form className="space-y-4">
                    <TextInput
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        name="email"
                        value={formData.email}
                        onChange={onChangeInput}
                    />
                    <TextInput
                        label="Firstname"
                        type="text"
                        placeholder="John"
                        name="fistName"
                        value={formData.fistName}
                        onChange={onChangeInput}
                    />
                    <TextInput
                        label="Lastname"
                        type="text"
                        placeholder="Peter"
                        name="lastName"
                        value={formData.lastName}
                        onChange={onChangeInput}
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        name="password"
                        value={formData.password}
                        onChange={onChangeInput}
                    />
                    <TextInput
                        label="Confirm Password"
                        type="password"
                        placeholder="••••••••"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={onChangeInput}
                    />
                    {(errorMessage || stateSignup.error) && (
                        <p className="text-red-500 text-sm text-center">{errorMessage || stateSignup.error}</p>
                    )}
                    <PrimaryButton
                        label="Create Account"
                        fullWidth={true}
                        onClick={onClickSignUp}
                        disabled={stateSignup.loading}
                    />
                </form>
                <p className="text-sm text-zinc-400 text-center mt-6">
                    Already have an account?{' '}
                    <Link to="/sign-in" className="text-black underline hover:text-zinc-500">
                        Sign in
                    </Link>
                </p>
            </div>
            <SuccessPopup
                isOpen={stateSignup.success ? true : false}
                title="Great!"
                description="Your account has been created successfully!"
                buttonLabel="Sign in Now"
                onButtonClick={onClickSuccessOkBtn}
            />
        </div>
    );
};

export default SignUp;