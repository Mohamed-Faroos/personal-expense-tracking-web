import type React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    fullWidth?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, fullWidth, className, ...props }) => {

    return (
        <button
            className={className + " py-2 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-700 cursor-pointer " + (fullWidth ? " w-full" : "")}
            {...props}
        >
            {label}
        </button>
    );
}

export default PrimaryButton;
