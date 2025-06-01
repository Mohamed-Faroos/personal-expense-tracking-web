import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import PrimaryButton from '../../components/PrimaryButton';
import useSignInAction from './useSignInAction';

const SignIn: React.FC = () => {

    const { onClickSignIn } =  useSignInAction();

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md bg-neutral-100 rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">Login to Your PET Account</h2>
                <div className="space-y-4">
                    <TextInput
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                    />
                    <PrimaryButton
                        label="Login"
                        fullWidth={true}
                        onClick={onClickSignIn}
                    />
                </div>
                <p className="text-sm text-zinc-400 text-center mt-6">
                    Don’t have an account?{' '}
                    <Link to="/sign-up" className="text-black underline hover:text-zinc-500">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;