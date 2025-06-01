import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import PrimaryButton from '../../components/PrimaryButton';

const SignUp: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md bg-neutral-100 rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">Create Your PET Account</h2>
                <form className="space-y-4">
                    <TextInput
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                    />
                    <TextInput
                        label="Firstname"
                        type="text"
                        placeholder="John"
                    />
                    <TextInput
                        label="Lastname"
                        type="text"
                        placeholder="Peter"
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                    />
                    <TextInput
                        label="Confirm Password"
                        type="password"
                        placeholder="••••••••"
                    />
                    <PrimaryButton
                        label="Create Account"
                        fullWidth={true}
                    />
                </form>
                <p className="text-sm text-zinc-400 text-center mt-6">
                    Already have an account?{' '}
                    <Link to="/sign-in" className="text-black underline hover:text-zinc-500">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;