import type React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isRequired?: boolean;
}
const TextInput: React.FC<TextInputProps> = ({ label, isRequired = false, ...props }) => {
    return (
        <div>
            <label className="block text-sm text-zinc-900 mb-1">
                {label}
                {isRequired && <span className="text-red-500">*</span>}
            </label>
            <input
                className="w-full px-4 py-2 rounded-lg bg-white text-black border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-black"
                {...props}
            />
        </div>
    );
}

export default TextInput;